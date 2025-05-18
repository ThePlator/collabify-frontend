'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  IconCurrencyDollar,
  IconCalendar,
  IconMapPin,
  IconBook,
  IconTemplate,
  IconVideo,
} from '@tabler/icons-react';

interface Content {
  id: string;
  title: string;
  author: string;
  type: 'Course' | 'Ebook' | 'Template';
  price: string;
  category: string;
  level: string;
  posted: string;
  description: string;
  features: string[];
}

interface ContentPostingFormData {
  title: string;
  author: string;
  type: 'Course' | 'Ebook' | 'Template';
  price: string;
  category: string;
  level: string;
  description: string;
  features: string[];
}

export function ContentPostingPage() {
  // Mock data for posted content
  const [postedContent, setPostedContent] = useState<Content[]>([
    {
      id: '1',
      title: 'Advanced React Development',
      author: 'Tech Academy',
      type: 'Course',
      price: '$79.99',
      category: 'Web Development',
      level: 'Advanced',
      posted: '2 days ago',
      description:
        'Master advanced React concepts including hooks, context, and performance optimization.',
      features: [
        '10+ hours of video content',
        'Hands-on projects',
        'Certificate of completion',
        'Lifetime access',
      ],
    },
    {
      id: '2',
      title: 'Modern UI/UX Design Guide',
      author: 'Design Masters',
      type: 'Ebook',
      price: '$29.99',
      category: 'Design',
      level: 'Intermediate',
      posted: '1 week ago',
      description:
        'Comprehensive guide to modern UI/UX design principles and practices.',
      features: [
        '300+ pages of content',
        'Downloadable resources',
        'Case studies',
        'Design templates',
      ],
    },
  ]);

  const [formData, setFormData] = useState<ContentPostingFormData>({
    title: '',
    author: '',
    type: 'Course',
    price: '',
    category: '',
    level: '',
    description: '',
    features: [''],
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    setFormData((prev) => {
      const newFeatures = [...prev.features];
      newFeatures[index] = value;
      return {
        ...prev,
        features: newFeatures,
      };
    });
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ''],
    }));
  };

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement content posting submission
    console.log('Form submitted:', formData);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Course':
        return <IconVideo className="h-4 w-4 mr-2" />;
      case 'Ebook':
        return <IconBook className="h-4 w-4 mr-2" />;
      case 'Template':
        return <IconTemplate className="h-4 w-4 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-8 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Right Side - Content Posting Form */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-neutral-800 rounded-xl p-8 border border-neutral-200 dark:border-neutral-700 shadow-xl">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
            Post New Content
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Share your knowledge and resources with the community. Fill out the
            form below to post your course, ebook, or template.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Advanced React Development Course"
              />
            </div>

            {/* Author/Creator */}
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Author/Creator *
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
                value={formData.author}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name or organization"
              />
            </div>

            {/* Content Type */}
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Content Type *
              </label>
              <select
                id="type"
                name="type"
                required
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="Course">Course</option>
                <option value="Ebook">Ebook</option>
                <option value="Template">Template</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Price *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="price"
                  name="price"
                  required
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 pl-10 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., $29.99"
                />
                <IconCurrencyDollar className="absolute left-3 top-2.5 text-neutral-400" />
              </div>
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Category *
              </label>
              <input
                type="text"
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Web Development, Design, Business"
              />
            </div>

            {/* Level */}
            <div>
              <label
                htmlFor="level"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Level *
              </label>
              <select
                id="level"
                name="level"
                required
                value={formData.level}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="All Levels">All Levels</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your content, its benefits, and what learners will gain..."
              />
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Features *
              </label>
              <div className="space-y-3">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(index, e.target.value)
                      }
                      className="flex-1 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white/50 dark:bg-neutral-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Feature ${index + 1}`}
                      required
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="px-3 py-2 text-red-500 hover:text-red-600 transition-colors">
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="text-blue-500 hover:text-blue-600 transition-colors">
                  + Add Feature
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-neutral-900 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg">
              Post Content
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Right Sidebar - Posted Content */}
      <div className="w-96 shrink-0">
        <div className="sticky top-8">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
            Your Posted Content
          </h2>
          <div className="space-y-4">
            {postedContent.map((content) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  {content.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
                  {content.author}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                    {getTypeIcon(content.type)}
                    {content.type}
                  </div>
                  <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                    <IconCurrencyDollar className="h-4 w-4 mr-2" />
                    {content.price}
                  </div>
                  <div className="flex items-center text-neutral-700 dark:text-neutral-300">
                    <IconCalendar className="h-4 w-4 mr-2" />
                    {content.posted}
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-700">
                  <button className="w-full py-2 text-sm bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
