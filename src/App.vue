<template>
  <div class='header'>
    <div class='wrap'>
      <div class='logo'>
        <a v-link="'/'"><img src='./assets/logo.svg'></a>
      </div>
      <div class='menu'>
        <ul>
          <a v-link="'intro'"><li>{{ $t('menu.intro') }}</li></a>
          <a v-link="'field'"><li>{{ $t('menu.field') }}</li></a>
          <a v-link="'people'"><li>{{ $t('menu.people') }}</li></a>
          <a v-link="'news'"><li>{{ $t('menu.news') }}</li></a>
        </ul>
      </div>
    </div>
  </div>
  <main id='main'>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
*
  margin 0
  padding 0
  box-sizing border-box
  line-height normal
  transition all 0.2s

label
  user-select none

body
  font-family 'Noto Sans KR', sans-serif
  background $white
  font-size 12pt
  letter-spacing -0.05em

a, a:hover, a:visited
  color inherit
</style>

<style lang="stylus" scoped>
@import "./variables.styl"
.wrap
  clearfix()
  height 90px
  max-width $container
  margin auto
.logo
  margin-left 84px
  float: left
  margin-top 15px
.menu
  margin-top 20px
  float: right
  ul
    clearfix()
    float: left
  li
    color $dark
    font-size 16.5pt
    font-weight bold
    float: left
    margin-left 40px
</style>
