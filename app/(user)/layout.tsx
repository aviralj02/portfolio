import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aviral | Portfolio',
  description: 'Welcome to Aviral\'s Portfolio! I am a skilled and passionate full-stack developer with expertise in creating robust and user-friendly web applications. Explore my diverse range of projects, demonstrating proficiency in various front-end and back-end technologies. Connect with me to discuss exciting opportunities or to start a new project together.',
  keywords: ['Portfolio', 'Next.js', 'Sanity.io', 'React', 'Framer Motion', 'Developer'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
