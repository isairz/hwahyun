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
          <li>{{ $t('menu.people1') }}</li>
          <li>{{ $t('menu.people2') }}</li>
          <li>{{ $t('menu.people3') }}</li>
          <li>{{ $t('menu.people4') }}</li>
          <li>{{ $t('menu.people5') }}</li>
        </ul>
      </div>

      <div class='peoples'>
        <div v-for='people in peoples'>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      peoples: [
        {
          'title': 'menu.people2',
          'name': '이봉구(이봉구)',
          'email': 'a@a.com',
          'field': 'ㄱ,ㄴ,ㄷ,ㄹ,ㅁ',
        },
        {
          'title': 'menu.people2',
          'name': '신경식',
          'email': 'a@a.com',
          'field': 'ㄱ,ㄴ,ㄷ,ㄹ,ㅁ',
        },
        {
          'title': 'menu.people2',
          'name': '김태용',
          'email': 'a@a.com',
          'field': 'ㄱ,ㄴ,ㄷ,ㄹ,ㅁ',
        },
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../variables.styl"

.headline
  headline()
  background url('../assets/people_image1.jpg') no-repeat center center

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
      font-size 15pt
      &:hover
        color $light
        background $dark
.peoples
  border-top 2px solid $light
  border-bottom 2px solid $light
.people
  clearfix()
  color $dark
  width 100%
  .photo
    display block
    float left
    padding 20px 0
    img
      width 270px
      height 197px
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
    font-weight bold
    margin-bottom 20px
  .email
    font-size 12pt
  .field
    font-size 12pt
</style>
