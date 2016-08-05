<template>
  <div class='home'>
    <div class='overview'>
      <div class="cell">
        <h2>{{{ $t('desc.overview1') }}}</h2>
        <h1>{{ $t('menu.siteFull') }}</h1>
        <h3>{{{ $t('desc.overview2') }}}</h3>
      </div>
    </div>
    <field-list></field-list>
    <div class='our-people-link'>
      <a v-link="'/people'">
        <div class="cell">
          <h2>{{ $t('menu.people') }}</h2>
          <h3>{{ $t('menu.link') }}</h3>
        </div>
      </a>
    </div>
    <div class='recently'>
      <div class='title1'>{{ $t('menu.recently') }}</div>
      <ul>
        <li v-for="n in 4">
          <div class='black'>
          </div>
        </li>
      </ul>
    </div>
    <div class='building'></div>
    <div class='news'>
      <div class='title2'>{{ $t('menu.news') }}</div>
      <ul>
        <li v-for="n in 4">
          <div class='black'>
          </div>
        </li>
      </ul>
    </div>
    <a target='_blank' href="http://map.naver.com/?menu=location&mapMode=0&lat=37.5002951&lng=127.0117457&dlevel=12&type=SITE_1&tab=1&__fromRestorer=true&query=67KV66y067KV7J24IO2ZlO2YhA%3D%3D&searchCoord=&mpx=37.5876733%2C126.9447369%3AZ11%3A0.0287341%2C0.0135111&enc=b64">
      <div class='map'></div>
    </a>
    <div class='detail'>
      <div class='cell1'>
        <img class='logo' src='../assets/logo_light.svg'>
        <h3>{{{ $t('desc.address') }}}</h3>
      </div>
      <div class='cell2'>
        <h3><strong>TEL. </strong>{{{ $t('desc.tel') }}}</h3>
        <h3><strong>FAX. </strong>{{{ $t('desc.fax') }}}</h3>
        <h3>&nbsp;</h3>
        <h3><strong>E-MAIL. </strong>{{{ $t('desc.email') }}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import FieldList from './FieldList.vue'
export default {
  components: { FieldList },
}
</script>

<style lang="stylus" scoped>
@import "../variables.styl"

.title1
  font-size 22.5pt
  color $light
  border 1px solid $light
  border-radius 36px
  width 356px
  height 56px
  line-height 56px
  margin 59px auto 47px
  text-align center
  /*background url('../assets/title_frame_1.svg')*/

.title2
  font-size 22.5pt
  color $dark
  border 1px solid $dark
  border-radius 36px
  width 356px
  height 56px
  line-height 56px
  margin 59px auto 47px
  text-align center
  /*background url('../assets/title_frame_2.svg')*/

.overview
  clearfix()
  color $light
  background url('../assets/1_mainimage.jpg') no-repeat center center
  background-size cover
  height 727px
  .cell
    flexCenter()
    width 44%
    height 100%
    background rgba(0, 0, 0, 0.7)
    text-align right
    padding-right 30px
    h1
      font-weight $bold
      font-size 24pt
      padding-bottom 20px
    h2
      font-weight $normal
      font-size 24pt
    h3
      font-weight $normal
      font-size 13.5pt

.business-field
  clearfix()
  background $light
  .title
    margin-top 40px
    margin-bottom 16px
  ul
    clearfix()
    list-style-type none
    max-width $container
    margin 0 auto
    padding 0 0 24px 0
  li
    width 20%
    float left
    text-align center
    color $dark
    position relative
    background-color $light
    &:hover
      color $light
      background-color $dark
      svg
        fill $light
    svg
      width 100%
      height auto
      fill $dark
      display block
    p
      font-size 12pt
      position absolute
      bottom 45px
      width 100%

.our-people-link
  clearfix()
  flexCenter()
  color $dark
  background url('../assets/1_mainimage2.jpg') no-repeat center center
  background-size cover
  height 624px
  .cell
    flexCenter()
    margin auto
    width 234px
    height 234px
    border-radius 50%
    background rgba(255, 255, 255, 0.7)
    text-align center
    &:hover
      background rgba(255, 255, 255, 1)
    h2
      font-weight $bold
      font-size 21pt
      margin-top 10px
    h3
      font-weight 300
      font-size 21pt
      margin-top -10px

.recently
  clearfix()
  background $dark

.news
  clearfix()
  background $light

.building
  clearfix()
  height: 624px
  background url('../assets/1_mainimage3.jpg') no-repeat center center fixed
  background-size cover

.map
  clearfix()
  height: 624px
  background url('../assets/main_map.jpg') no-repeat center center
  background-size cover

.detail
  clearfix()
  background-color $dark
  color $light
  .logo
    width 200px
    height 45px
    margin-bottom 30px
  h2
    font-weight $bold
    font-size 21pt
  h3
    font-weight $normal
    font-size 21pt
  .cell1
    width 50%
    float left
    text-align right
    border-right 1px solid $light
    padding-left 30px
    padding-right 30px
    margin-top 130px
    margin-bottom 130px
  .cell2
    @extend .detail .cell1
    text-align left
</style>
