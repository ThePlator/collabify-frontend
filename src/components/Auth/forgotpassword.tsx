'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

export function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Password reset requested');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="shadow-lg mx-auto w-full max-w-md rounded-xl bg-white p-8 space-y-8 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Forgot Password
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Enter your email address and we'll send you instructions to reset your password
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
              required
            />
          </LabelInputContainer>

          <button
            className="relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-neutral-800 transition-colors duration-200 group/btn"
            type="submit">
            Send Reset Instructions
            <BottomGradient />
          </button>

          <div className="text-center">
            <a
              href="/login"
              className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              Back to Login
            </a>
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