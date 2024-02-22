import LocalSwitcher from '@/components/locale-switcher';
import { useTranslations } from 'next-intl';

export default function Index() {
	const t = useTranslations('Index');
	return (
		<div>
			<LocalSwitcher />
			<h1 className="text-4xl font-bold text-center text-balance">
				{t('title')}
			</h1>
		</div>
	);
}
