import type { Metadata } from 'next'; import RequestDemoPage from '@/components/pages/RequestDemoPage';
export const metadata: Metadata = { title:'Request a Demo | CareSync Pro', description:'Request demo page for CareSync Pro with frontend-only Chakra UI form, trust badges, FAQ, and success toast placeholder.' };
export default function Page(){return <RequestDemoPage/>}
