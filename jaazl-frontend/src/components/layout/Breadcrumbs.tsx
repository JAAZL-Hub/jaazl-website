'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items = [], showHome = true }) => {
  const pathname = usePathname();
  
  // Generate breadcrumbs based on current path if no items provided
  const breadcrumbs: BreadcrumbItem[] = React.useMemo(() => {
    if (items.length > 0) return items;
    
    // Skip for homepage
    if (pathname === '/') return [];
    
    // Split the pathname and create breadcrumb items
    const paths = pathname.split('/').filter(p => p);
    return paths.map((path, index) => {
      // Create the href for this level
      const href = `/${paths.slice(0, index + 1).join('/')}`;
      
      // Format label to be more readable (capitalize, replace hyphens)
      const label = path
        .split('-')
        .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' ');
      
      // Check if this is the current (last) item
      const isCurrent = index === paths.length - 1;
      
      return { href, label, isCurrent };
    });
  }, [pathname, items]);

  // Don't render on homepage
  if (pathname === '/' && items.length === 0) return null;
  
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          {/* Home link */}
          {showHome && (
            <>
              <li>
                <Link 
                  href="/"
                  className="flex items-center text-gray-600 hover:text-blue-800 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              {/* Separator after home */}
              {(breadcrumbs.length > 0 || items.length > 0) && (
                <li className="text-gray-400">
                  <ChevronRight className="w-4 h-4" />
                </li>
              )}
            </>
          )}
          
          {/* Dynamic breadcrumb items */}
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.href}>
              <li>
                {item.isCurrent ? (
                  <span className="font-medium text-blue-800">{item.label}</span>
                ) : (
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-blue-800 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
              {/* Separator between items */}
              {index < breadcrumbs.length - 1 && (
                <li className="text-gray-400">
                  <ChevronRight className="w-4 h-4" />
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
