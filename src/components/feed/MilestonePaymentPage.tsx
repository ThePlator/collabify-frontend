'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { IconArrowLeft } from '@tabler/icons-react';

interface Milestone {
  id: string;
  title: string;
  description: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'in_progress' | 'completed' | 'paid';
}

export function MilestonePaymentPage() {
  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: '1',
      title: 'Project Setup and Planning',
      description:
        'Initial project setup, requirements gathering, and planning phase',
      amount: 500,
      dueDate: '2024-02-15',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Frontend Development',
      description: 'Implementing the user interface and core features',
      amount: 1000,
      dueDate: '2024-03-01',
      status: 'in_progress',
    },
  ]);

  const [newMilestone, setNewMilestone] = useState<Partial<Milestone>>({
    title: '',
    description: '',
    amount: 0,
    dueDate: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMilestone.title && newMilestone.amount && newMilestone.dueDate) {
      setMilestones([
        ...milestones,
        {
          ...newMilestone,
          id: Date.now().toString(),
          status: 'pending',
        } as Milestone,
      ]);
      setNewMilestone({ title: '', description: '', amount: 0, dueDate: '' });
    }
  };

  const getStatusColor = (status: Milestone['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'paid':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => window.history.back()}
        className="flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors mb-4">
        <IconArrowLeft className="w-5 h-5" />
        Back
      </motion.button>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
          Milestone Payments
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Manage your project milestones and payments
        </p>
      </motion.div>

      {/* Create New Milestone Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onSubmit={handleSubmit}
        className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Create New Milestone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Milestone Title"
            value={newMilestone.title}
            onChange={(e) =>
              setNewMilestone({ ...newMilestone, title: e.target.value })
            }
            className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
          />
          <input
            type="number"
            placeholder="Amount"
            value={newMilestone.amount || ''}
            onChange={(e) =>
              setNewMilestone({
                ...newMilestone,
                amount: Number(e.target.value),
              })
            }
            className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
          />
          <input
            type="date"
            value={newMilestone.dueDate}
            onChange={(e) =>
              setNewMilestone({ ...newMilestone, dueDate: e.target.value })
            }
            className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
          />
          <textarea
            placeholder="Description"
            value={newMilestone.description}
            onChange={(e) =>
              setNewMilestone({ ...newMilestone, description: e.target.value })
            }
            className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white md:col-span-2"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600">
          Add Milestone
        </button>
      </motion.form>

      {/* Milestones List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Current Milestones
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {milestones.map((milestone) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {milestone.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      Due: {milestone.dueDate}
                    </span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                      ${milestone.amount}
                    </span>
                  </div>
                </div>
                <span
                  className={cn(
                    'px-3 py-1 rounded-full text-sm font-medium',
                    getStatusColor(milestone.status)
                  )}>
                  {milestone.status.replace('_', ' ').charAt(0).toUpperCase() +
                    milestone.status.slice(1)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
