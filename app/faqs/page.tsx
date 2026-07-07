import type { Metadata } from 'next';
import FaqsPage from '@/components/pages/FaqsPage';
import PublicLayout from '@/components/layout/PublicLayout';

export const metadata: Metadata = { title: 'FAQs | CareSync Pro' };
export default function Page(){
	return (
		<PublicLayout>
			<FaqsPage/>
		</PublicLayout>
	);
}
