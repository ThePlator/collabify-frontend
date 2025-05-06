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
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
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
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                  {job.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                  <IconBuilding className="h-4 w-4" />
                  {job.company}
                </div>
              </div>
              <span
                className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(
                  job.status
                )}`}>
                {job.status}
              </span>
            </div>

            <div className="mb-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="flex items-center gap-2">
                <IconMapPin className="h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center gap-2">
                <IconBriefcase className="h-4 w-4" />
                {job.type}
              </div>
              <div className="flex items-center gap-2">
                <IconCurrencyDollar className="h-4 w-4" />
                {job.salary}
              </div>
              <div className="flex items-center gap-2">
                <IconMail className="h-4 w-4" />
                {job.submittedBy}
              </div>
              <div className="flex items-center gap-2">
                <IconCalendar className="h-4 w-4" />
                {job.submissionDate}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="flex-1 rounded-lg bg-green-100 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-200 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-800"
                title="Approve">
                <IconCheck className="mx-auto h-4 w-4" />
              </button>
              <button
                className="flex-1 rounded-lg bg-red-100 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800"
                title="Reject">
                <IconX className="mx-auto h-4 w-4" />
              </button>
              <button
                className="flex-1 rounded-lg bg-neutral-100 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600"
                title="View Details">
                <IconEye className="mx-auto h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
