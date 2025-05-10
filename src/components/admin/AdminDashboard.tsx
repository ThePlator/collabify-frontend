'use client';
import {
  IconUsers,
  IconBrandProducthunt,
  IconChartBar,
  IconArrowUpRight,
  IconArrowDownRight,
  IconActivity,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

export function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: <IconUsers className="h-6 w-6" />,
      change: '+12.3%',
      trend: 'up',
      sparkline: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      gradient: 'from-blue-600 to-blue-400',
      darkGradient: 'dark:from-blue-400 dark:to-blue-600',
    },
    {
      title: 'Products',
      value: '456',
      icon: <IconBrandProducthunt className="h-6 w-6" />,
      change: '+8.2%',
      trend: 'up',
      sparkline: [20, 25, 22, 30, 45, 42, 40, 60, 80],
      gradient: 'from-purple-600 to-purple-400',
      darkGradient: 'dark:from-purple-400 dark:to-purple-600',
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: <IconChartBar className="h-6 w-6" />,
      change: '+23.1%',
      trend: 'up',
      sparkline: [40, 50, 45, 60, 70, 65, 75, 95, 100],
      gradient: 'from-emerald-600 to-emerald-400',
      darkGradient: 'dark:from-emerald-400 dark:to-emerald-600',
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Welcome back! Here's what's happening with your platform.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <IconActivity className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
          <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
            Last updated: Just now
          </span>
        </div>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-neutral-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30">
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {stat.title}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`rounded-xl bg-gradient-to-br ${stat.gradient} ${stat.darkGradient} p-3 text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  {stat.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {stat.trend === 'up' ? (
                    <IconArrowUpRight className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <IconArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === 'up'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    vs last month
                  </span>
                </div>
              </div>
              <div className="mt-4 h-10">
                <svg className="h-full w-full" viewBox="0 0 100 20">
                  <polyline
                    points={stat.sparkline
                      .map(
                        (value, i) =>
                          `${(i * 100) / 8},${20 - (value * 20) / 125}`
                      )
                      .join(' ')}
                    fill="none"
                    stroke={`url(#gradient-${idx})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id={`gradient-${idx}`}
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0">
                      <stop
                        offset="0%"
                        stopColor="currentColor"
                        className={`text-${stat.gradient.split('-')[1]}-500`}
                      />
                      <stop
                        offset="100%"
                        stopColor="currentColor"
                        className={`text-${stat.gradient.split('-')[1]}-400`}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 rounded-xl bg-gradient-to-br from-white via-neutral-50 to-neutral-100 p-6 shadow-lg dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 dark:shadow-neutral-900/30">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
              Recent Activity
            </h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Track your platform's latest updates and changes
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="h-12 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-700"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
