<template>
  <div class='people-detai'>
    <div class='headline'>
      <div class="cell">
        <h2>{{ $t('menu.people') }}</h2>
        <h3>{{{ $t('desc.people') }}}</h3>
      </div>
    </div>
    <div class='container'>
      <div class='people'>
        <div class='photo'>
          <img src='/'>
        </div>
        <div class='data'>
          <div class='title'>{{ $t(people.title) }}</div>
          <div class='name'>{{ people.name }}</div>
          <div class='email'><span class='caption'>{{ $t('menu.email') }}</span>{{ people.email }}</div>
          <div class='field'><span class='caption'>{{ $t('menu.field') }}</span>{{ people.field }}</div>
        </div>
      </div>
    </div>
    <div class='bottom'>
      <div class='container'>
        <div class='detail'>
          {{ people.detail }}
        </div>
        <div class='back'>{{ $t('menu.list') }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      people: {
        'title': 'menu.people2',
        'name': '이봉구(이봉구)',
        'email': 'a@a.com',
        'field': 'ㄱ,ㄴ,ㄷ,ㄹ,ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ',
        'detail': 'asdfasdfasdfadsf asdf asdf adsf',
      },
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../variables.styl"

.headline
  headline()
  background url('../assets/people_image1.jpg') no-repeat center center

.gray
  background $light

.container
  max-width $container
  margin auto

.people
  clearfix()
  color $dark
  width 100%
  .photo
    width: 50%
    display block
    float right
    img
      width 100%
      /*height: auto*/
      height 624px
      display block
  .data
    float: left
    padding 150px 28px 50px
    width: 50%
  .caption
    color $light
    width 5em
    display inline-block
  .title
    font-size 18pt
    margin-bottom -7px
  .name
    font-size 36pt
    margin-bottom 20px
  .email
    font-size 18pt
  .field
    font-size 18pt
.bottom
  background rgba(190, 172, 138, 0.5)
  padding-bottom 100px
.detail
  padding-top 50px
  padding-bottom 20px
  font-size 12pt
  color $black
.back
  width 142px
  height 41px
  color $light
  background $dark
  border 1px solid $dark
  float right
  font-size 12pt
  text-align center
  line-height 41px
  &:hover
    color $dark
    background $white
</style>
