import type { Metadata } from 'next'; import ProgramPageClient from '@/components/pages/ProgramPage';
export const metadata: Metadata = { title:'Remote Therapeutic Monitoring Software UI | CareSync Pro', description:'Frontend-only healthcare SaaS program page for remote therapeutic monitoring software ui with mock dashboard workflows, charts, alerts, and care coordination UI.' };
export default function Page(){return <ProgramPageClient slug="remote-therapeutic-monitoring"/>}
