'use client';
import React, { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/sidebar';
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconHome,
  IconUsers,
  IconBell,
  IconMessages,
  IconBriefcase,
  IconShoppingCart,
  IconHeadset,
  IconSun,
  IconMoon,
} from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { ConnectionSection } from './ConnectionSection';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { FeedSection } from './FeedSection';
import { TrendingSidebar } from './TrendingSidebar';
import { usePathname } from 'next/navigation';
import { ProfileSection } from './ProfileSection';
import { DashboardSection } from './DashboardSection';
import { NotificationsSection } from './NotificationsSection';
import { MessagesSection } from './MessagesSection';
import { FreelancingSection } from './FreelancingSection';
import { JobsSection } from './JobsSection';
import { MarketplaceSection } from './MarketplaceSection';
import { ShoppingCartSection } from './ShoppingCartSection';
import { SupportSection } from './SupportSection';

export function SidebarSection() {
  const links = [
    {
      label: 'Home',
      href: '/feed',
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Messages',
      href: '/messages',
      icon: (
        <IconMessages className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Connection',
      href: '/connections',
      icon: (
        <IconUsers className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: (
        <IconBell className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Freelancing',
      href: '/freelancing',
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Jobs',
      href: '/jobs',
      icon: (
        <IconBriefcase className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Marketplace',
      href: '/marketplace',
      icon: (
        <IconShoppingCart className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Support',
      href: '/support',
      icon: (
        <IconHeadset className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: 'Logout',
      href: '#',
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={cn(
        'flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800',
        'h-screen'
      )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-lg transition-colors">
                {theme === 'dark' ? (
                  <IconSun className="h-5 w-5 shrink-0" />
                ) : (
                  <IconMoon className="h-5 w-5 shrink-0" />
                )}
                <span
                  className={
                    open ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                  }>
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: 'Manu Arora',
                href: '/profile',
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white">
        Collabify
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900 overflow-y-auto scrollbar-none">
        {pathname === '/feed' ? (
          <FeedSection />
        ) : pathname === '/profile' ? (
          <ProfileSection />
        ) : pathname === '/dashboard' ? (
          <DashboardSection />
        ) : pathname === '/connections' ? (
          <ConnectionSection />
        ) : pathname === '/notifications' ? (
          <NotificationsSection />
        ) : pathname === '/messages' ? (
          <MessagesSection />
        ) : pathname === '/freelancing' ? (
          <FreelancingSection />
        ) : pathname === '/jobs' ? (
          <JobsSection />
        ) : pathname === '/marketplace' ? (
          <MarketplaceSection />
        ) : pathname === '/shoppingcart' ? (
          <ShoppingCartSection />
        ) : pathname === '/support' ? (
          <SupportSection />
        ) : null}
      </div>
      <div className="hidden lg:block overflow-y-auto">
        {pathname === '/feed' && <TrendingSidebar />}
      </div>
    </div>
  );
};
