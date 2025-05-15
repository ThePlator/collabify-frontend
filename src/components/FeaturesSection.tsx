'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Real-time Connections',
      description:
        'Freelancers, clients, business owners – all under one roof.',
      icon: <IconTerminal2 />,
    },
    {
      title: 'Digital Marketplace',
      description: 'Sell and buy templates, eBooks, and online courses.',
      icon: <IconEaseInOut />,
    },
    {
      title: 'Job Board',
      description: 'Post and apply for jobs with ease.',
      icon: <IconCurrencyDollar />,
    },
    {
      title: 'Messaging System',
      description: 'Seamless communication between all users.',
      icon: <IconCloud />,
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden charges. Only pay per use.',
      icon: <IconRouteAltLeft />,
    },
    {
      title: '24/7 Support',
      description: "We're here whenever you need us.",
      icon: <IconHelp />,
    },
    {
      title: 'Freemium Access',
      description:
        'Free access to the full platform with no credit card required.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Pay-per-Use',
      description: 'No monthly or yearly fees. You only pay when you benefit.',
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="relative w-full overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl mb-16">
          <span className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Core Features
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}>
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
