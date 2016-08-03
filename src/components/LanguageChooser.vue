<template>
  <div class='languages' v-for="lang in languages | notCurrentLang lang">
    <language :name="lang.name" :code="lang.code"></language>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.filter('notCurrentLang', function (languages, lang) {
  console.log(languages, lang)
  return languages.filter(l => l.code !== Vue.config.lang)
})
export default {
  data () {
    return {
      lang: Vue.config.lang,
      languages: [
        {
          code: 'en',
          name: '/static/assets/language_eng.svg',
        },
        {
          code: 'ko',
          name: '/static/assets/language_kor.svg',
        },
      ],
    }
  },
  components: {
    language: {
      props: ['code', 'name'],
      template: '<img src={{name}} @click="Select">',
      methods: {
        Select (e) {
          Vue.config.lang = this.code
        },
      },
    },
  },
}
</script>

<style lang="stylus">
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
.languages
  float left
  margin-top 3px
  margin-left 60px
</style>
