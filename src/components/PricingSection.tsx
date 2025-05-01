'use client';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

export function PricingSection() {
  const pricingTiers: PricingTier[] = [
    {
      name: 'Basic',
      price: '$9',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        '5GB storage',
        'Basic collaboration tools',
        'Email support',
      ],
      buttonText: 'Start Free Trial',
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Up to 20 team members',
        '50GB storage',
        'Advanced collaboration tools',
        'Priority support',
        'Custom workflows',
        'Analytics dashboard',
      ],
      highlighted: true,
      buttonText: 'Get Started',
    },
    {
      name: 'Enterprise',
      price: '$99',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Enterprise-grade security',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee',
      ],
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <div
      id="pricing"
      className="w-full bg-neutral-50 py-24 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Choose the perfect plan for your team's needs. All plans include a
            14-day free trial.
          </motion.p>
        </div>

        {/* Pricing Tiers */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className={cn(
                'relative rounded-2xl p-8 transition-all hover:-translate-y-1',
                tier.highlighted
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'bg-white text-neutral-900 dark:bg-neutral-800 dark:text-white'
              )}>
              <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
              <p
                className={cn(
                  'mt-4 text-sm leading-6',
                  tier.highlighted
                    ? 'text-neutral-300 dark:text-neutral-600'
                    : 'text-neutral-600 dark:text-neutral-300'
                )}>
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">
                  {tier.price}
                </span>
                <span
                  className={cn(
                    'text-sm font-semibold leading-6',
                    tier.highlighted
                      ? 'text-neutral-300 dark:text-neutral-600'
                      : 'text-neutral-600 dark:text-neutral-300'
                  )}>
                  /month
                </span>
              </p>

              {/* Features */}
              <ul
                className={cn(
                  'mt-8 space-y-3 text-sm leading-6',
                  tier.highlighted
                    ? 'text-neutral-300 dark:text-neutral-600'
                    : 'text-neutral-600 dark:text-neutral-300'
                )}
                role="list">
                {tier.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex gap-x-3">
                    <svg
                      className={cn(
                        'h-6 w-6 flex-none',
                        tier.highlighted
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

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'mt-8 block w-full rounded-lg px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  tier.highlighted
                    ? 'bg-white text-neutral-900 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'
                )}>
                {tier.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
