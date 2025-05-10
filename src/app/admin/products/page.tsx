'use client';

import { useState } from 'react';
import {
  IconSearch,
  IconFilter,
  IconCheck,
  IconX,
  IconEye,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

interface Product {
  id: string;
  title: string;
  organization: string;
  type: 'Course' | 'Product';
  price: number;
  category: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Sample data - replace with actual data fetching
  const products: Product[] = [
    {
      id: '1',
      title: 'Advanced Web Development Course',
      organization: 'Tech Academy',
      type: 'Course',
      price: 99.99,
      category: 'Development',
      date: '15/1/2024',
      status: 'Pending',
    },
    {
      id: '2',
      title: 'UI Design Templates Bundle',
      organization: 'DesignPro Studio',
      type: 'Product',
      price: 49.99,
      category: 'Design',
      date: '14/1/2024',
      status: 'Approved',
    },
    {
      id: '3',
      title: 'Digital Marketing Masterclass',
      organization: 'Marketing Experts',
      type: 'Course',
      price: 149.99,
      category: 'Marketing',
      date: '13/1/2024',
      status: 'Rejected',
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      typeFilter === 'all' || product.type.toLowerCase() === typeFilter;
    const matchesStatus =
      statusFilter === 'all' || product.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Product & Course Approvals
        </h1>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">
          Review and moderate product and course listings
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search products or courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-500"
          />
        </div>
        <div className="flex gap-4">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            <option value="all">All Types</option>
            <option value="course">Course</option>
            <option value="product">Product</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30 dark:hover:border-neutral-600">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  By: {product.organization}
                </p>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(
                  product.status
                )}`}>
                {product.status}
              </span>
            </div>
            <div className="mb-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex justify-between">
                <span>Type:</span>
                <span className="font-medium">{product.type}</span>
              </div>
              <div className="flex justify-between">
                <span>Price:</span>
                <span className="font-medium">${product.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Category:</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span className="font-medium">{product.date}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-green-500 px-3 py-2 text-sm font-medium text-white hover:bg-green-600 disabled:opacity-50 dark:bg-green-600 dark:hover:bg-green-700"
                disabled={product.status === 'Approved'}>
                <IconCheck className="h-4 w-4" />
                Approve
              </button>
              <button
                className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600 disabled:opacity-50 dark:bg-red-600 dark:hover:bg-red-700"
                disabled={product.status === 'Rejected'}>
                <IconX className="h-4 w-4" />
                Reject
              </button>
              <button className="flex items-center justify-center rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700">
                <IconEye className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
