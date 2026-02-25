import './globals.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export const metadata = {
  title: 'Samriddhi Sivakumar',
  description: 'Data Scientist & Software Engineer. Interactive dual-mode portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} font-sans`}>
      <body className="antialiased selection:bg-emerald-300 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
