<template>
  <div class='field'>
    <div class='headline'>
      <div class="cell">
        <h2>{{ $t('menu.field') }}</h2>
        <h3>{{{ $t('desc.field') }}}</h3>
      </div>
    </div>
    <div class='container'>
      <div class='menu'>
        <ul>
          <li>{{ $t('menu.field1') }}</li>
          <li>{{ $t('menu.field2') }}</li>
          <li>{{ $t('menu.field3') }}</li>
          <li>{{ $t('menu.field4') }}</li>
          <li>{{ $t('menu.field5') }}</li>
          <li>{{ $t('menu.field6') }}</li>
          <li>{{ $t('menu.field7') }}</li>
          <li>{{ $t('menu.field8') }}</li>
          <li>{{ $t('menu.field9') }}</li>
          <li>{{ $t('menu.field10') }}</li>
        </ul>
      </div>
      <div class='title'>
        <img src='../assets/field_icon1.svg'>
        <span>{{ $t('menu.field1') }}</span>
      </div>
      <div class='content'>
        <span>{{{ $t('desc.field1') }}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import "../variables.styl"

.headline
  headline()
  background url('../assets/field_image1.jpg') no-repeat center center

.container
  max-width $container
  margin auto

.menu
  ul
    clearfix()
    max-width $container
    list-style-type none
    margin 56px auto 53px
    li
      width 19.8%
      height 58px
      line-height 58px
      margin 0.1%
      float left
      text-align center
      background $light
      color $dark
      font-size 12pt
      &:hover
        color $light
        background $dark

.title
  img
    width 97px
    height 97px
  span
    height 97px
    line-height 97px
    font-size 24pt

.content
  padding 42px 20px 400px
</style>
