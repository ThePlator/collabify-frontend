'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconBell,
  IconLock,
  IconMail,
  IconPalette,
  IconServer,
  IconUser,
} from '@tabler/icons-react';
import { NotificationSetting, SecuritySetting } from '@/types/settings';

const tabs = [
  {
    id: 'general',
    label: 'General',
    icon: <IconServer className="h-4 w-4" />,
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: <IconUser className="h-4 w-4" />,
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <IconBell className="h-4 w-4" />,
  },
  {
    id: 'security',
    label: 'Security',
    icon: <IconLock className="h-4 w-4" />,
  },
  {
    id: 'appearance',
    label: 'Appearance',
    icon: <IconPalette className="h-4 w-4" />,
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  // Profile Settings
  const [profileSettings, setProfileSettings] = useState({
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    timezone: 'UTC-8',
    language: 'English',
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState<
    NotificationSetting[]
  >([
    {
      type: 'New Transactions',
      email: true,
      push: true,
      sms: false,
    },
    {
      type: 'Product Updates',
      email: true,
      push: false,
      sms: false,
    },
    {
      type: 'Security Alerts',
      email: true,
      push: true,
      sms: true,
    },
  ]);

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState<SecuritySetting[]>([
    {
      type: 'Two-Factor Authentication',
      enabled: true,
    },
    {
      type: 'Login Notifications',
      enabled: true,
    },
    {
      type: 'Suspicious Activity Alerts',
      enabled: true,
    },
  ]);

  // Appearance Settings
  const [theme, setTheme] = useState('system');
  const [compactMode, setCompactMode] = useState(false);

  // Session Settings
  const [sessionTimeout, setSessionTimeout] = useState('30');

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
        Settings
      </motion.h1>

      <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2 bg-white/50 dark:bg-neutral-800/50 p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 backdrop-blur-sm">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-neutral-900 to-neutral-800 text-white shadow-lg dark:from-white dark:to-neutral-200 dark:text-neutral-900'
                  : 'text-neutral-600 hover:bg-white hover:shadow-md dark:text-neutral-300 dark:hover:bg-neutral-700/50'
              }`}>
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 rounded-xl border border-neutral-200/50 bg-white/50 p-8 shadow-xl backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-800/50">
          {activeTab === 'general' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8">
              <div className="group rounded-lg border border-neutral-200/50 bg-white/30 p-6 transition-all duration-300 hover:bg-white/50 dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:bg-neutral-800/50">
                <label
                  htmlFor="siteName"
                  className="mb-2 block text-sm font-medium bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
                  Site Name
                </label>
                <input
                  type="text"
                  id="siteName"
                  className="w-full rounded-lg border border-neutral-200/50 bg-white/50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all duration-300 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/10 hover:bg-white dark:border-neutral-700/50 dark:bg-neutral-800/50 dark:text-white dark:placeholder-neutral-500 dark:focus:border-white dark:focus:bg-neutral-800 dark:focus:ring-white/10 dark:hover:bg-neutral-800"
                  placeholder="Enter site name"
                />
              </div>

              <div className="group rounded-lg border border-neutral-200/50 bg-white/30 p-6 transition-all duration-300 hover:bg-white/50 dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:bg-neutral-800/50">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
                  Site Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full rounded-lg border border-neutral-200/50 bg-white/50 px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all duration-300 focus:border-neutral-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900/10 hover:bg-white dark:border-neutral-700/50 dark:bg-neutral-800/50 dark:text-white dark:placeholder-neutral-500 dark:focus:border-white dark:focus:bg-neutral-800 dark:focus:ring-white/10 dark:hover:bg-neutral-800"
                  placeholder="Enter site description"
                />
              </div>

              <div className="group rounded-lg border border-neutral-200/50 bg-white/30 p-6 transition-all duration-300 hover:bg-white/50 dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:hover:bg-neutral-800/50">
                <label className="mb-2 block text-sm font-medium bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
                  Maintenance Mode
                </label>
                <div className="flex items-center gap-3">
                  <button className="flex-1 rounded-lg border border-neutral-200/50 bg-white/50 px-4 py-3 text-sm font-medium text-neutral-600 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md dark:border-neutral-700/50 dark:bg-neutral-800/50 dark:text-neutral-300 dark:hover:bg-neutral-700">
                    Enable
                  </button>
                  <button className="flex-1 rounded-lg bg-gradient-to-r from-neutral-900 to-neutral-800 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:shadow-md dark:from-white dark:to-neutral-200 dark:text-neutral-900">
                    Disable
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Add content for other tabs */}
          {activeTab !== 'general' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex h-[400px] items-center justify-center rounded-lg border border-neutral-200/50 bg-white/30 p-6 text-sm text-neutral-600 backdrop-blur-sm dark:border-neutral-700/50 dark:bg-neutral-800/30 dark:text-neutral-300">
              <div className="text-center">
                <div className="mb-4 text-4xl opacity-50">
                  {tabs.find((t) => t.id === activeTab)?.icon}
                </div>
                <p className="font-medium">
                  Content for {activeTab} settings will be implemented here
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
