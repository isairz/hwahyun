import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Intro from './components/Intro.vue'
import Field from './components/Field.vue'
import PeopleList from './components/PeopleList.vue'
import PeopleDetail from './components/PeopleDetail.vue'

import './i18n'
Vue.config.lang = 'ko'

Vue.use(VueRouter)
const Main = Vue.extend({})
const router = new VueRouter({ history: true })

router.map({
  '/': {
    component: App,
    subRoutes: {
      '/': { component: Home },
      '/intro': { component: Intro },
      '/field': { component: Field },
      '/people': { component: PeopleList },
      '/people/:id': { component: PeopleDetail },
    },
  },
})

router.start(Main, 'body')
