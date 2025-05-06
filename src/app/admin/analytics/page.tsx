'use client';

import { useState } from 'react';
import {
  IconSearch,
  IconArrowUpRight,
  IconArrowDownRight,
  IconClock,
} from '@tabler/icons-react';

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
        <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              Total Revenue
            </h3>
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
              <IconArrowUpRight className="h-3 w-3" />
              +12.5%
            </div>
          </div>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
            $149.98
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            vs last month
          </p>
        </div>

        {/* Total Refunds Card */}
        <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              Total Refunds
            </h3>
            <div className="flex items-center gap-1 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-900 dark:text-red-300">
              <IconArrowUpRight className="h-3 w-3" />
              +2.3%
            </div>
          </div>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
            $99.99
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            vs last month
          </p>
        </div>

        {/* Pending Transactions Card */}
        <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              Pending Transactions
            </h3>
            <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">
              <IconClock className="h-3 w-3" />
              Pending
            </div>
          </div>
          <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
            $29.99
          </p>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            1 transaction
          </p>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search transactions..."
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
            <option value="Course Purchase">Course Purchase</option>
            <option value="Product Sale">Product Sale</option>
            <option value="Subscription">Subscription</option>
            <option value="Refund">Refund</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white">
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Refunded">Refunded</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
        <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
          <thead>
            <tr className="bg-neutral-50 dark:bg-neutral-800">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Merchant
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Date & Time
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
            {filteredTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-neutral-50 dark:hover:bg-neutral-700">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-neutral-900 dark:text-white">
                  {transaction.id}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">
                  {transaction.type}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">
                  ${transaction.amount.toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span
                    className={`flex items-center gap-1 ${getStatusColor(
                      transaction.status
                    )}`}>
                    {getStatusIcon(transaction.status)} {transaction.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">
                  {transaction.customer}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">
                  {transaction.merchant}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-neutral-600 dark:text-neutral-300">
                  {transaction.dateTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
