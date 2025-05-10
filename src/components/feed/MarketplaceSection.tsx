'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  IconShoppingCart,
  IconSearch,
  IconFilter,
  IconStar,
  IconPlus,
  IconUsers,
  IconClock,
  IconTrophy,
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
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lastUpdated: string;
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
        'Learn web development from scratch with this comprehensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and more.',
      students: 125000,
      duration: '63.5 hours',
      level: 'Beginner',
      lastUpdated: 'January 2024',
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
        'Master machine learning concepts and practical implementation with Python, TensorFlow, and scikit-learn.',
      students: 95000,
      duration: '44 hours',
      level: 'Intermediate',
      lastUpdated: 'December 2023',
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
        'Build iOS apps using Swift and modern development practices. Learn SwiftUI, Core Data, and App Store deployment.',
      students: 75000,
      duration: '55 hours',
      level: 'Advanced',
      lastUpdated: 'January 2024',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent mb-2">
            Course Marketplace
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Expand your skills with our curated collection of top-rated courses
          </p>
        </div>
        <button
          onClick={() => router.push('/shoppingcart')}
          className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white relative hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
          <IconShoppingCart className="h-6 w-6" />
        </button>
      </motion.div>

      {/* Search and Filter */}
      <div className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 p-6 backdrop-blur-sm mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative group">
            <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-300" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-200/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-neutral-800/50 dark:border-neutral-700/50 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition-all duration-300 hover:bg-white/80 dark:hover:bg-neutral-800/80"
            />
          </div>
          <button className="p-3 rounded-lg bg-white/50 hover:bg-white/80 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/80 border border-neutral-200/50 dark:border-neutral-700/50 text-neutral-600 dark:text-neutral-400 transition-all duration-300 hover:shadow-md">
            <IconFilter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      course.level === 'Beginner'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : course.level === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Updated {course.lastUpdated}
                  </span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent group-hover:to-neutral-600 dark:group-hover:to-white transition-colors duration-300 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-300">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <IconUsers className="h-4 w-4" />
                    {course.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconClock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <IconTrophy className="h-4 w-4 text-yellow-500" />
                    {course.rating}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="flex items-center gap-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        course.instructor
                      )}&background=random`}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      {course.instructor}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    ${course.price}
                  </span>
                  <button
                    onClick={() => router.push('/shoppingcart')}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] font-medium">
                    <IconPlus className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
