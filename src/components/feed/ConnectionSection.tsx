'use client';
import React from 'react';
import { motion } from 'motion/react';
import {
  IconUserPlus,
  IconCheck,
  IconX,
  IconBriefcase,
  IconMapPin,
} from '@tabler/icons-react';

interface Connection {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  mutualConnections: number;
  isPending: boolean;
  company?: string;
  isConnected: boolean;
  skills: string[];
  endorsements: number;
  lastActive: string;
  sharedInterests: string[];
}

export function ConnectionSection() {
  const connections: Connection[] = [
    {
      id: '1',
      name: 'Alex Thompson',
      role: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200',
      mutualConnections: 15,
      isPending: true,
      isConnected: false,
      company: 'TechCorp',
      skills: ['React', 'TypeScript', 'Next.js'],
      endorsements: 45,
      lastActive: '2 hours ago',
      sharedInterests: ['Web Development', 'UI/UX', 'Open Source'],
    },
    {
      id: '2',
      name: 'Maria Garcia',
      role: 'UX Designer',
      location: 'New York, NY',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200',
      mutualConnections: 23,
      isPending: true,
      isConnected: false,
      company: 'DesignStudio',
      skills: ['Figma', 'User Research', 'Design Systems'],
      endorsements: 38,
      lastActive: '1 day ago',
      sharedInterests: ['Design Thinking', 'Accessibility', 'Product Design'],
    },
    {
      id: '3',
      name: 'James Wilson',
      role: 'Full Stack Developer',
      location: 'London, UK',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200',
      mutualConnections: 8,
      isPending: true,
      isConnected: false,
      company: 'GlobalTech',
      skills: ['Node.js', 'Python', 'AWS'],
      endorsements: 29,
      lastActive: '3 days ago',
      sharedInterests: ['Cloud Computing', 'DevOps', 'Machine Learning'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white">
        Your Network
      </motion.h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {connections.map((connection, idx) => (
          <motion.div
            key={connection.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="flex items-start space-x-4">
              <img
                src={connection.avatar}
                alt={connection.name}
                className="h-12 w-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                  {connection.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {connection.role}
                </p>
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                  <IconBriefcase className="h-4 w-4" />
                  {connection.company}
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
                  <IconMapPin className="h-4 w-4" />
                  {connection.location}
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex flex-wrap gap-2">
                {connection.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
                <span>{connection.mutualConnections} mutual connections</span>
                <span>{connection.endorsements} endorsements</span>
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-500">
                Last active {connection.lastActive}
              </div>
            </div>
            <div className="mt-4">
              <button
                className={`w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  connection.isConnected
                    ? 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-600'
                    : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
                }`}>
                {connection.isConnected ? (
                  <span className="flex items-center justify-center gap-2">
                    <IconCheck className="h-4 w-4" />
                    Connected
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <IconUserPlus className="h-4 w-4" />
                    Connect
                  </span>
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
