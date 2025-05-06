'use client';
import { AdminDashboard } from './AdminDashboard';

export function AdminLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100 dark:bg-neutral-900">
      <main className="flex-1 overflow-auto p-8 pt-24">
        <AdminDashboard />
      </main>
    </div>
  );
}
