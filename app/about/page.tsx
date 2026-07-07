import type { Metadata } from 'next';
import AboutPage from '@/components/pages/AboutPage';
import PublicLayout from '@/components/layout/PublicLayout';

export const metadata: Metadata = { title: 'About | CareSync Pro' };
export default function Page(){
	return (
		<PublicLayout>
			<AboutPage/>
		</PublicLayout>
	);
}
