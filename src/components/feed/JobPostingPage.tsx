'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconCurrencyDollar,
  IconCalendar,
  IconMapPin,
  IconArrowLeft,
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

interface JobPostingFormData {
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
}

export function JobPostingPage() {
  // Mock data for posted jobs
  const [postedJobs, setPostedJobs] = useState<Job[]>([
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
  ]);

  const [formData, setFormData] = useState<JobPostingFormData>({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    experience: '',
    description: '',
    requirements: [''],
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRequirementChange = (index: number, value: string) => {
    setFormData((prev) => {
      const newRequirements = [...prev.requirements];
      newRequirements[index] = value;
      return {
        ...prev,
        requirements: newRequirements,
      };
    });
  };

  const addRequirement = () => {
    setFormData((prev) => ({
      ...prev,
      requirements: [...prev.requirements, ''],
    }));
  };

  const removeRequirement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement job posting submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => window.history.back()}
        className="flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors mb-4">
        <IconArrowLeft className="w-5 h-5" />
        Back
      </motion.button>
      <div className="flex gap-8">
        {/* Left Sidebar - Posted Jobs */}

        {/* Right Side - Job Posting Form */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-800 rounded-xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-xl">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
              Post a New Job
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Fill out the form below to post a new job listing. Be as detailed
              as possible to attract the right candidates.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Senior Frontend Developer"
                />
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company name"
                />
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., New York, NY (Remote OK)"
                />
              </div>

              {/* Job Type */}
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Job Type *
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              {/* Salary Range */}
              <div>
                <label
                  htmlFor="salary"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Salary Range *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    required
                    value={formData.salary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 pl-10 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., $80,000 - $120,000/year"
                  />
                  <IconCurrencyDollar className="absolute left-3 top-2.5 text-neutral-400" />
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Experience Level *
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 3+ years of frontend development"
                />
              </div>

              {/* Job Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Job Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe the role, responsibilities, and ideal candidate..."
                />
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                  Requirements *
                </label>
                <div className="space-y-3">
                  {formData.requirements.map((requirement, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={requirement}
                        onChange={(e) =>
                          handleRequirementChange(index, e.target.value)
                        }
                        className="flex-1 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Requirement ${index + 1}`}
                        required
                      />
                      {formData.requirements.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRequirement(index)}
                          className="px-3 py-2 text-red-500 hover:text-red-600 transition-colors">
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addRequirement}
                    className="text-blue-500 hover:text-blue-600 transition-colors">
                    + Add Requirement
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-neutral-900 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg">
                Post Job
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="w-96 shrink-0">
          <div className="sticky top-8">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
              Your Posted Jobs
            </h2>
            <div className="space-y-4">
              {postedJobs.map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
                    {job.company}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <IconMapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <IconCurrencyDollar className="h-4 w-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                      <IconCalendar className="h-4 w-4 mr-2" />
                      {job.posted}
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-700">
                    <button className="w-full py-2 text-sm bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
