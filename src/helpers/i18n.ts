import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // here we will place our translations...
          welcome: "hello and welcome",
          helloUser: "Hello, Mohamed",
          English: "English",
          Arabic: "Arabic",
          French: "French",
        },
      },
      ar: {
        translation: {
          // here we will place our translations...
          welcome: "اهلا و سهلا",
          helloUser: "اهلا يا محمد",
          English: "الانجليزيه",
          Arabic: "العربيه",
          French: "الفرنسيه",
        },
      },
      fr: {
        translation: {
          // here we will place our translations...
          welcome: "salut",
          helloUser: "salut Moahmed",
          English: "Anglais",
          Arabic: "arabe",
          French: "Français",
        },
      },
    },
  });

export default i18n;
