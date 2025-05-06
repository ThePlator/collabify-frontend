'use client';

import { useState } from 'react';
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
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-semibold text-neutral-900 dark:text-white">
        Settings
      </h1>

      <div className="grid gap-6 lg:grid-cols-[240px,1fr]">
        <nav className="space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700'
              }`}>
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="space-y-6 rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="siteName"
                  className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                  Site Name
                </label>
                <input
                  type="text"
                  id="siteName"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-white"
                  placeholder="Enter site name"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                  Site Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-white"
                  placeholder="Enter site description"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-900 dark:text-white">
                  Maintenance Mode
                </label>
                <div className="flex items-center gap-3">
                  <button className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700">
                    Enable
                  </button>
                  <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                    Disable
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add content for other tabs */}
          {activeTab !== 'general' && (
            <div className="flex h-[300px] items-center justify-center text-sm text-neutral-600 dark:text-neutral-300">
              Content for {activeTab} settings will be implemented here
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
