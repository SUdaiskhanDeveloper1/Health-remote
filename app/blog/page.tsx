import type { Metadata } from 'next';
import BlogPage from '@/components/pages/BlogPage';
import PublicLayout from '@/components/layout/PublicLayout';

export const metadata: Metadata = { title: 'Blog | CareSync Pro' };
export default function Page(){
	return (
		<PublicLayout>
			<BlogPage/>
		</PublicLayout>
	);
}
