<template>
  <div class='field'>
    <div class='headline'>
      <div class="cell">
        <h2>{{ $t('menu.people') }}</h2>
        <h3>{{{ $t('desc.people') }}}</h3>
      </div>
    </div>
    <div class='container'>
      <div class='menu'>
        <ul>
          <a v-link="{ path: '/people', exact: true }"><li>{{ $t('menu.all') }}</li></a>
          <a v-link="'/people/1'"><li>{{ $t('menu.title1') }}</li></a>
          <a v-link="'/people/2'"><li>{{ $t('menu.title2') }}</li></a>
          <a v-link="'/people/3'"><li>{{ $t('menu.title3') }}</li></a>
          <a v-link="'/people/4'"><li>{{ $t('menu.title4') }}</li></a>
        </ul>
      </div>
      <div class='peoples'>
        <a v-for="people in peoples | titleBy $route.params.key" v-link="`/people/show/${people.id}`">
            <div class='people'>
              <div class='photo'>
                <div class='photoCrop'>
                  <img src='{{ `/static/photos/${people.photo}` }}'>
                </div>
              </div>
              <div class='data'>
                <div class='title'>{{ $t(`menu.title${people.title}`) }}</div>
                <div class='name'>{{ people.name }}</div>
                <div class='email'><span class='caption'>{{ $t('menu.email') }}</span>{{ people.email }}</div>
                <div class='field'><span class='caption'>{{ $t('menu.field') }}</span>{{ people.field }}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.filter('titleBy', function (items, key) {
  if (!key || key === '0') return items
  return items.filter(item => Number(item.title) === Number(key))
})
export default {
  data () {
    return {
      peoples: require('./people.json')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../variables.styl"

.headline
  headline()
  background url('../assets/people_image1.jpg') no-repeat center center
  background-size cover

.container
  max-width $container
  margin auto

.menu
  ul
    clearfix()
    max-width $container
    list-style-type none
    margin 56px auto 53px
    .v-link-active
      li
        background $dark
        color $light
    li
      width 19.8%
      height 58px
      line-height 58px
      margin 0.1%
      float left
      text-align center
      background $light
      color $dark
      font-size 15pt
      &:hover
        color $light
        background $dark
.peoples
  clearfix()
  border-top 2px solid $light
  border-bottom 1px solid $light
  margin-bottom 100px
.people
  clearfix()
  color $dark
  width 100%
  border-bottom 1px solid $light
  .photo
    display block
    float left
    margin 20px 0
    padding 0 20px 0 0
    border-right 1px solid $light
    overflow: hidden
    .photoCrop
      width 270px
      height 197px
      overflow hidden
      img
        width 100%
        height auto
  .data
    float: left
    padding 48px 28px
  .caption
    color $light
    width 80px
    display inline-block
  .title
    font-size 12pt
    margin-bottom -7px
  .name
    font-size 24pt
    font-weight $bold
    margin-bottom 20px
  .email
    font-size 12pt
  .field
    font-size 12pt
</style>
