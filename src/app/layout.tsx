import './globals.css';
import 'react-vertical-timeline-component/style.min.css';
import 'react-tooltip/dist/react-tooltip.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Donald Ivan Cribillo - React Typescript Developer',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
