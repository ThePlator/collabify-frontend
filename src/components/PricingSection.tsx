'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface PricingPlan {
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  usageDetails?: {
    title: string;
    items: string[];
  }[];
}

export function PricingSection() {
  const pricingPlans: PricingPlan[] = [
    {
      name: '🆓 Freemium Access',
      description:
        'Free access to the full platform with no credit card required',
      features: [
        'Browse jobs, freelancers, products & courses',
        'Message users and build connections',
        'Post listings, portfolios, or service offers',
        'No credit card required',
        'Upgrade with usage (see Pay-per-Use)',
      ],
      buttonText: 'Get Started Free',
    },
    {
      name: '💸 Pay-per-Use Pricing',
      description: 'No monthly or yearly fees. You only pay when you benefit.',
      highlighted: true,
      features: [],
      usageDetails: [
        {
          title: '🛠 Freelancing Projects',
          items: [
            'Freelancer pays 7% per milestone',
            'Client pays 2% per milestone',
          ],
        },
        {
          title: '📚 Digital Product Sales',
          items: ['Creator pays 5% per sale'],
        },
        {
          title: '💼 Job Listings',
          items: [
            'First job listing is free',
            'Subsequent listings: $2 per job post',
          ],
        },
        {
          title: '📣 Promotions & Ads',
          items: ['Promote your service or product starting at $5'],
        },
      ],
      buttonText: 'Start Using',
    },
  ];

  return (
    <div
      id="pricing"
      className="w-full bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent sm:text-5xl">
            We believe in full transparency and accessibility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            That's why we offer a freemium model and a simple pay-per-use plan.
          </motion.p>
        </div>

        {/* Pricing Plans */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className={cn(
                'relative rounded-3xl p-8 transition-all hover:-translate-y-2 hover:shadow-2xl duration-300 backdrop-blur-sm',
                plan.highlighted
                  ? 'bg-gradient-to-br from-neutral-900 to-neutral-800 text-white dark:from-white dark:to-neutral-100 dark:text-neutral-900 border border-neutral-800 dark:border-neutral-200'
                  : 'bg-white/80 text-neutral-900 dark:bg-neutral-800/80 dark:text-white border border-neutral-200 dark:border-neutral-700'
              )}>
              <h3
                className={cn(
                  'text-3xl font-bold leading-8',
                  plan.highlighted
                    ? 'text-white dark:text-neutral-900'
                    : 'text-neutral-900 dark:text-white'
                )}>
                {plan.name}
              </h3>
              <p
                className={cn(
                  'mt-4 text-xl leading-7 font-semibold',
                  plan.highlighted
                    ? 'text-white/90 dark:text-neutral-900/90'
                    : 'text-neutral-900/90 dark:text-white/90'
                )}>
                {plan.description}
              </p>

              {/* Features */}
              {plan.features.length > 0 && (
                <ul
                  className={cn(
                    'mt-8 space-y-3 text-base leading-6',
                    plan.highlighted
                      ? 'text-neutral-300 dark:text-neutral-600'
                      : 'text-neutral-600 dark:text-neutral-300'
                  )}
                  role="list">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex gap-x-3">
                      <svg
                        className={cn(
                          'h-6 w-6 flex-none',
                          plan.highlighted
                            ? 'text-white dark:text-neutral-900'
                            : 'text-neutral-900 dark:text-white'
                        )}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Usage Details */}
              {plan.usageDetails && (
                <div className="mt-8 space-y-6">
                  {plan.usageDetails.map((detail, detailIdx) => (
                    <div key={detailIdx}>
                      <h4 className="text-lg font-semibold mb-3">
                        {detail.title}
                      </h4>
                      <ul className="space-y-2">
                        {detail.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className={cn(
                              'text-base',
                              plan.highlighted
                                ? 'text-neutral-300 dark:text-neutral-300'
                                : 'text-neutral-600 dark:text-neutral-300'
                            )}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'mt-8 block w-full rounded-xl px-6 py-3 text-center text-base font-semibold leading-6 shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-300',
                  plan.highlighted
                    ? 'bg-white text-neutral-900 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'
                )}>
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
