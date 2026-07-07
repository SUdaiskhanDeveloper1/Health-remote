import type { Metadata } from 'next';
import TestimonialsPage from '@/components/pages/TestimonialsPage';
import PublicLayout from '@/components/layout/PublicLayout';

export const metadata: Metadata = { title: 'Testimonials | CareSync Pro' };
export default function Page(){
	return (
		<PublicLayout>
			<TestimonialsPage/>
		</PublicLayout>
	);
}
