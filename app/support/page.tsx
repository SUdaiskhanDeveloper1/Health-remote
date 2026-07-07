import type { Metadata } from 'next';
import SupportPage from '@/components/pages/SupportPage';
import PublicLayout from '@/components/layout/PublicLayout';

export const metadata: Metadata = { title: 'Support | CareSync Pro' };
export default function Page(){
	return (
		<PublicLayout>
			<SupportPage/>
		</PublicLayout>
	);
}
