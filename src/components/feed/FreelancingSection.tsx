'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconSearch,
  IconFilter,
  IconCalendar,
  IconCurrencyDollar,
  IconX,
  IconCreditCard,
} from '@tabler/icons-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: number;
  deadline: string;
  tags: string[];
  requirements: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  status: 'Open' | 'In Progress' | 'Completed';
  proposalCount: number;
}

export function FreelancingSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showProposalPanel, setShowProposalPanel] = useState(false);

  // Dummy data - replace with actual data
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Website Development',
      description:
        'Looking for a skilled developer to build a modern e-commerce platform with React and Node.js',
      category: 'Web Development',
      budget: 5000,
      deadline: '2024-03-01',
      tags: ['React', 'Node.js', 'E-commerce'],
      requirements: [
        'Minimum 3 years of experience with React',
        'Strong knowledge of e-commerce platforms',
        'Experience with payment gateway integration',
      ],
      difficulty: 'Expert',
      status: 'Open',
      proposalCount: 12,
    },
    {
      id: '2',
      title: 'Mobile App UI/UX Design',
      description:
        'Need a talented designer for a fitness tracking mobile app design',
      category: 'UI/UX Design',
      budget: 3000,
      deadline: '2024-02-15',
      tags: ['Mobile', 'UI/UX', 'Fitness'],
      requirements: [
        'Portfolio of mobile app designs',
        'Experience with fitness/health apps',
        'Knowledge of iOS and Android design guidelines',
      ],
      difficulty: 'Intermediate',
      status: 'Open',
      proposalCount: 8,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Freelance Projects
          </motion.h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Browse and apply to exciting freelance opportunities that match your
            skills and interests.
          </p>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => (window.location.href = '/freelancing/milestones')}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
          <IconCreditCard className="w-5 h-5" />
          Milestone Payments
        </motion.button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 mb-8 border border-neutral-200 dark:border-neutral-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400 dark:placeholder-neutral-500"
            />
            <IconSearch className="absolute right-3 top-2.5 text-neutral-400" />
          </div>
          <select className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Categories</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="design">UI/UX Design</option>
          </select>
          <div className="relative">
            <input
              type="number"
              placeholder="Max Budget"
              className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400 dark:placeholder-neutral-500"
            />
            <IconCurrencyDollar className="absolute right-3 top-2.5 text-neutral-400" />
          </div>
          <input
            type="date"
            className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Project Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="relative">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Open'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200'
                  }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                {project.description}
              </p>
            </div>
            <div className="space-y-4 mb-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.difficulty === 'Beginner'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                      : project.difficulty === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                  }`}>
                  {project.difficulty}
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {project.proposalCount} proposals
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm font-medium mb-4">
              <span className="flex items-center px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-lg text-neutral-700 dark:text-neutral-300">
                <IconCurrencyDollar className="inline mr-1" />$
                {project.budget.toLocaleString()}
              </span>
              <span className="flex items-center px-3 py-1.5 bg-neutral-100 dark:bg-neutral-700 rounded-lg text-neutral-700 dark:text-neutral-300">
                <IconCalendar className="inline mr-1" />
                {new Date(project.deadline).toLocaleDateString()}
              </span>
            </div>
            <button
              onClick={() => setSelectedProject(project)}
              className="w-full py-2.5 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-neutral-900 rounded-lg hover:opacity-90 transition-opacity font-medium">
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-neutral-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                <IconX />
              </button>
            </div>
            <div className="mb-6">
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {selectedProject.description}
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  Requirements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                  {selectedProject.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mt-6 text-neutral-600 dark:text-neutral-400">
                <span className="flex items-center">
                  <IconCurrencyDollar className="inline mr-1" />
                  Budget: ${selectedProject.budget}
                </span>
                <span className="flex items-center">
                  <IconCalendar className="inline mr-1" />
                  Deadline:{' '}
                  {new Date(selectedProject.deadline).toLocaleDateString()}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowProposalPanel(true);
                setSelectedProject(null);
              }}
              className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
              Apply Now
            </button>
          </motion.div>
        </div>
      )}

      {/* Proposal Submission Panel */}
      {showProposalPanel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-neutral-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Submit Proposal
              </h2>
              <button
                onClick={() => setShowProposalPanel(false)}
                className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                <IconX />
              </button>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Cover Letter
                </label>
                <textarea
                  className="w-full h-48 px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe why you're the best fit for this project..."
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Estimated Budget
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400 dark:placeholder-neutral-500"
                      placeholder="Enter your bid"
                    />
                    <IconCurrencyDollar className="absolute right-3 top-2.5 text-neutral-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Delivery Time
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400 dark:placeholder-neutral-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
                Submit Proposal
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
