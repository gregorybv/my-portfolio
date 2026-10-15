import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../../i18n';

export const LanguageToggle: FC = memo(() => {
  const { t, i18n } = useTranslation();
  const currentLanguage: Language = i18n.resolvedLanguage?.startsWith('ru') ? 'ru' : 'en';
  const nextLanguage: Language = currentLanguage === 'en' ? 'ru' : 'en';

  const handleToggle = () => {
    void i18n.changeLanguage(nextLanguage).catch((error: unknown) => {
      console.error('Unable to change the interface language.', error);
    });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="nav-control h-[46px] w-[46px] p-2 text-sm font-bold"
      aria-label={t('language.switchTo')}
      title={t('language.switchTo')}
    >
      {t('language.short')}
    </button>
  );
});
