'use client';
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { IconTrendingUp, IconUsers, IconCrown } from '@tabler/icons-react';

interface TrendingTopic {
  title: string;
  count: number;
}

interface SuggestedConnection {
  name: string;
  role: string;
  avatar: string;
}

export function TrendingSidebar() {
  const trendingTopics: TrendingTopic[] = [
    { title: 'Next.js 14', count: 2504 },
    { title: 'Tailwind CSS', count: 1832 },
    { title: 'React Server Components', count: 1420 },
    { title: 'TypeScript 5.0', count: 1255 },
    { title: 'Web Development', count: 982 },
  ];

  const suggestedConnections: SuggestedConnection[] = [
    {
      name: 'Sarah Chen',
      role: 'Full Stack Developer',
      avatar: 'https://assets.aceternity.com/avatars/female1.jpeg',
    },
    {
      name: 'David Kumar',
      role: 'UX Designer',
      avatar: 'https://assets.aceternity.com/avatars/male1.jpeg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      avatar: 'https://assets.aceternity.com/avatars/female2.jpeg',
    },
  ];

  return (
    <div className="w-80 shrink-0 space-y-6 px-4 py-6 md:px-6">
      {/* Trending Topics */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <IconTrendingUp className="h-5 w-5 text-blue-500" />
          Trending Topics
        </div>
        <div className="mt-4 space-y-3">
          {trendingTopics.map((topic, idx) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white">
                  #{topic.title}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-500">
                  {topic.count.toLocaleString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Suggested Connections */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <IconUsers className="h-5 w-5 text-blue-500" />
          Suggested Connections
        </div>
        <div className="mt-4 space-y-4">
          {suggestedConnections.map((connection, idx) => (
            <motion.div
              key={connection.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex items-center gap-3">
              <img
                src={connection.avatar}
                alt={connection.name}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-neutral-900 group-hover:text-blue-500 dark:text-white">
                  {connection.name}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {connection.role}
                </p>
              </div>
              <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800">
                Connect
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Plan */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white dark:border-neutral-700">
        <div className="flex items-center gap-2 font-semibold">
          <IconCrown className="h-5 w-5" />
          Upgrade to Premium
        </div>
        <p className="mt-2 text-sm text-neutral-100">
          Get exclusive access to premium features and unlock your full
          potential.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="rounded-full bg-white/20 p-1" />
            Advanced analytics
          </li>
          <li className="flex items-center gap-2">
            <span className="rounded-full bg-white/20 p-1" />
            Custom themes
          </li>
          <li className="flex items-center gap-2">
            <span className="rounded-full bg-white/20 p-1" />
            Priority support
          </li>
        </ul>
        <button className="mt-6 w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 hover:bg-white/90 transition">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
