'use client';
import {
  IconUsers,
  IconBrandProducthunt,
  IconChartBar,
} from '@tabler/icons-react';

export function AdminDashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,234',
      icon: <IconUsers className="h-6 w-6" />,
      change: '+12.3%',
    },
    {
      title: 'Products',
      value: '456',
      icon: <IconBrandProducthunt className="h-6 w-6" />,
      change: '+8.2%',
    },
    {
      title: 'Revenue',
      value: '$12,345',
      icon: <IconChartBar className="h-6 w-6" />,
      change: '+23.1%',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  {stat.title}
                </p>
                <p className="mt-2 text-3xl font-semibold text-neutral-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className="rounded-lg bg-neutral-100 p-3 dark:bg-neutral-700">
                {stat.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">
                {stat.change}
              </span>
              <span className="ml-2 text-sm text-neutral-600 dark:text-neutral-300">
                vs last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
          Recent Activity
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          A list of recent activities will appear here
        </p>
      </div>
    </div>
  );
}
