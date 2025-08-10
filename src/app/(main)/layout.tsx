'use client';

import { Header } from '@/components/header/Header';
import { NavTabsProvider } from '@/context';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavTabsProvider>
      <Header />
      {children}
    </NavTabsProvider>
  );
}
