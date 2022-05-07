/**
 * Add suppored language codes here.
 * Don't forget to add locale imports of dayjs in @file App.jsx
 * @returns {{i18n: string, dayjs: string, mui: string}[]} supported languages array of objects,
 * where each contains specific language code for each library.
 */
const langs = [
  { i18n: "en", dayjs: "en", mui: "enUS" },
  { i18n: "sv-SE", dayjs: "sv", mui: "svSE" },
]

export const fallbackLng = langs[0].i18n
export const supportedLngs = langs.map((l) => l.i18n)

/**
 * @param {string} i18n is code of i18n languages.
 * @returns {Object} language codes of i18n, dayjs and Mui.
 */
export const getLangByi18n = (i18n) => langs.find((l) => l.i18n === i18n) || fallbackLng
