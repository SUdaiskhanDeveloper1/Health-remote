import type { Metadata } from 'next';
import Providers from './providers';
import './globals.css';
export const metadata: Metadata = { title:'CareSync Pro | All-in-One Healthcare Care Management Software', description:'CareSync Pro is a modern healthcare SaaS frontend template for remote patient monitoring, chronic care management, patient engagement, provider dashboards, and care coordination workflows.' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Providers>{children}</Providers></body></html>; }
