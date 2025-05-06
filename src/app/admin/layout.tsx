'use client';

import { useState } from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-neutral-50 dark:bg-neutral-900">
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
