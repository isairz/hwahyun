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
          <a v-for="id in 10" v-link='`/field/${id+1}`'><li>{{ $t(`menu.field${id+1}`) }}</li></a>
        </ul>
      </div>
      <div class='title'>
        <img src="{{ $t(`/static/assets/field_icon${$route.params.id}.svg`) }}">
        <span>{{ $t(`menu.field${$route.params.id}`) }}</span>
      </div>
      <div class='content'>
        <span>{{ $t(`menu.field${$route.params.id}`) }} 설명</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
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
      font-size 12pt
      &:hover
        color $light
        background $dark

.title
  clearfix()
  border-bottom 1px solid $dark
  img
    width 97px
    height 97px
    display block
    float left
  span
    height 97px
    line-height 97px
    font-size 24pt
    display block
    float left

.content
  padding 42px 20px 400px
</style>
