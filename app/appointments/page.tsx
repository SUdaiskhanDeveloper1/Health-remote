import type { Metadata } from 'next'; import AppointmentsPage from '@/components/pages/AppointmentsPage';
export const metadata: Metadata = { title:'Appointment Calendar UI | CareSync Pro', description:'Frontend-only appointment scheduling, care follow-up calendar, booking form, status filters, and visit placeholders.' };
export default function Page(){return <AppointmentsPage/>}
