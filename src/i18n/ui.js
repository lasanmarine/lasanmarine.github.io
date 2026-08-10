export const languages = {
  vi: 'Tiếng Việt',
  en: 'English',
};

export const defaultLanguage = 'vi';

export const ui = {
  vi: {
    title: 'Lasan Marine',
    description: 'Website chính thức của Lasan Marine.',
    intro: 'Astro, Tailwind, Sass và AOS đã sẵn sàng để bắt đầu xây dựng.',
  },
  en: {
    title: 'Lasan Marine',
    description: 'The official website of Lasan Marine.',
    intro: 'Astro, Tailwind, Sass, and AOS are ready for development.',
  },
};

/** @param {'vi' | 'en'} language */
export function useTranslations(language) {
  return ui[language] || ui[defaultLanguage];
}
