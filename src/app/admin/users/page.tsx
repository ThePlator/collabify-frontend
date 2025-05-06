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
            <div
              key={idx}
              className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
              <div className="mb-4 rounded-lg bg-neutral-100 p-2 w-fit dark:bg-neutral-700">
                {stat.icon}
              </div>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                {stat.label}
              </p>
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                {stat.value}
              </p>
            </div>
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

      <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50 text-sm font-medium text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Department</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Last Active</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-neutral-200 bg-white text-sm dark:border-neutral-700 dark:bg-neutral-800">
                <td className="px-4 py-3 text-neutral-900 dark:text-white">
                  {user.name}
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                  {user.email}
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                  {user.role}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                        : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                    }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                  {user.department}
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                  {user.location}
                </td>
                <td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">
                  {user.lastActive}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="rounded p-1 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
                      <IconEdit className="h-4 w-4" />
                    </button>
                    <button className="rounded p-1 text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900">
                      <IconTrash className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-neutral-900 dark:text-white">
            Recent Activities
          </h2>
          <button className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between rounded-lg border border-neutral-200 p-4 dark:border-neutral-700">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-neutral-100 p-2 dark:bg-neutral-700">
                  <IconClock className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900 dark:text-white">
                    {activity.user} {activity.action}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {activity.time}
                  </p>
                </div>
              </div>
              <IconChevronRight className="h-4 w-4 text-neutral-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
