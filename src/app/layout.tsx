import type { Metadata } from 'next';
import '@/styles/globals.css';
import ReactLenis from 'lenis/react';

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
      <ReactLenis root>
        <body
          className={`${orbitron.className} antialiased overflow-x-hidden`}
        >
          {/* <Navbar active='home' /> */}
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
