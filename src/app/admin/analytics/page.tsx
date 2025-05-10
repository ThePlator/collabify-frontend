'use client';

import { useState } from 'react';
import {
  IconSearch,
  IconArrowUpRight,
  IconArrowDownRight,
  IconClock,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

interface Transaction {
  id: string;
  type: string;
  amount: number;
  status: string;
  customer: string;
  merchant: string;
  dateTime: string;
}

export default function AnalyticsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Sample data - replace with actual data fetching
  const transactions: Transaction[] = [
    {
      id: 'T1',
      type: 'Course Purchase',
      amount: 99.99,
      status: 'Completed',
      customer: 'john.doe@example.com',
      merchant: 'Tech Academy',
      dateTime: '15/1/2024, 2:30:00 pm',
    },
    {
      id: 'T2',
      type: 'Product Sale',
      amount: 49.99,
      status: 'Completed',
      customer: 'jane.smith@example.com',
      merchant: 'DesignPro Studio',
      dateTime: '15/1/2024, 12:15:00 pm',
    },
    {
      id: 'T3',
      type: 'Subscription',
      amount: 29.99,
      status: 'Pending',
      customer: 'mike.wilson@example.com',
      merchant: 'Collabify Platform',
      dateTime: '15/1/2024, 10:45:00 am',
    },
    {
      id: 'T4',
      type: 'Refund',
      amount: 99.99,
      status: 'Refunded',
      customer: 'sarah.brown@example.com',
      merchant: 'Tech Academy',
      dateTime: '14/1/2024, 4:20:00 pm',
    },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'all' || transaction.type === typeFilter;
    const matchesStatus =
      statusFilter === 'all' || transaction.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return '✅';
      case 'Pending':
        return '🕒';
      case 'Refunded':
        return '🔁';
      default:
        return '❓';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-600 dark:text-green-400';
      case 'Pending':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'Refunded':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-neutral-600 dark:text-neutral-400';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Analytics & Transactions
        </h1>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">
          Monitor financial metrics and transaction history
        </p>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Total Revenue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30 dark:hover:border-neutral-600">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-emerald-50/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-emerald-900/20 dark:to-emerald-800/10"></div>
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-50 p-3 text-emerald-600 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:from-emerald-900/30 dark:to-emerald-800/30 dark:text-emerald-400">
                <IconArrowUpRight className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300">
                +12.5%
              </div>
            </div>
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              Total Revenue
            </h3>
            <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent dark:from-emerald-400 dark:to-emerald-300">
              $149.98
            </p>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              vs last month
            </p>
          </div>
        </motion.div>

        {/* Total Refunds Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30 dark:hover:border-neutral-600">
          <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 to-red-50/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-red-900/20 dark:to-red-800/10"></div>
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-gradient-to-br from-red-100 to-red-50 p-3 text-red-600 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:from-red-900/30 dark:to-red-800/30 dark:text-red-400">
                <IconArrowUpRight className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700 dark:bg-red-900/50 dark:text-red-300">
                +2.3%
              </div>
            </div>
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              Total Refunds
            </h3>
            <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent dark:from-red-400 dark:to-red-300">
              $99.99
            </p>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              vs last month
            </p>
          </div>
        </motion.div>

        {/* Pending Transactions Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900/80 dark:shadow-neutral-900/30 dark:hover:border-neutral-600">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-amber-50/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-900/20 dark:to-amber-800/10"></div>
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 p-3 text-amber-600 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:from-amber-900/30 dark:to-amber-800/30 dark:text-amber-400">
                <IconClock className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
                Pending
              </div>
            </div>
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              Pending Transactions
            </h3>
            <p className="mt-2 text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-300">
              $29.99
            </p>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              1 transaction
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <div className="group relative">
            <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 transition-colors group-hover:text-neutral-500 dark:group-hover:text-neutral-300" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-gradient-to-r from-white to-neutral-50 py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 shadow-sm transition-all duration-200 focus:border-neutral-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200/50 hover:border-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:border-neutral-600 dark:focus:ring-neutral-700/50 dark:hover:border-neutral-600"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="group relative">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="appearance-none rounded-xl border border-neutral-200 bg-gradient-to-r from-white to-neutral-50 px-4 py-2.5 pr-10 text-sm text-neutral-900 shadow-sm transition-all duration-200 focus:border-neutral-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200/50 hover:border-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-white dark:focus:border-neutral-600 dark:focus:ring-neutral-700/50 dark:hover:border-neutral-600">
              <option value="all">All Types</option>
              <option value="Course Purchase">Course Purchase</option>
              <option value="Product Sale">Product Sale</option>
              <option value="Subscription">Subscription</option>
              <option value="Refund">Refund</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-500 dark:text-neutral-500 dark:group-hover:text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="group relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none rounded-xl border border-neutral-200 bg-gradient-to-r from-white to-neutral-50 px-4 py-2.5 pr-10 text-sm text-neutral-900 shadow-sm transition-all duration-200 focus:border-neutral-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-200/50 hover:border-neutral-300 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 dark:text-white dark:focus:border-neutral-600 dark:focus:ring-neutral-700/50 dark:hover:border-neutral-600">
              <option value="all">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Refunded">Refunded</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-500 dark:text-neutral-500 dark:group-hover:text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50/80 shadow-lg dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900/80">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
            <thead>
              <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                  Merchant
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
              {filteredTransactions.map((transaction, idx) => (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={transaction.id}
                  className="group transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">
                      {transaction.id}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex rounded-lg bg-neutral-100 px-2 py-1 text-sm font-medium text-neutral-700 group-hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-neutral-700">
                      {transaction.type}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      ${transaction.amount.toFixed(2)}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${getStatusColor(
                        transaction.status
                      )}`}>
                      {getStatusIcon(transaction.status)} {transaction.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {transaction.customer}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {transaction.merchant}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {transaction.dateTime}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
