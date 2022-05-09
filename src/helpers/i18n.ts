import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ProjectLocales from "../components/Project/locales";
import ProjectBoxLocales from "../components/ProjectBox/locales";


i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

  // for all options read: https://www.i18next.com/overview/configuration-options

  .init({
    ns: ["project", "common"],
    defaultNS: "common",

    debug: true,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        // here we will place our translations...
        common: {
          welcome: "hello and welcome",
          helloUser: "Hello, Mohamed",
          English: "English",
          Arabic: "Arabic",
          French: "French",
        },
        project: ProjectLocales.en,
        projectBox: ProjectBoxLocales.en,
      },
      ar: {
        // here we will place our translations...

        common: {
          welcome: "اهلا و سهلا",
          helloUser: "اهلا يا محمد",
          English: "الانجليزيه",
          Arabic: "العربيه",
          French: "الفرنسيه",
        },

        project: ProjectLocales.ar,
        projectBox: ProjectBoxLocales.ar,
      },

      fr: {
        // here we will place our translations...
        common: {
          welcome: "salut",
          helloUser: "salut Moahmed",
          English: "Anglais",
          Arabic: "arabe",
          French: "Français",
        },
        project: ProjectLocales.fr,
        projectBox: ProjectBoxLocales.fr,
      },
    },
  });

export default i18n;
