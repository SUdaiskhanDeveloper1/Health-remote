import type { Metadata } from 'next'; import ProgramPageClient from '@/components/pages/ProgramPage';
export const metadata: Metadata = { title:'Annual Wellness Visit Software UI | CareSync Pro', description:'Frontend-only healthcare SaaS program page for annual wellness visit software ui with mock dashboard workflows, charts, alerts, and care coordination UI.' };
export default function Page(){return <ProgramPageClient slug="annual-wellness-visit"/>}
