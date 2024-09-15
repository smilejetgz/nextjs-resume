import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Sidebar from '@/features/ui/components/Sidebar';
import Footer from '@/features/ui/components/Footer';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SmileJetGz Resume',
  description: 'A professional resume created by SmileJetGz',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen bg-gradient-to-br from-gray-800 from-10% via-slate-900 via-40% to-indigo-950 to-90% antialiased`}
      >
        <Sidebar />
        <main className="mt-12 flex flex-1 items-center justify-center p-6 text-slate-200 md:mt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
