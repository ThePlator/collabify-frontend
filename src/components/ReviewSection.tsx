'use client';
import { motion } from 'motion/react';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

export function ReviewSection() {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Thompson',
      role: 'Product Manager',
      company: 'TechCorp',
      image: '/avatars/avatar-1.png',
      rating: 5,
      text: "Collabify has transformed how our team works together. The real-time collaboration features are seamless, and the interface is intuitive. It's become an essential part of our daily workflow.",
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Developer',
      company: 'InnovateLabs',
      image: '/avatars/avatar-2.png',
      rating: 5,
      text: "The smart automation features have saved us countless hours. The platform's performance and reliability are outstanding. Highly recommended for any development team.",
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      company: 'DesignStudio',
      image: '/avatars/avatar-3.png',
      rating: 5,
      text: 'As a design team, we needed a tool that could handle our complex collaboration needs. Collabify exceeded our expectations with its powerful features and beautiful interface.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-50 py-20 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            See what our customers have to say about their experience with
            Collabify
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-800">
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                {review.text}
              </p>

              {/* Reviewer Info */}
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {review.role} at {review.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
