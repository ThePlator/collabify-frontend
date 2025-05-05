'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconSearch,
  IconFilter,
  IconMapPin,
  IconBriefcase,
  IconClock,
  IconCurrencyDollar,
} from '@tabler/icons-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  posted: string;
  description: string;
  requirements: string[];
}

export function JobsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Dummy data for jobs
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      experience: '5+ years',
      posted: '2 days ago',
      description:
        'We are looking for a Senior Frontend Developer to join our team and help build amazing user experiences.',
      requirements: [
        'Strong experience with React and TypeScript',
        'Experience with modern frontend frameworks',
        'Understanding of web performance optimization',
        'Experience with responsive design',
      ],
    },
    {
      id: '2',
      title: 'Product Designer',
      company: 'Design Studio Inc',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $120k',
      experience: '3+ years',
      posted: '1 week ago',
      description:
        'Join our design team to create beautiful and intuitive user interfaces for our clients.',
      requirements: [
        'Portfolio showcasing UI/UX projects',
        'Experience with Figma and design systems',
        'Strong understanding of user-centered design',
        'Excellent communication skills',
      ],
    },
    {
      id: '3',
      title: 'Backend Engineer',
      company: 'DataFlow Systems',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$130k - $160k',
      experience: '4+ years',
      posted: '3 days ago',
      description:
        'Looking for a Backend Engineer to help scale our distributed systems.',
      requirements: [
        'Experience with distributed systems',
        'Strong knowledge of Node.js or Python',
        'Database design and optimization',
        'API design and implementation',
      ],
    },
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Full-time', value: 'full-time' },
    { label: 'Part-time', value: 'part-time' },
    { label: 'Remote', value: 'remote' },
    { label: 'Contract', value: 'contract' },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === 'all' || job.type.toLowerCase() === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
          Find Your Dream Job
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Discover opportunities that match your skills and aspirations
        </p>
      </motion.div>

      <div className="mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex-1 relative">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search jobs or companies"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap flex-shrink-0 ${
                  selectedFilter === filter.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700'
                }`}>
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                  {job.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {job.company}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {job.type}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                <IconMapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{job.location}</span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                <IconBriefcase className="h-4 w-4 mr-2" />
                <span className="text-sm">{job.experience}</span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                <IconCurrencyDollar className="h-4 w-4 mr-2" />
                <span className="text-sm">{job.salary}</span>
              </div>
              <div className="flex items-center text-neutral-600 dark:text-neutral-400">
                <IconClock className="h-4 w-4 mr-2" />
                <span className="text-sm">{job.posted}</span>
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.requirements.slice(0, 2).map((req, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
                  {req}
                </span>
              ))}
              {job.requirements.length > 2 && (
                <span className="px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
                  +{job.requirements.length - 2} more
                </span>
              )}
            </div>

            <button className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
