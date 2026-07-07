import type { Metadata } from 'next';
import ContactPage from '@/components/pages/ContactPage';
import PublicLayout from '@/components/layout/PublicLayout';

export const metadata: Metadata = { title: 'Contact | CareSync Pro' };
export default function Page(){
	return (
		<PublicLayout>
			<ContactPage/>
		</PublicLayout>
	);
}
