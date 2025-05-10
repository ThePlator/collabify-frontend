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
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'David Kumar',
      role: 'UX Designer',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      avatar:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop',
    },
  ];

  return (
    <div className="w-80 shrink-0 space-y-6 px-4 py-6 md:px-6">
      {/* Trending Topics */}
      <div className="rounded-xl border border-neutral-200/50 bg-gradient-to-br from-white to-neutral-50 p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700/50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <IconTrendingUp className="h-5 w-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-1 text-white" />
          Trending Topics
        </div>
        <div className="mt-4 space-y-3">
          {trendingTopics.map((topic, idx) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer rounded-lg p-2 transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-600 transition-colors group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent dark:text-neutral-400">
                  #{topic.title}
                </span>
                <span className="text-xs text-neutral-500 transition-colors group-hover:text-indigo-500 dark:text-neutral-500 dark:group-hover:text-indigo-400">
                  {topic.count.toLocaleString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Suggested Connections */}
      <div className="rounded-xl border border-neutral-200/50 bg-gradient-to-br from-white to-neutral-50 p-4 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700/50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <IconUsers className="h-5 w-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg p-1 text-white" />
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
              <button className="rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 px-3 py-1 text-xs font-medium text-emerald-600 transition-all duration-200 hover:from-emerald-500 hover:to-teal-500 hover:text-white dark:from-emerald-500/20 dark:to-teal-500/20 dark:text-emerald-400 dark:hover:text-white">
                Connect
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Plan */}
      <div className="overflow-hidden rounded-xl border border-neutral-200/10 bg-gradient-to-br from-violet-500 to-fuchsia-500 p-6 text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700/10">
        <div className="flex items-center gap-2 font-semibold">
          <IconCrown className="h-5 w-5 animate-pulse text-yellow-300" />
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
        <button className="mt-6 w-full rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/30 hover:shadow-lg">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}
