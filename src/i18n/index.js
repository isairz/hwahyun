import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ko from './ko'

const locales = {
  ko: ko,
}

Vue.use(VueI18n)
Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang])
})
