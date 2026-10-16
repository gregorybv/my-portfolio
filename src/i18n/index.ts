import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

export type Language = keyof typeof resources;

const LANGUAGE_STORAGE_KEY = 'language';
const FALLBACK_LANGUAGE: Language = 'en';

const isLanguage = (value: string | null): value is Language => (
  value === 'en' || value === 'ru'
);

const getInitialLanguage = (): Language => {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isLanguage(storedLanguage)) {
      return storedLanguage;
    }
  } catch (error) {
    console.warn('Unable to read the saved language preference.', error);
  }

  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : FALLBACK_LANGUAGE;
};

const updateDocumentLanguage = (language: string) => {
  const resolvedLanguage: Language = language.startsWith('ru') ? 'ru' : 'en';
  const meta = resources[resolvedLanguage].translation.meta;
  document.documentElement.lang = resolvedLanguage;
  document.title = meta.title;

  const updateMetaContent = (selector: string, content: string) => {
    document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
  };

  updateMetaContent('meta[name="description"]', meta.description);
  updateMetaContent('meta[property="og:title"]', meta.title);
  updateMetaContent('meta[property="og:description"]', meta.description);
  updateMetaContent('meta[name="twitter:title"]', meta.title);
  updateMetaContent('meta[name="twitter:description"]', meta.description);
  updateMetaContent('meta[property="og:locale"]', resolvedLanguage === 'ru' ? 'ru_RU' : 'en_US');
};

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: FALLBACK_LANGUAGE,
    supportedLngs: ['en', 'ru'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })
  .catch((error: unknown) => {
    console.error('Unable to initialize translations.', error);
  });

updateDocumentLanguage(i18n.resolvedLanguage ?? FALLBACK_LANGUAGE);

i18n.on('languageChanged', (language) => {
  updateDocumentLanguage(language);

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.warn('Unable to save the language preference.', error);
  }
});

export { i18n };
