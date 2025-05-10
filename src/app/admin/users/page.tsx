'use client';

import { useState } from 'react';
import {
  IconSearch,
  IconFilter,
  IconPlus,
  IconEdit,
  IconTrash,
  IconUsers,
  IconUserCheck,
  IconShield,
  IconActivity,
  IconFileExport,
  IconClock,
  IconChevronRight,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Mock statistics - replace with actual API call
  const stats = [
    {
      label: 'Total Users',
      value: '3',
      icon: <IconUsers className="h-5 w-5" />,
    },
    {
      label: 'Active Users',
      value: '2',
      icon: <IconUserCheck className="h-5 w-5" />,
    },
    { label: 'Admins', value: '1', icon: <IconShield className="h-5 w-5" /> },
    {
      label: 'Recent Activities',
      value: '3',
      icon: <IconActivity className="h-5 w-5" />,
    },
  ];

  // Mock activities - replace with actual API call
  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'logged in', time: '5 minutes ago' },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'updated profile',
      time: '10 minutes ago',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'changed password',
      time: '1 hour ago',
    },
  ];

  // Mock data - replace with actual API call
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      lastActive: '2024-01-20',
      department: 'Sales',
      location: 'New York',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Admin',
      status: 'Active',
      lastActive: '2024-01-19',
      department: 'IT',
      location: 'London',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'User',
      status: 'Suspended',
      lastActive: '2024-01-18',
      department: 'Marketing',
      location: 'Paris',
    },
  ];

  const departments = ['Sales', 'IT', 'Marketing', 'HR', 'Finance'];
  const locations = ['New York', 'London', 'Paris', 'Tokyo', 'Singapore'];
  const roles = ['User', 'Admin', 'Manager'];
  const statuses = ['Active', 'Suspended', 'Pending'];

  return (
    <div className="p-6">
      <div className="mb-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              User Management
            </h1>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Manage and monitor user accounts
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700">
              <IconActivity className="h-4 w-4" />
              Activity Logs
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700">
              <IconFileExport className="h-4 w-4" />
              Export Users
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
              <IconPlus className="h-4 w-4" />
              Add User
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-neutral-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-50 opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:from-neutral-700 dark:to-neutral-800"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="mb-4 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 p-3 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:from-blue-900/30 dark:to-blue-800/30 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    +{Math.floor(Math.random() * 20)}%
                  </div>
                </div>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-white"
            />
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700">
            <IconFilter className="h-4 w-4" />
            Filters
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-white">
            <option value="">All Roles</option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>

          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-white">
            <option value="">All Statuses</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-white">
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-white">
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/80 shadow-lg dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200 bg-gradient-to-r from-neutral-50 to-neutral-100 text-sm font-medium text-neutral-600 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-neutral-300">
              <th className="px-4 py-4 text-left font-semibold">Name</th>
              <th className="px-4 py-4 text-left font-semibold">Email</th>
              <th className="px-4 py-4 text-left font-semibold">Role</th>
              <th className="px-4 py-4 text-left font-semibold">Status</th>
              <th className="px-4 py-4 text-left font-semibold">Department</th>
              <th className="px-4 py-4 text-left font-semibold">Location</th>
              <th className="px-4 py-4 text-left font-semibold">Last Active</th>
              <th className="px-4 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="group border-b border-neutral-200 bg-white text-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700/50">
                <td className="px-4 py-4">
                  <p className="font-medium text-neutral-900 dark:text-white">
                    {user.name}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {user.email}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : user.status === 'Suspended'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {user.department}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {user.location}
                  </p>
                </td>
                <td className="px-4 py-4">
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {user.lastActive}
                  </p>
                </td>
                <td className="px-4 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="rounded-lg bg-neutral-100 p-2 text-neutral-600 transition-colors hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600">
                      <IconEdit className="h-4 w-4" />
                    </button>
                    <button className="rounded-lg bg-red-100 p-2 text-red-600 transition-colors hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50">
                      <IconTrash className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
              Recent Activities
            </h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Track user activities and interactions
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600">
            View All
            <IconChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity, idx) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-300 hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:hover:bg-neutral-700/50">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 p-3 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:from-blue-900/30 dark:to-blue-800/30">
                  <IconClock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    {activity.user} {activity.action}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {activity.time}
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-neutral-100 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-neutral-700">
                <IconChevronRight className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
