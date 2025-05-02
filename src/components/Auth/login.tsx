'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import {
  IconBrandGithub,
  IconBrandGoogle,
} from '@tabler/icons-react';

export function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="shadow-lg mx-auto w-full max-w-md rounded-xl bg-white p-8 space-y-8 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Welcome back
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Sign in to your account
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label
              htmlFor="email"
              className="text-neutral-700 dark:text-neutral-300">
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="you@example.com"
              type="email"
              className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 focus:ring-primary-500"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label
              htmlFor="password"
              className="text-neutral-700 dark:text-neutral-300">
              Password
            </Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 focus:ring-primary-500"
            />
          </LabelInputContainer>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/forgot-password"
                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-neutral-800 transition-colors duration-200"
            type="submit">
            Sign in
            <BottomGradient />
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300 dark:border-neutral-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <button
              className="w-full flex items-center justify-center px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg shadow-sm bg-white dark:bg-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
              type="button">
              <IconBrandGithub className="h-5 w-5 mr-2" />
              GitHub
              <BottomGradient />
            </button>
            <button
              className="w-full flex items-center justify-center px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg shadow-sm bg-white dark:bg-neutral-800 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-200"
              type="button">
              <IconBrandGoogle className="h-5 w-5 mr-2" />
              Google
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col space-y-2', className)}>{children}</div>
  );
};