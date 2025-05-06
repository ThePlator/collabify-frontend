'use client';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import {
  IconDashboard,
  IconUsers,
  IconSettings,
  IconReportAnalytics,
  IconBrandProducthunt,
  IconSun,
  IconMoon,
  IconMenu2,
  IconHome,
} from '@tabler/icons-react';

interface AdminSidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function AdminSidebar({ open, setOpen }: AdminSidebarProps) {
  const { theme, setTheme } = useTheme();
  const links = [
    {
      label: 'Home',
      href: '/',
      icon: <IconHome className="h-5 w-5" />,
    },
    {
      label: 'Dashboard',
      href: '/admin',
      icon: <IconDashboard className="h-5 w-5" />,
    },
    {
      label: 'Users',
      href: '/admin/users',
      icon: <IconUsers className="h-5 w-5" />,
    },
    {
      label: 'Products',
      href: '/admin/products',
      icon: <IconBrandProducthunt className="h-5 w-5" />,
    },
    {
      label: 'Analytics',
      href: '/admin/analytics',
      icon: <IconReportAnalytics className="h-5 w-5" />,
    },
    {
      label: 'Jobs',
      href: '/admin/jobs',
      icon: <IconSettings className="h-5 w-5" />,
    },
    {
      label: 'Settings',
      href: '/admin/settings',
      icon: <IconSettings className="h-5 w-5" />,
    },
  ];

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-40 flex h-screen flex-col border-r border-neutral-200 bg-white transition-all dark:border-neutral-700 dark:bg-neutral-800 md:sticky',
        open ? 'w-64' : 'w-0 md:w-20'
      )}>
      <div className="fixed top-8 right-4 z-50 flex md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg bg-white/90 p-3 shadow-lg backdrop-blur-sm hover:bg-neutral-100 dark:bg-neutral-800/90 dark:hover:bg-neutral-700">
          <IconMenu2 className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
        </button>
      </div>
      <div className="flex items-center p-4">
        <Logo open={open} />
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto p-4">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2 text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
            {link.icon}
            <span className={cn('text-sm font-medium', !open && 'hidden')}>
              {link.label}
            </span>
          </a>
        ))}
      </nav>

      <div className="border-t border-neutral-200 p-4 dark:border-neutral-700">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
          {theme === 'dark' ? (
            <IconSun className="h-5 w-5" />
          ) : (
            <IconMoon className="h-5 w-5" />
          )}
          <span className={cn('text-sm font-medium', !open && 'hidden')}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </aside>
  );
}

function Logo({ open }: { open: boolean }) {
  return (
    <a href="/admin" className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-black dark:bg-white" />
      {open && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-semibold text-neutral-900 dark:text-white">
          Admin
        </motion.span>
      )}
    </a>
  );
}
