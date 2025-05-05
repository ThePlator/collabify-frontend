'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconShoppingCart,
  IconSearch,
  IconFilter,
  IconStar,
  IconPlus,
} from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

export function MarketplaceSection() {
  const router = useRouter();
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      instructor: 'Dr. Angela Yu',
      price: 99.99,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop',
      description:
        'Learn web development from scratch with this comprehensive bootcamp.',
    },
    {
      id: '2',
      title: 'Machine Learning A-Z',
      instructor: 'Kirill Eremenko',
      price: 129.99,
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
      description:
        'Master machine learning concepts and practical implementation.',
    },
    {
      id: '3',
      title: 'iOS App Development with Swift',
      instructor: 'London App Brewery',
      price: 149.99,
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop',
      description:
        'Build iOS apps using Swift and modern development practices.',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Course Marketplace
        </h1>
        <button
          onClick={() => router.push('/shoppingcart')}
          className="p-2 rounded-full bg-blue-500 text-white relative hover:bg-blue-600 transition-colors">
          <IconShoppingCart className="h-6 w-6" />
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
          />
        </div>
        <button className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
          <IconFilter className="h-5 w-5" />
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {course.description}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  by {course.instructor}
                </span>
                <div className="flex items-center">
                  <IconStar className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {course.rating}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-neutral-900 dark:text-white">
                  ${course.price}
                </span>
                <button
                  onClick={() => router.push('/shoppingcart')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <IconPlus className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
