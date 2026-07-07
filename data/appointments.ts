import { Appointment } from '@/types/appointment';
export const appointments: Appointment[] = [
{ id:'a1', patientName:'Sarah Johnson', providerName:'Dr. Amelia Grant', date:'2026-07-08', time:'10:30 AM', type:'Video follow-up', status:'Scheduled', program:'RPM' },
{ id:'a2', patientName:'Robert Mills', providerName:'Taylor Reed', date:'2026-07-08', time:'1:00 PM', type:'Care call', status:'Scheduled', program:'CCM' },
{ id:'a3', patientName:'Maria Lopez', providerName:'Care Team A', date:'2026-07-09', time:'9:15 AM', type:'Post-discharge call', status:'Completed', program:'TCM' },
{ id:'a4', patientName:'David Chen', providerName:'Jordan Lee', date:'2026-07-10', time:'3:45 PM', type:'Therapy review', status:'Rescheduled', program:'RTM' }
];
