'use client';
import { Box, Settings, Lock, Sparkles, Search } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { motion } from 'framer-motion';

export function GlowingEffects() {
  return (
    <div className="w-full bg-neutral-50 py-24 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            The Future of Work is About Connection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            The future of work is not about location — it's about connection.
            And Collabify is here to power that connection.
          </motion.p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Enterprise Solutions"
            description="Empowering large organizations with secure, scalable platforms for seamless team collaboration and project management."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={
              <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Innovative Startups"
            description="Accelerating growth with agile collaboration tools designed for fast-paced development and efficient team coordination."
          />

          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Creative Teams"
            description="Enhancing creative workflows with intuitive tools for seamless design collaboration and efficient project delivery."
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={
              <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Remote Workforce"
            description="Connecting distributed teams globally with real-time collaboration tools that break down geographical barriers."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={
              <Search className="h-4 w-4 text-black dark:text-neutral-400" />
            }
            title="Educational Excellence"
            description="Transforming academic collaboration with specialized tools that enhance learning and knowledge sharing."
          />
        </ul>
      </div>
    </div>
  );
}

// function GridItem({
//   area,
//   icon,
//   title,
//   description,
// }: {
//   area: string;
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }) {
//   return (
//     <li
//       className={`group relative rounded-2xl bg-white/50 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/80 dark:bg-neutral-800/50 dark:hover:bg-neutral-800/80 ${area}`}>
//       <div className="text-2xl">{icon}</div>
//       <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">
//         {title}
//       </h3>
//       <p className="mt-2 text-neutral-600 dark:text-neutral-300">
//         {description}
//       </p>
//     </li>
//   );
// }

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
