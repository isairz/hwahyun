<template>
  <div class='header'>
    <div class='wrap'>
      <div class='logo'>
        <a v-link="'/'"><img src='./assets/logo.svg'></a>
      </div>
      <div class='menu'>
        <ul>
          <a v-link="'/intro'"><li>{{ $t('menu.intro') }}</li></a>
          <a v-link="'/field/1'"><li>{{ $t('menu.field') }}</li></a>
          <a v-link="'/people'"><li>{{ $t('menu.people') }}</li></a>
          <a v-link="'/news'"><li>{{ $t('menu.news') }}</li></a>
        </ul>
        <language-chooser></language-chooser>
      </div>
    </div>
  </div>
  <main id='main'>
    <router-view></router-view>
  </main>
  <div class='footer'>
    <div class='wrap'>
      <img src='./assets/logo_light.svg'>
      <div class='wrap2'>
        <p>{{{ $t('desc.footinfo') }}}</p>
        <p>&nbsp;</p>
        <p>{{{ $t('desc.copyright') }}}</p>
      </div>
      <div class='disclaimer'>{{ $t('menu.disclaimer') }}</div>
    </div>
  </div>
</template>

<script>
import LanguageChooser from './components/LanguageChooser'
export default {
  components: { LanguageChooser },
}
</script>

<style lang="stylus">
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
*
  margin 0
  padding 0
  box-sizing border-box
  line-height normal

label
  user-select none

body
  font-family 'Noto Sans KR', sans-serif
  background $white
  font-size 12pt
  letter-spacing -0.05em

a, a:hover, a:visited
  color inherit
  text-decoration inherit
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
  margin-top 20px
.menu
  margin-top 25px
  float: right
  ul
    float: left
  li
    color $dark
    font-size 16.5pt
    font-weight $bold
    float: left
    margin-left 40px
    word-spacing -0.1em
  a:first-child li
    list-style none
.footer
  clearfix()
  background: $dark
  color: $light
  border-top 1px solid $light
  font-size 10.5pt
  text-align left
  padding 102px 0 213px
  img
    position absolute
    width 196px
    height 31px
  .disclaimer
    position absolute
    float right
    right 0
    top 0
    width 108px
    height 32px
    line-height 32px
    border 1px solid $light
    color $light
    text-align center
    font-size 10.5pt
    cursor pointer
    &:hover
      color $dark
      background $light
  .wrap
    height: auto
    position: relative
    .wrap2
      padding-left 250px
</style>
