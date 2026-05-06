import './globals.css';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const metadata: Metadata = {
  title: 'SHOKANEKO',
  description: 'High-density personal blog built with Next.js and Bun.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme')?.value;
  const resolvedCookie = cookieStore.get('theme_resolved')?.value;
  const theme = themeCookie === 'light' || themeCookie === 'dark' || themeCookie === 'system' ? themeCookie : 'dark';
  const resolved = resolvedCookie === 'light' || resolvedCookie === 'dark' ? resolvedCookie : theme === 'light' ? 'light' : 'dark';

  return (
    <html lang="en" suppressHydrationWarning className={resolved === 'dark' ? 'dark' : ''} data-theme={resolved} data-theme-mode={theme}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}