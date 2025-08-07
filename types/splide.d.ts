/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';

  export interface SplideOptions {
    type?: 'loop' | 'slide' | 'fade';
    rewind?: boolean;
    speed?: number;
    interval?: number;
    autoplay?: boolean;
    pauseOnHover?: boolean;
    pauseOnFocus?: boolean;
    arrows?: boolean;
    pagination?: boolean;
    perPage?: number;
    perMove?: number;
    gap?: string | number;
    padding?: string | number;
    width?: string | number;
    height?: string | number;
    fixedWidth?: string | number;
    fixedHeight?: string | number;
    breakpoints?: Record<number, Partial<SplideOptions>>;
    direction?: 'ltr' | 'rtl' | 'ttb';
    wheel?: boolean;
    wheelSleep?: number;
    releaseWheel?: boolean;
    drag?: boolean | 'free';
    focus?: boolean | 'center' | number;
    autoScroll?: {
      speed?: number;
      pauseOnHover?: boolean;
      pauseOnFocus?: boolean;
      rewind?: boolean;
      [key: string]: any;
    };
    snap?: boolean;
    noDrag?: string;
    flickPower?: number;
    flickMaxPages?: number;
    waitForTransition?: boolean;
    arrowPath?: string;
    keyboard?: boolean;
    live?: boolean;
    classes?: Record<string, string>;
    i18n?: Record<string, string>;
    extensions?: Record<string, any>;
    [key: string]: any;
  }

  export interface SplideProps {
    options?: SplideOptions;
    extensions?: Record<string, any>;
    transition?: any;
    hasTrack?: boolean;
    tag?: string;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    onMounted?: (splide: any) => void;
    onReady?: (splide: any) => void;
    onMove?: (splide: any, newIndex: number, prevIndex: number, destIndex: number) => void;
    onMoved?: (splide: any, newIndex: number, prevIndex: number, destIndex: number) => void;
    onClick?: (splide: any, slide: any, e: Event) => void;
    onArrowsMounted?: (splide: any, prev: HTMLButtonElement, next: HTMLButtonElement) => void;
    onArrowsUpdated?: (splide: any, prev: HTMLButtonElement, next: HTMLButtonElement) => void;
    onPaginationMounted?: (splide: any, data: any) => void;
    onPaginationUpdated?: (splide: any, data: any) => void;
    onNavigationMounted?: (splide: any) => void;
    onAutoplayPlaying?: (splide: any) => void;
    onAutoplayPaused?: (splide: any) => void;
    onLazyLoadLoaded?: (splide: any, img: HTMLImageElement, slide: any) => void;
    [key: string]: any;
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    tag?: string;
    [key: string]: any;
  }

  export interface SplideTrackProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    tag?: string;
    [key: string]: any;
  }

  export interface SplideListProps {
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    tag?: string;
    [key: string]: any;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
  export const SplideTrack: ComponentType<SplideTrackProps>;
  export const SplideList: ComponentType<SplideListProps>;
}

declare module '@splidejs/splide-extension-auto-scroll' {
  export interface AutoScrollOptions {
    speed?: number;
    pauseOnHover?: boolean;
    pauseOnFocus?: boolean;
    rewind?: boolean;
    [key: string]: any;
  }

  export const AutoScroll: any;
}