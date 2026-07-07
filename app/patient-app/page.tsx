import type { Metadata } from 'next'; import PatientAppPage from '@/components/pages/PatientAppPage';
export const metadata: Metadata = { title:'Patient Mobile App UI | CareSync Pro', description:'Patient mobile app frontend page with mock vitals entry, symptoms tracker, reminders, education, and video call placeholder.' };
export default function Page(){return <PatientAppPage/>}
