'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pb-24 sm:pt-32">
          {/* Background Decorations */}
          {/* <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-4 top-0 h-72 w-72 rounded-full bg-purple-200 opacity-50 blur-3xl filter dark:bg-purple-900" />
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-200 opacity-50 blur-3xl filter dark:bg-blue-900" />
          </div> */}

          {/* Main Content */}
          <div className="relative mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl">
              Collaborate. Connect. Sell.
              <span className="relative whitespace-nowrap">
                <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}
                  All in One Place
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              Welcome to Collabify – a platform built for freelancers, business
              owners, job seekers, digital creators, and educators. From finding
              talent and landing jobs to selling templates, eBooks, and courses
              – everything happens here, all in real-time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                Get Started
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-neutral-900 transition-all hover:-translate-y-0.5 dark:text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Real-time Connections',
                  description:
                    'Freelancers, clients, business owners – all under one roof',
                  icon: '🤝',
                },
                {
                  title: 'Digital Marketplace',
                  description:
                    'Sell and buy templates, eBooks, and online courses',
                  icon: '🛍️',
                },
                {
                  title: 'Job Board',
                  description: 'Post and apply for jobs with ease',
                  icon: '💼',
                },
              ].map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  className="group relative rounded-2xl bg-white/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/80 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/80">
                  <div className="text-2xl">{feature.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
