import type { Metadata } from 'next'; import DevicesPage from '@/components/pages/DevicesPage';
export const metadata: Metadata = { title:'Devices and Integrations UI | CareSync Pro', description:'Frontend-only device monitoring page with mock 4G, Bluetooth, mobile app sync, and integration placeholder UI.' };
export default function Page(){return <DevicesPage/>}
