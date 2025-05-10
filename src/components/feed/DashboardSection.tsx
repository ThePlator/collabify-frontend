'use client';
import React from 'react';
import { motion } from 'motion/react';
import {
  IconEye,
  IconUsers,
  IconBriefcase,
  IconStar,
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface DashboardCard {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
}

interface ActivityItem {
  type: string;
  title: string;
  time: string;
  description: string;
}

export function DashboardSection() {
  const dashboardCards: DashboardCard[] = [
    {
      title: 'Profile Views',
      value: '2,847',
      change: 12,
      icon: <IconEye className="h-6 w-6 text-blue-500" />,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-100 dark:border-blue-800',
    },
    {
      title: 'Connections',
      value: '486',
      change: 8,
      icon: <IconUsers className="h-6 w-6 text-emerald-500" />,
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      borderColor: 'border-emerald-100 dark:border-emerald-800',
    },
    {
      title: 'Job Applications',
      value: '24',
      change: -3,
      icon: <IconBriefcase className="h-6 w-6 text-amber-500" />,
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      borderColor: 'border-amber-100 dark:border-amber-800',
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: 0.2,
      icon: <IconStar className="h-6 w-6 text-purple-500" />,
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-100 dark:border-purple-800',
    },
  ];

  const recentActivity: ActivityItem[] = [
    {
      type: 'connection',
      title: 'New Connection',
      time: '2 hours ago',
      description: 'Connected with Sarah Miller from TechVision Solutions',
    },
    {
      type: 'application',
      title: 'Job Application',
      time: '1 day ago',
      description:
        'Applied for Senior Product Designer position at InnovateTech',
    },
    {
      type: 'review',
      title: 'New Review',
      time: '3 days ago',
      description: 'Received a 5-star review for project completion',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white">
        Track your activity and engagement
      </motion.h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`rounded-xl border ${
              card.borderColor || 'border-neutral-200 dark:border-neutral-700'
            } bg-white p-6 dark:bg-neutral-800`}>
            <div className="flex items-center justify-between">
              <div
                className={`rounded-lg ${
                  card.bgColor || 'bg-neutral-100 dark:bg-neutral-700'
                } p-3`}>
                {card.icon}
              </div>
              <div
                className={cn(
                  'text-sm font-medium',
                  card.change > 0
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                )}>
                {card.change > 0 ? '+' : ''}
                {card.change}%
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {card.value}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {card.title}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-6 dark:border-neutral-700 dark:bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900">
        <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white">
          Recent Activity
        </h2>
        <div className="space-y-6">
          {recentActivity.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-start space-x-4 border-b border-neutral-200 pb-4 last:border-0 dark:border-neutral-700">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-neutral-900 dark:text-white">
                    {activity.title}
                  </h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {activity.time}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
