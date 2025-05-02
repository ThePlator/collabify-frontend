'use client';
import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // TODO: Implement actual password reset logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus('success');
      setMessage('Password reset instructions have been sent to your email.');
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send reset instructions. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="shadow-lg mx-auto w-full max-w-md rounded-xl bg-white p-8 space-y-8 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Reset your password
          </h2>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Enter your email address and we'll send you instructions to reset your password.
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 focus:ring-primary-500"
            />
          </LabelInputContainer>

          {message && (
            <div
              className={cn(
                'p-4 rounded-lg text-sm',
                status === 'success'
                  ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                  : 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300'
              )}>
              {message}
            </div>
          )}

          <button
            className={cn(
              'w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-colors duration-200',
              status === 'loading'
                ? 'bg-primary-400 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-neutral-800'
            )}
            type="submit"
            disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending...' : 'Send Reset Instructions'}
            <BottomGradient />
          </button>

          <div className="text-center text-sm">
            <span className="text-neutral-600 dark:text-neutral-400">
              Remember your password?{' '}
            </span>
            <a
              href="/login"
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200">
              Sign in
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