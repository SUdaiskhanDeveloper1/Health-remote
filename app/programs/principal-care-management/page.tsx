import type { Metadata } from 'next'; import ProgramPageClient from '@/components/pages/ProgramPage';
export const metadata: Metadata = { title:'Principal Care Management Software UI | CareSync Pro', description:'Frontend-only healthcare SaaS program page for principal care management software ui with mock dashboard workflows, charts, alerts, and care coordination UI.' };
export default function Page(){return <ProgramPageClient slug="principal-care-management"/>}
