'use client';

import { useState } from 'react';
import {
  IconSearch,
  IconFilter,
  IconEye,
  IconCheck,
  IconX,
  IconBriefcase,
  IconBuilding,
  IconMapPin,
  IconClock,
  IconMail,
  IconCalendar,
  IconCurrencyDollar,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Mock data - replace with actual API call
  const jobs = [
    {
      id: 1,
      title: 'Senior Product Designer',
      company: 'TechVision Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k–$150k',
      submittedBy: 'john@techvision.com',
      submissionDate: '15/1/2024',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'InnovateTech',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100k–$130k',
      submittedBy: 'hr@innovatetech.com',
      submissionDate: '14/1/2024',
      status: 'Approved',
    },
    {
      id: 3,
      title: 'Marketing Manager',
      company: 'GrowthLabs',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k–$120k',
      submittedBy: 'careers@growthlabs.com',
      submissionDate: '13/1/2024',
      status: 'Rejected',
    },
  ];

  const statuses = ['Pending', 'Approved', 'Rejected'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      case 'Rejected':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-400">
          Job Approvals
        </h1>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          Review and moderate job postings
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <IconSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500 dark:focus:border-white"
            />
          </div>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-black focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:focus:border-white">
            <option value="">All Status</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30 dark:hover:border-neutral-600">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-blue-50/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-blue-800/10"></div>
            <div className="relative z-10">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-medium bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent dark:from-white dark:to-neutral-300">
                    {job.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                    <IconBuilding className="h-4 w-4" />
                    {job.company}
                  </div>
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${getStatusColor(
                    job.status
                  )}`}>
                  {job.status}
                </span>
              </div>

              <div className="mb-4 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
                  <IconMapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
                  <IconBriefcase className="h-4 w-4" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
                  <IconCurrencyDollar className="h-4 w-4" />
                  {job.salary}
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
                  <IconMail className="h-4 w-4" />
                  {job.submittedBy}
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
                  <IconCalendar className="h-4 w-4" />
                  {job.submissionDate}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="flex-1 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:shadow-green-500/30 dark:hover:shadow-green-800/30"
                  title="Approve">
                  <IconCheck className="mx-auto h-4 w-4" />
                </button>
                <button
                  className="flex-1 rounded-lg bg-gradient-to-r from-red-500 to-rose-600 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-red-600 hover:to-rose-700 hover:shadow-lg hover:shadow-red-500/30 dark:hover:shadow-red-800/30"
                  title="Reject">
                  <IconX className="mx-auto h-4 w-4" />
                </button>
                <button
                  className="flex-1 rounded-lg bg-gradient-to-r from-neutral-400 to-neutral-500 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-neutral-500 hover:to-neutral-600 hover:shadow-lg hover:shadow-neutral-500/30 dark:from-neutral-600 dark:to-neutral-700 dark:hover:from-neutral-700 dark:hover:to-neutral-800 dark:hover:shadow-neutral-800/30"
                  title="View Details">
                  <IconEye className="mx-auto h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
