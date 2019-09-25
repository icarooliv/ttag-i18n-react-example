import { addLocale, useLocale } from 'ttag';

let locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

if (locale !== 'en') {
  const translationsObj = require(`../i18n/${locale}.po.json`);
  addLocale(locale, translationsObj);
  useLocale(locale);
}