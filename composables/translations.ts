export enum Locales {
  EN = 'en',
  FR = 'fr',
}

export const useTranslation = () => {
  const switchCurrentLocale = () => {
    if (localStorage.getItem('locale') === Locales.EN) {
      localStorage.setItem('locale', Locales.FR);
    } else {
      localStorage.setItem('locale', Locales.EN);
    }
    window.location.reload();
  };

  return {
    switchCurrentLocale,
  };
};
