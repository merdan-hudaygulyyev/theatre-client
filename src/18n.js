import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Cookies from 'js-cookie'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: Cookies.get("i18next") || "tm",
        detection: {
            order: [ 'queryString', 'cookie'],
            caches: [ 'cookie']
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
