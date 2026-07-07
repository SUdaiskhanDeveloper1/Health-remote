import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/components/pages/PrivacyPolicyPage';
import PublicLayout from '@/components/layout/PublicLayout';

export const metadata: Metadata = { title: 'Privacy Policy | CareSync Pro' };
export default function Page(){
	return (
		<PublicLayout>
			<PrivacyPolicyPage/>
		</PublicLayout>
	);
}
