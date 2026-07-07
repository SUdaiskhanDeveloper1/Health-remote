import type { Metadata } from 'next'; import ProviderDashboardPage from '@/components/pages/ProviderDashboardPage';
export const metadata: Metadata = { title:'Provider Dashboard UI | CareSync Pro', description:'Frontend-only provider dashboard with patient metrics, program enrollment, alerts, care plans, time tracking, and communication UI.' };
export default function Page(){return <ProviderDashboardPage/>}
