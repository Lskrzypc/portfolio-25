import { defineNuxtPlugin } from '#app';
import { createI18n } from 'vue-i18n';
import fr from '@/locales/fr.json';
import en from '@/locales/en.json';

export default defineNuxtPlugin((nuxtApp) => {
  function setDefaultLocale() {
    if (localStorage.getItem('locale')) {
      return localStorage.getItem('locale') as string;
    }
    localStorage.setItem('locale', 'fr');
    return 'fr';
  }

  const i18n = createI18n({
    legacy: false,
    locale: setDefaultLocale(),
    fallbackLocale: 'en',
    messages: {
      en,
      fr,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
