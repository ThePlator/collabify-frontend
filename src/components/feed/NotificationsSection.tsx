'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconBell,
  IconHeart,
  IconMessage,
  IconUserPlus,
  IconStar,
  IconCheck,
  IconClock,
} from '@tabler/icons-react';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'connection' | 'achievement';
  content: string;
  timestamp: string;
  isRead: boolean;
  user: {
    name: string;
    avatar: string;
  };
}

export function NotificationsSection() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'like',
      content: 'liked your recent post about React performance optimization',
      timestamp: '2 hours ago',
      isRead: false,
      user: {
        name: 'Sarah Chen',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200',
      },
    },
    {
      id: '2',
      type: 'comment',
      content: 'commented on your article about TypeScript best practices',
      timestamp: '5 hours ago',
      isRead: false,
      user: {
        name: 'David Kim',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200',
      },
    },
    {
      id: '3',
      type: 'connection',
      content: 'accepted your connection request',
      timestamp: '1 day ago',
      isRead: true,
      user: {
        name: 'Emily Johnson',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=200&h=200',
      },
    },
    {
      id: '4',
      type: 'achievement',
      content: 'You earned the "Code Master" badge!',
      timestamp: '2 days ago',
      isRead: true,
      user: {
        name: 'System',
        avatar:
          'https://images.unsplash.com/photo-1635107510862-53886e926b74?fit=crop&w=200&h=200',
      },
    },
  ]);

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'like':
        return <IconHeart className="h-5 w-5 text-rose-500" />;
      case 'comment':
        return <IconMessage className="h-5 w-5 text-emerald-500" />;
      case 'connection':
        return <IconUserPlus className="h-5 w-5 text-blue-500" />;
      case 'achievement':
        return <IconStar className="h-5 w-5 text-amber-500" />;
      default:
        return <IconBell className="h-5 w-5 text-neutral-500" />;
    }
  };

  const getNotificationGradient = (type: Notification['type']) => {
    switch (type) {
      case 'like':
        return 'from-rose-50 to-rose-100 dark:from-rose-950/50 dark:to-rose-900/50';
      case 'comment':
        return 'from-emerald-50 to-emerald-100 dark:from-emerald-950/50 dark:to-emerald-900/50';
      case 'connection':
        return 'from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50';
      case 'achievement':
        return 'from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/50';
      default:
        return 'from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-300 dark:to-indigo-400">
            Notifications
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-sm">
            {notifications.filter((n) => !n.isRead).length} new
          </motion.div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md hover:shadow-lg transition-shadow duration-300"
          onClick={() =>
            setNotifications((prev) =>
              prev.map((n) => ({ ...n, isRead: true }))
            )
          }>
          Mark all as read
        </motion.button>
      </motion.div>

      <div className="space-y-4">
        {notifications.map((notification, idx) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`relative rounded-xl border backdrop-blur-sm ${
              notification.isRead
                ? 'border-neutral-200/50 dark:border-neutral-700/50'
                : 'border-blue-200/50 dark:border-blue-800/50'
            } overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]`}>
            <div
              className={`absolute inset-0 bg-gradient-to-br opacity-30 hover:opacity-50 transition-opacity duration-300 ${getNotificationGradient(
                notification.type
              )}`}
            />
            <motion.div
              className="relative p-6 flex items-start gap-4"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
              <div className="flex-shrink-0">
                <motion.img
                  src={notification.user.avatar}
                  alt={notification.user.name}
                  className="h-12 w-12 rounded-full ring-2 ring-white/80 dark:ring-neutral-900/80 shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <motion.span
                    className="font-medium text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 2 }}>
                    {notification.user.name}
                  </motion.span>
                  <motion.div
                    className="flex items-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 10,
                    }}>
                    {getNotificationIcon(notification.type)}
                  </motion.div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 font-medium">
                  {notification.content}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                    <IconClock className="h-4 w-4" />
                    {notification.timestamp}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {!notification.isRead && (
                  <>
                    <motion.button
                      onClick={() => {
                        setNotifications((prev) =>
                          prev.map((n) =>
                            n.id === notification.id
                              ? { ...n, isRead: true }
                              : n
                          )
                        );
                      }}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50 shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 15,
                      }}>
                      <IconCheck className="h-4 w-4" />
                    </motion.button>
                    <motion.span
                      className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
