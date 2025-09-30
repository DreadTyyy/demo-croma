import type { Metadata } from 'next';
import '@/styles/globals.css';

import { orbitron } from '@/app/font';

export const metadata: Metadata = {
  title: 'Croma Art',
  description: 'Croma Art description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
        <body
          className={`${orbitron.className} antialiased overflow-x-hidden bg-[#0a0a0a] text-[#EAEAEA]`}
        >
          {/* <Navbar active='home' /> */}
          {children}
        </body>
    </html>
  );
}
