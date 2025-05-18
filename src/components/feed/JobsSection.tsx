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
  IconX,
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
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="flex justify-between items-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Find Your Dream Job
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Discover opportunities that match your skills and aspirations
          </p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = '/jobs/post')}
          className="px-6 py-3 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-neutral-900 rounded-xl hover:opacity-90 transition-all duration-300 font-medium shadow-lg flex items-center gap-2">
          Post a Job
        </motion.button>
      </div>

      <div className="mb-10">
        <div className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 backdrop-blur-sm">
          <div className="flex flex-col gap-5">
            <div className="relative group">
              <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search jobs or companies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white dark:bg-neutral-800/50 dark:border-neutral-700/50 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition-all duration-300 hover:bg-white/80 dark:hover:bg-neutral-800/80"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-700 scrollbar-track-transparent">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-5 py-2.5 rounded-lg whitespace-nowrap flex-shrink-0 font-medium transition-all duration-300 ${
                    selectedFilter === filter.value
                      ? 'bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white text-white dark:text-neutral-900 shadow-md'
                      : 'bg-white/50 text-neutral-600 hover:bg-white/80 dark:bg-neutral-800/50 dark:text-neutral-400 dark:hover:bg-neutral-800/80 hover:shadow-sm'
                  }`}>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-5">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent group-hover:to-neutral-600 dark:group-hover:to-white transition-colors duration-300 mb-1">
                  {job.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                  {job.company}
                </p>
              </div>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm group-hover:shadow-md transition-all duration-300">
                {job.type}
              </span>
            </div>

            <div className="space-y-3 mb-5">
              <div className="flex items-center text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                <IconMapPin className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">{job.location}</span>
              </div>
              <div className="flex items-center text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                <IconBriefcase className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">{job.experience}</span>
              </div>
              <div className="flex items-center text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                <IconCurrencyDollar className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">{job.salary}</span>
              </div>
              <div className="flex items-center text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                <IconClock className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">{job.posted}</span>
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 line-clamp-2 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {job.requirements.slice(0, 2).map((req, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200/50 text-neutral-700 dark:bg-neutral-700/50 dark:text-neutral-300 group-hover:bg-neutral-300/50 dark:group-hover:bg-neutral-600/50 transition-colors duration-300">
                  {req}
                </span>
              ))}
              {job.requirements.length > 2 && (
                <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-neutral-200/50 text-neutral-700 dark:bg-neutral-700/50 dark:text-neutral-300 group-hover:bg-neutral-300/50 dark:group-hover:bg-neutral-600/50 transition-colors duration-300">
                  +{job.requirements.length - 2} more
                </span>
              )}
            </div>

            <button
              onClick={() => setSelectedJob(job)}
              className="w-full py-3.5 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white text-white dark:text-neutral-900 rounded-lg group-hover:shadow-lg transition-all duration-300 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98]">
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white dark:bg-neutral-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute right-4 top-4 p-2 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
              <IconX className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                {selectedJob.title}
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {selectedJob.company}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                <IconMapPin className="h-5 w-5 mr-3" />
                <span>{selectedJob.location}</span>
              </div>
              <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                <IconBriefcase className="h-5 w-5 mr-3" />
                <span>{selectedJob.experience}</span>
              </div>
              <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                <IconCurrencyDollar className="h-5 w-5 mr-3" />
                <span>{selectedJob.salary}</span>
              </div>
              <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                <IconClock className="h-5 w-5 mr-3" />
                <span>{selectedJob.posted}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Description
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {selectedJob.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                Requirements
              </h3>
              <ul className="list-disc list-inside space-y-2">
                {selectedJob.requirements.map((requirement, index) => (
                  <li
                    key={index}
                    className="text-neutral-600 dark:text-neutral-400">
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full py-3.5 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white text-white dark:text-neutral-900 rounded-lg shadow-lg transition-all duration-300 font-semibold text-sm hover:scale-[1.02] active:scale-[0.98]">
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
