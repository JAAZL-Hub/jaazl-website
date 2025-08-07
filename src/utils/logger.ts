// Advanced logging system for JAAZL frontend application

export enum LogLevel {
  TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  FATAL = 5,
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: any;
  stackTrace?: string;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  component?: string;
  action?: string;
  performance?: {
    memory?: number;
    timing?: number;
  };
}

export interface LoggerConfig {
  level: LogLevel;
  enableConsole: boolean;
  enableRemote: boolean;
  remoteEndpoint?: string;
  enableLocalStorage: boolean;
  maxLocalStorageEntries: number;
  enablePerformanceLogging: boolean;
  enableUserTracking: boolean;
  enableStackTrace: boolean;
  environment: 'development' | 'staging' | 'production';
}

class Logger {
  private config: LoggerConfig;
  private sessionId: string;
  private logBuffer: LogEntry[] = [];
  private flushInterval: number | null = null;

  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = {
      level: LogLevel.INFO,
      enableConsole: true,
      enableRemote: false,
      enableLocalStorage: false,
      maxLocalStorageEntries: 1000,
      enablePerformanceLogging: true,
      enableUserTracking: false,
      enableStackTrace: true,
      environment: (process.env.NODE_ENV as any) || 'development',
      ...config,
    };

    this.sessionId = this.generateSessionId();
    this.setupFlushInterval();
    this.setupErrorHandlers();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private setupFlushInterval(): void {
    if (this.config.enableRemote) {
      this.flushInterval = window.setInterval(() => {
        this.flushLogs();
      }, 10000); // Flush every 10 seconds
    }
  }

  private setupErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.error('Global Error', {
        message: event.message,
        filename: event.filename,
        line: event.lineno,
        column: event.colno,
        error: event.error?.toString(),
        stack: event.error?.stack,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.error('Unhandled Promise Rejection', {
        reason: event.reason?.toString(),
        stack: event.reason?.stack,
      });
    });

