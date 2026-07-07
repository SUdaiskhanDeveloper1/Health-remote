import type { Metadata } from 'next'; import PricingPage from '@/components/pages/PricingPage';
export const metadata: Metadata = { title:'Healthcare SaaS Pricing UI | CareSync Pro', description:'Healthcare SaaS placeholder pricing page with program comparison table, add-on modules, FAQ accordion, and request quote CTA.' };
export default function Page(){return <PricingPage/>}
