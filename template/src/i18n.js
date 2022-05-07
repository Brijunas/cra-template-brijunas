import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { fallbackLng, supportedLngs } from "./configs/languages"

//import resource files here...
import en from "./locales/en.json"
import svSE from "./locales/svSE.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      "sv-SE": svSE,
    },
    fallbackLng: fallbackLng,
    supportedLngs: supportedLngs,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
