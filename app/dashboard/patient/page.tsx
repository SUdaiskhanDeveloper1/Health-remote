import type { Metadata } from 'next'; import PatientDashboardPage from '@/components/pages/PatientDashboardPage';
export const metadata: Metadata = { title:'Patient Dashboard UI | CareSync Pro', description:'Frontend-only patient dashboard with profile summary, vitals, care plan, medication reminders, appointment, messages, symptoms, and education.' };
export default function Page(){return <PatientDashboardPage/>}
