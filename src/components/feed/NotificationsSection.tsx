'use client';
import React from 'react';
import { motion } from 'motion/react';
import { IconBell, IconHeart, IconMessage, IconUserPlus, IconAt } from '@tabler/icons-react';

interface Notification {
  id: string;
  type: 'mention' | 'like' | 'comment' | 'connection';
  content: string;
  timestamp: string;
  isRead: boolean;
  user: {
    name: string;
    avatar: string;
  };
}

export function NotificationsSection() {
  // Dummy notifications data - replace with actual data
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'mention',
      content: 'mentioned you in a post',
      timestamp: '2 hours ago',
      isRead: false,
      user: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200',
      },
    },
    {
      id: '2',
      type: 'like',
      content: 'liked your post about React hooks',
      timestamp: '4 hours ago',
      isRead: true,
      user: {
        name: 'Alex Thompson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200',
      },
    },
    {
      id: '3',
      type: 'comment',
      content: 'commented on your project showcase',
      timestamp: '1 day ago',
      isRead: false,
      user: {
        name: 'Michael Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200',
      },
    },
    {
      id: '4',
      type: 'connection',
      content: 'sent you a connection request',
      timestamp: '2 days ago',
      isRead: true,
      user: {
        name: 'Emily Parker',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200',
      },
    },
  ];

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'mention':
        return <IconAt className="h-4 w-4 text-blue-500" />;
      case 'like':
        return <IconHeart className="h-4 w-4 text-red-500" />;
      case 'comment':
        return <IconMessage className="h-4 w-4 text-green-500" />;
      case 'connection':
        return <IconUserPlus className="h-4 w-4 text-purple-500" />;
      default:
        return <IconBell className="h-4 w-4 text-neutral-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white">
        Notifications
      </motion.h1>

      <div className="space-y-4">
        {notifications.map((notification, idx) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`rounded-xl border ${notification.isRead ? 'bg-white dark:bg-neutral-800' : 'bg-blue-50 dark:bg-neutral-700'} p-4 shadow-sm transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-700/70`}>
            <div className="flex items-start space-x-4">
              <img
                src={notification.user.avatar}
                alt={notification.user.name}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {notification.user.name}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                      {notification.content}
                    </span>
                  </div>
                  {getNotificationIcon(notification.type)}
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">
                  {notification.timestamp}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}