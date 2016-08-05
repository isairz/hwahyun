<template>
  <div class='intro'>
    <div class='headline'>
      <div class="cell">
        <h2>{{ $t('menu.intro') }}</h2>
        <h3>{{{ $t('desc.intro1') }}}</h3>
      </div>
    </div>
    <div class='foundation'>
      <div class='darkcell'>
        <div class='wrap'>
          <h1>{{ $t('menu.siteCN') }}</h1>
          <h2>{{{ $t('desc.intro2') }}}</h2>
          <div class="cell">
            <p>{{ $t('desc.intro3') }}</p>
            <p>{{ $t('desc.intro4') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class='vision'>
      <div class='wrap'>
        <div class='title3'>{{ $t('menu.vision') }}</div>
        <ul>
          <li>
            <img src='../assets/intro_icon1.svg'>
            <p>{{{ $t('desc.vision1') }}}</p>
          </li>
          <li>
            <img src='../assets/intro_icon2.svg'>
            <p>{{{ $t('desc.vision2') }}}</p>
          </li>
          <li>
            <img src='../assets/intro_icon3.svg'>
            <p>{{{ $t('desc.vision3') }}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class='strength'>
      <div class='wrap'>
        <div class='title4'>{{ $t('menu.strength') }}</div>
        <ul>
          <li>
            <img src='../assets/intro_icon4.svg'>
            <div>
              <h3>{{{ $t('desc.strength1') }}}</h3>
              <p>→ {{{ $t('desc.strength1_1') }}}</p>
            </div>
          </li>
          <li>
            <img src='../assets/intro_icon5.svg'>
            <div>
              <h3>{{{ $t('desc.strength2') }}}</h3>
              <p>→ {{{ $t('desc.strength2_1') }}}</p>
            </div>
          </li>
          <li>
            <img src='../assets/intro_icon6.svg'>
            <div>
              <h3>{{{ $t('desc.strength3') }}}</h3>
              <p>→ {{{ $t('desc.strength3_1') }}}</p>
            </div>
          </li>
          <li>
            <img src='../assets/intro_icon7.svg'>
            <div>
              <h3>{{{ $t('desc.strength4') }}}</h3>
              <p>→ {{{ $t('desc.strength4_1') }}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class='map'>
      <div class='wrap'>
        <img src='../assets/intro_map_x2.png'>
        <div class='detail'>
          <h2>{{ $t('menu.site') }}</h2>
          <h3>&nbsp;</h3>
          <h3>{{{ $t('desc.address') }}}</h3>
          <h3>&nbsp;</h3>
          <h3><strong>TEL. </strong>{{{ $t('desc.tel') }}}</h3>
          <h3><strong>FAX. </strong>{{{ $t('desc.fax') }}}</h3>
          <h3><strong>E-MAIL. </strong>{{{ $t('desc.email') }}}</h3>
        </div>
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
.title3
  font-size 22.5pt
  color $light
  width 356px
  height 56px
  line-height 56px
  margin 59px auto 47px
  text-align center
  background $dark
  border-radius 36px

.title4
  @extend .title3
  color $dark
  background $light
  border-radius 36px

.headline
  headline()
  background url('../assets/intro_image1.jpg') no-repeat center center
  background-size cover

.foundation
  clearfix()
  background url('../assets/intro_image2.jpg') no-repeat center center
  background-size cover
  color $light
  border-top 1px solid $light
  .darkcell
    background rgba(0, 0, 0, 0.7)
  .wrap
    max-width $container
    padding 136px 0
    margin auto
  .cell
    clearfix()
  h1
    font-size 36pt
    font-weight $bold
    text-align center
  h2
    font-size 18pt
    font-weight $normal
    text-align center
    margin-bottom 40px
  p
    font-size 12pt
    font-weight $normal
    color $white
    width 50%
    float left
    padding 0 20px

.vision
  clearfix()
  background $light
  .wrap
    max-width $container
    margin auto
    padding-bottom 134px
  ul
    clearfix()
    list-style-type none
    margin auto
    padding-top 60px
    li
      width 33.3333333333%
      float left
      img
        width 100%
        height auto
        display block
      &:last-child
        p
          border-right 1px solid $dark
    p
      color: $dark
      text-align center
      border-left 1px solid $dark
      margin-top 52px
      font-size 15pt
      font-weight $bold

.strength
  clearfix()
  background url('../assets/intro_image3.jpg') no-repeat center center
  background-size cover
  .wrap
    clearfix()
    max-width $container
    padding 0 0 60px
    margin auto
  ul
    clearfix()
    list-style-type none
    margin auto
    li
      width 49.5%
      height 197px
      float left
      border 1px solid $light
      margin 0.25%
      background $white
      img
        width 191px
        height 197px
        display block
        background $light
        float: left
      div
        flexCenter()
        color: $dark
        text-align left
        padding-left 30px
        height 100%
        h3
          padding-bottom 5px

.map
  clearfix()
  background $dark
  .wrap
    clearfix()
    max-width $container
    margin auto
  img
    width 55%
    height auto
    float left
  .detail
    color $light
    width 45%
    float right
    padding 40px
    padding-top 150px
    h2
      font-size 24pt
      font-weight $bold
    h3
      font-size 18pt
      font-weight $normal
</style>