    // Performance observer for long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) { // Log long tasks over 50ms
              this.warn('Long Task Detected', {
                duration: entry.duration,
                name: entry.name,
                startTime: entry.startTime,
              });
            }
          }
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        // PerformanceObserver not supported
      }
    }
  }

  private createLogEntry(
    level: LogLevel, 
    message: string, 
    context?: any,
    component?: string,
    action?: string
  ): LogEntry {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      sessionId: this.sessionId,
      component,
      action,
    };

    // Add URL and user agent in browser environment
    if (typeof window !== 'undefined') {
      entry.url = window.location.href;
      entry.userAgent = navigator.userAgent;
    }

    // Add stack trace for errors and warnings
    if (this.config.enableStackTrace && level >= LogLevel.WARN) {
      entry.stackTrace = new Error().stack;
    }

    // Add performance information
    if (this.config.enablePerformanceLogging && typeof window !== 'undefined') {
      entry.performance = {
        memory: (performance as any).memory?.usedJSHeapSize,
        timing: performance.now(),
      };
    }

    return entry;
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.config.level;
  }

  private logToConsole(entry: LogEntry): void {
    if (!this.config.enableConsole) return;

    const styles = this.getConsoleStyles(entry.level);
    const prefix = `[${entry.timestamp}] [${LogLevel[entry.level]}]`;

    switch (entry.level) {
      case LogLevel.TRACE:
      case LogLevel.DEBUG:
        console.debug(`%c${prefix}`, styles, entry.message, entry.context);
        break;
      case LogLevel.INFO:
        console.info(`%c${prefix}`, styles, entry.message, entry.context);
        break;
      case LogLevel.WARN:
        console.warn(`%c${prefix}`, styles, entry.message, entry.context);
        break;
      case LogLevel.ERROR:
      case LogLevel.FATAL:
        console.error(`%c${prefix}`, styles, entry.message, entry.context);
        if (entry.stackTrace) {
          console.error('Stack Trace:', entry.stackTrace);
        }
        break;
    }
  }

  private getConsoleStyles(level: LogLevel): string {
    switch (level) {
      case LogLevel.TRACE:
        return 'color: #999; font-size: 11px;';
      case LogLevel.DEBUG:
        return 'color: #007acc; font-weight: bold;';
      case LogLevel.INFO:
        return 'color: #28a745; font-weight: bold;';
      case LogLevel.WARN:
        return 'color: #ffc107; font-weight: bold;';
      case LogLevel.ERROR:
        return 'color: #dc3545; font-weight: bold;';
      case LogLevel.FATAL:
        return 'color: #fff; background-color: #dc3545; font-weight: bold; padding: 2px 4px;';
      default:
        return '';
    }
  }

  private logToLocalStorage(entry: LogEntry): void {
    if (!this.config.enableLocalStorage || typeof window === 'undefined') return;

    try {
      const key = 'jaazl_logs';
      const existingLogs = JSON.parse(localStorage.getItem(key) || '[]');
      
      existingLogs.push(entry);
      
      // Limit the number of stored logs
      if (existingLogs.length > this.config.maxLocalStorageEntries) {
        existingLogs.splice(0, existingLogs.length - this.config.maxLocalStorageEntries);
      }
      
      localStorage.setItem(key, JSON.stringify(existingLogs));
    } catch (error) {
      // localStorage might be full or disabled
      console.warn('Failed to save log to localStorage:', error);
    }
  }

  private addToBuffer(entry: LogEntry): void {
    this.logBuffer.push(entry);
    
    // Auto-flush if buffer gets too large
    if (this.logBuffer.length >= 50) {
      this.flushLogs();
    }
  }

  private async flushLogs(): Promise<void> {
    if (!this.config.enableRemote || !this.config.remoteEndpoint || this.logBuffer.length === 0) {
      return;
    }

    const logsToSend = [...this.logBuffer];
    this.logBuffer = [];

    try {
      await fetch(this.config.remoteEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          logs: logsToSend,
          metadata: {
            sessionId: this.sessionId,
            environment: this.config.environment,
            timestamp: new Date().toISOString(),
          },
        }),
      });
    } catch (error) {
      // Re-add logs to buffer if sending failed
      this.logBuffer.unshift(...logsToSend);
      console.warn('Failed to send logs to remote endpoint:', error);
    }
  }

  // Public logging methods
  public trace(message: string, context?: any, component?: string, action?: string): void {
    if (!this.shouldLog(LogLevel.TRACE)) return;

    const entry = this.createLogEntry(LogLevel.TRACE, message, context, component, action);
    this.logToConsole(entry);
    this.logToLocalStorage(entry);
    this.addToBuffer(entry);
  }

  public debug(message: string, context?: any, component?: string, action?: string): void {
    if (!this.shouldLog(LogLevel.DEBUG)) return;

    const entry = this.createLogEntry(LogLevel.DEBUG, message, context, component, action);
    this.logToConsole(entry);
    this.logToLocalStorage(entry);
    this.addToBuffer(entry);
  }

  public info(message: string, context?: any, component?: string, action?: string): void {
    if (!this.shouldLog(LogLevel.INFO)) return;

    const entry = this.createLogEntry(LogLevel.INFO, message, context, component, action);
    this.logToConsole(entry);
    this.logToLocalStorage(entry);
    this.addToBuffer(entry);
  }

  public warn(message: string, context?: any, component?: string, action?: string): void {
    if (!this.shouldLog(LogLevel.WARN)) return;

    const entry = this.createLogEntry(LogLevel.WARN, message, context, component, action);
    this.logToConsole(entry);
    this.logToLocalStorage(entry);
    this.addToBuffer(entry);
  }

  public error(message: string, context?: any, component?: string, action?: string): void {
    if (!this.shouldLog(LogLevel.ERROR)) return;

    const entry = this.createLogEntry(LogLevel.ERROR, message, context, component, action);
    this.logToConsole(entry);
    this.logToLocalStorage(entry);
    this.addToBuffer(entry);
  }

  public fatal(message: string, context?: any, component?: string, action?: string): void {
    if (!this.shouldLog(LogLevel.FATAL)) return;

    const entry = this.createLogEntry(LogLevel.FATAL, message, context, component, action);
    this.logToConsole(entry);
    this.logToLocalStorage(entry);
    this.addToBuffer(entry);
    
    // Immediately flush fatal errors
    this.flushLogs();
  }

  // Utility methods
  public setLevel(level: LogLevel): void {
    this.config.level = level;
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getLogs(): LogEntry[] {
    if (typeof window === 'undefined') return [];

    try {
      return JSON.parse(localStorage.getItem('jaazl_logs') || '[]');
    } catch (error) {
      return [];
    }
  }

  public clearLogs(): void {
    if (typeof window === 'undefined') return;

    localStorage.removeItem('jaazl_logs');
    this.logBuffer = [];
  }

  public exportLogs(): string {
    const logs = this.getLogs();
    return JSON.stringify(logs, null, 2);
  }

  public destroy(): void {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
      this.flushInterval = null;
    }
    
    // Final flush
    this.flushLogs();
  }
}

// Create singleton logger instance
const loggerConfig: Partial<LoggerConfig> = {
  level: process.env.NODE_ENV === 'development' ? LogLevel.DEBUG : LogLevel.INFO,
  enableConsole: true,
  enableLocalStorage: process.env.NODE_ENV === 'development',
  enableRemote: process.env.NODE_ENV === 'production',
  remoteEndpoint: process.env.NEXT_PUBLIC_LOGGING_ENDPOINT,
  environment: (process.env.NODE_ENV as any) || 'development',
};

export const logger = new Logger(loggerConfig);

// React hook for component-level logging
export const useLogger = (componentName: string) => {
  return {
    trace: (message: string, context?: any, action?: string) => 
      logger.trace(message, context, componentName, action),
    debug: (message: string, context?: any, action?: string) => 
      logger.debug(message, context, componentName, action),
    info: (message: string, context?: any, action?: string) => 
      logger.info(message, context, componentName, action),
    warn: (message: string, context?: any, action?: string) => 
      logger.warn(message, context, componentName, action),
    error: (message: string, context?: any, action?: string) => 
      logger.error(message, context, componentName, action),
    fatal: (message: string, context?: any, action?: string) => 
      logger.fatal(message, context, componentName, action),
  };
};

// Convenience functions for quick logging
export const logInfo = (message: string, context?: any) => logger.info(message, context);
export const logWarn = (message: string, context?: any) => logger.warn(message, context);
export const logError = (message: string, context?: any) => logger.error(message, context);
export const logDebug = (message: string, context?: any) => logger.debug(message, context);

export default logger;