'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  IconPhoto,
  IconLink,
  IconTag,
  IconWorld,
  IconHeart,
  IconMessageCircle,
  IconShare,
  IconBookmark,
} from '@tabler/icons-react';

const filterOptions = [
  { label: 'Latest', value: 'latest' },
  { label: 'Popular', value: 'popular' },
  { label: 'Following', value: 'following' },
];

const demoFeedData = [
  {
    id: 1,
    user: {
      name: 'Sarah Anderson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      handle: '@sarahanderson',
    },
    content:
      'Just launched my new portfolio website! 🚀 Check it out and let me know what you think. #webdev #portfolio',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    timestamp: '2h ago',
    likes: 124,
    comments: 18,
    shares: 5,
  },
  {
    id: 2,
    user: {
      name: 'David Chen',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
      handle: '@davidchen',
    },
    content:
      'Exploring the latest trends in UI/UX design. The future of web interfaces is looking more immersive than ever! 🎨 #design #UI',
    timestamp: '4h ago',
    likes: 89,
    comments: 12,
    shares: 3,
  },
  {
    id: 3,
    user: {
      name: 'Emily Parker',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      handle: '@emilyparker',
    },
    content:
      'Working on an exciting new project with @davidchen. Stay tuned for updates! 💻 #collaboration #coding',
    image:
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&h=400&fit=crop',
    timestamp: '6h ago',
    likes: 156,
    comments: 24,
    shares: 8,
  },
];

export function FeedSection() {
  const [activeFilter, setActiveFilter] = useState('latest');
  const [postContent, setPostContent] = useState('');

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Filter Bar */}
      <div className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setActiveFilter(option.value)}
            className={cn(
              'rounded-md px-4 py-2 text-sm font-medium transition-colors',
              activeFilter === option.value
                ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100'
                : 'text-neutral-600 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-700'
            )}>
            {option.label}
          </button>
        ))}
      </div>

      {/* Create Post Section */}
      <div className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="What's on your mind?"
          className="min-h-[100px] w-full resize-none rounded-lg border-0 bg-transparent p-2 text-neutral-900 placeholder-neutral-500 focus:ring-0 dark:text-neutral-100 dark:placeholder-neutral-400"
        />
        <div className="mt-4 flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-700">
          <div className="flex gap-2">
            <button className="rounded-full p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
              <IconPhoto className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
              <IconLink className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
              <IconTag className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 rounded-full px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700">
              <IconWorld className="h-4 w-4" />
              Everyone
            </button>
            <button className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-700 dark:hover:bg-neutral-600">
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Feed Content */}
      <div className="flex flex-col gap-4">
        {demoFeedData.map((post) => (
          <div
            key={post.id}
            className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  {post.user.name}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {post.user.handle} · {post.timestamp}
                </p>
              </div>
            </div>
            <p className="text-neutral-800 dark:text-neutral-200 mb-4">
              {post.content}
            </p>
            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="rounded-lg w-full h-64 object-cover mb-4"
              />
            )}
            <div className="flex items-center justify-between pt-2 border-t border-neutral-200 dark:border-neutral-700">
              <button className="flex items-center gap-1 text-neutral-600 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400">
                <IconHeart className="h-5 w-5" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-1 text-neutral-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-400">
                <IconMessageCircle className="h-5 w-5" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button className="flex items-center gap-1 text-neutral-600 hover:text-green-500 dark:text-neutral-400 dark:hover:text-green-400">
                <IconShare className="h-5 w-5" />
                <span className="text-sm">{post.shares}</span>
              </button>
              <button className="text-neutral-600 hover:text-yellow-500 dark:text-neutral-400 dark:hover:text-yellow-400">
                <IconBookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
