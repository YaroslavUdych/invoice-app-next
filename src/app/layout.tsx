import type { Metadata } from 'next';

import { leagueSpartan } from '@/fonts/league-spartan';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Invoice App',
  description: 'A simple invoice management application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body className={`${leagueSpartan.variable} antialiased`}>{children}</body>
    </html>
  );
}
