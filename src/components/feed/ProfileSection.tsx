'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconMapPin,
  IconMail,
  IconLink,
  IconEdit,
  IconCheck,
  IconX,
} from '@tabler/icons-react';

interface UserStats {
  label: string;
  value: number;
}

interface UserSkill {
  name: string;
  level: number;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  repoUrl: string;
}

interface UserData {
  name: string;
  role: string;
  avatar: string;
  location: string;
  email: string;
  website: string;
  bio: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com',
    icon: <IconBrandGithub className="h-5 w-5" />,
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com',
    icon: <IconBrandTwitter className="h-5 w-5" />,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <IconBrandLinkedin className="h-5 w-5" />,
  },
];

export function ProfileSection() {
  // Dummy data - replace with actual user data
  const initialUserData: UserData = {
    name: 'Manu Arora',
    role: 'Full Stack Developer',
    avatar: 'https://assets.aceternity.com/manu.png',
    location: 'San Francisco, CA',
    email: 'manu@example.com',
    website: 'https://manuarora.in',
    bio: 'Passionate developer building modern web applications. Love to explore new technologies and share knowledge with the community.',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [tempUserData, setTempUserData] = useState<UserData>(initialUserData);

  const stats: UserStats[] = [
    { label: 'Posts', value: 128 },
    { label: 'Followers', value: 1420 },
    { label: 'Following', value: 890 },
  ];

  const skills: UserSkill[] = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Next.js', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
  ];

  const handleSave = () => {
    setUserData(tempUserData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUserData(userData);
    setIsEditing(false);
  };

  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce platform with real-time inventory management and payment processing.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
      techStack: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
      demoUrl: 'https://demo.example.com',
      repoUrl: 'https://github.com/example/ecommerce',
    },
    {
      title: 'AI Content Generator',
      description:
        'An AI-powered application that generates SEO-optimized content using machine learning.',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      techStack: ['React', 'Python', 'OpenAI', 'FastAPI'],
      demoUrl: 'https://ai-demo.example.com',
      repoUrl: 'https://github.com/example/ai-generator',
    },
    {
      title: 'Task Management Dashboard',
      description:
        'A collaborative task management tool with real-time updates and team analytics.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
      techStack: ['React', 'Redux', 'Node.js', 'MongoDB'],
      demoUrl: 'https://tasks.example.com',
      repoUrl: 'https://github.com/example/task-manager',
    },
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      date: '2023',
      logo: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=120&h=120&fit=crop',
      status: 'Valid',
      expiryDate: '2026',
    },
    {
      name: 'Professional Cloud Architect',
      organization: 'Google Cloud',
      date: '2023',
      logo: 'https://images.unsplash.com/photo-1573152958734-1922c188fba3?w=120&h=120&fit=crop',
      status: 'Valid',
      expiryDate: '2025',
    },
    {
      name: 'Azure Solutions Architect Expert',
      organization: 'Microsoft',
      date: '2022',
      logo: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?w=120&h=120&fit=crop',
      status: 'Valid',
      expiryDate: '2024',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Profile Header */}
      <div className="relative mb-8 group">
        <div className="h-32 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-t-2xl shadow-lg transform transition-all duration-300 group-hover:scale-[1.01] group-hover:shadow-xl" />
        <div className="absolute -bottom-16 left-8">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300" />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              src={userData.avatar}
              alt={userData.name}
              className="relative h-32 w-32 rounded-full border-4 border-white dark:border-neutral-900 shadow-lg object-cover"
            />
          </motion.div>
        </div>
        <div className="absolute top-4 right-4">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors">
              <IconEdit className="h-5 w-5 text-white" />
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors">
                <IconCheck className="h-5 w-5 text-white" />
              </button>
              <button
                onClick={handleCancel}
                className="p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors">
                <IconX className="h-5 w-5 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
      {/* User Info */}
      <div className="mt-20 mb-8">
        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={tempUserData.name}
              onChange={(e) =>
                setTempUserData({ ...tempUserData, name: e.target.value })
              }
              className="w-full px-3 py-2 text-2xl font-bold bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={tempUserData.role}
              onChange={(e) =>
                setTempUserData({ ...tempUserData, role: e.target.value })
              }
              className="w-full px-3 py-2 text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-neutral-900 dark:text-white">
              {userData.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-600 dark:text-neutral-400">
              {userData.role}
            </motion.p>
          </>
        )}
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <IconMapPin className="h-4 w-4" />
            {isEditing ? (
              <input
                type="text"
                value={tempUserData.location}
                onChange={(e) =>
                  setTempUserData({ ...tempUserData, location: e.target.value })
                }
                className="px-2 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              userData.location
            )}
          </div>
          <div className="flex items-center gap-1">
            <IconMail className="h-4 w-4" />
            {isEditing ? (
              <input
                type="email"
                value={tempUserData.email}
                onChange={(e) =>
                  setTempUserData({ ...tempUserData, email: e.target.value })
                }
                className="px-2 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              userData.email
            )}
          </div>
          <div className="flex items-center gap-1">
            <IconLink className="h-4 w-4" />
            {isEditing ? (
              <input
                type="url"
                value={tempUserData.website}
                onChange={(e) =>
                  setTempUserData({ ...tempUserData, website: e.target.value })
                }
                className="px-2 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <a
                href={userData.website}
                className="hover:text-blue-500 transition-colors">
                {userData.website}
              </a>
            )}
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{
              delay: idx * 0.1,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              {stat.value.toLocaleString()}
            </div>
            <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Bio */}
      <div className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl p-6 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          About
        </h2>
        {isEditing ? (
          <textarea
            value={tempUserData.bio}
            onChange={(e) =>
              setTempUserData({ ...tempUserData, bio: e.target.value })
            }
            rows={4}
            className="w-full px-3 py-2 text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <p className="text-neutral-600 dark:text-neutral-400">
            {userData.bio}
          </p>
        )}
      </div>
      {/* Skills */}
      <div className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl p-6 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Skills
        </h2>
        <div className="space-y-4">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-neutral-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl p-6 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Certifications
        </h2>
        <div className="space-y-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors">
              <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-white dark:bg-neutral-700 p-2">
                <img
                  src={cert.logo}
                  alt={cert.organization}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-base font-medium text-neutral-900 dark:text-white">
                  {cert.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {cert.organization} • Issued {cert.date}
                </p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  {cert.status}
                </span>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Expires {cert.expiryDate}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 rounded-xl p-6 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{
                delay: idx * 0.1,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="group overflow-hidden rounded-xl border border-neutral-200/50 dark:border-neutral-700/50 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-950 backdrop-blur-sm">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Social Links */}
      <div className="flex justify-center gap-4">
        {socialLinks.map((link, idx) => (
          <motion.a
            key={link.platform}
            href={link.url}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

{
  /* Projects */
}
