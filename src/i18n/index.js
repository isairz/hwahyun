import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ko from './ko'
import en from './en'

const locales = {
  ko,
  en,
}

Vue.use(VueI18n)
Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang])
})
