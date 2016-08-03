<template>
  <div class='home'>
    <div class='overview'>
      <div class="cell">
        <h2>{{{ $t('desc.overview1') }}}</h2>
        <h1>{{ $t('menu.siteFull') }}</h1>
        <h3>{{{ $t('desc.overview2') }}}</h3>
      </div>
    </div>
    <div class='business-field'>
      <div class='title'>{{ $t('menu.field') }}</div>
      <ul>
        <li v-for="n in 10">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 width="220px" height="244px" viewBox="0 0 220 244" enable-background="new 0 0 220 244" xml:space="preserve">
            <g>
            	<path d="M132.891,94.832v7.947c0,0.623-0.504,1.124-1.123,1.124c-0.627,0-1.123-0.5-1.123-1.124v-7.947
            		c-2.425,0.517-4.239,2.669-4.239,5.241c0,2.962,2.4,5.363,5.362,5.363c2.958,0,5.359-2.401,5.359-5.363
            		C137.127,97.501,135.315,95.349,132.891,94.832 M143.072,129.445c0,3.527-2.873,6.396-6.396,6.396H82.721
            		c-3.53,0-6.401-2.869-6.401-6.396V92.813c0-3.532,2.871-6.404,6.401-6.404h53.955c3.523,0,6.396,2.873,6.396,6.404V129.445z
            		 M137.818,142.385H81.575l-0.545-2.942c0.549,0.094,1.111,0.15,1.691,0.15h53.955c0.577,0,1.135-0.057,1.688-0.15L137.818,142.385z
            		 M136.676,82.657h-9.872l11.341-16.423c0.469-0.676,0.297-1.611-0.386-2.083c-0.684-0.472-1.612-0.297-2.084,0.383L124.09,81.314
            		l-11.589-16.781c-0.466-0.68-1.404-0.854-2.084-0.383c-0.684,0.472-0.854,1.408-0.382,2.083l11.336,16.423h-38.65
            		c-5.6,0-10.151,4.553-10.151,10.156v36.632c0,3.43,1.717,6.466,4.33,8.301l1.558,8.391h62.479l1.554-8.391
            		c2.616-1.835,4.334-4.871,4.334-8.301V92.813C146.824,87.21,142.267,82.657,136.676,82.657 M130.71,124.871
            		c-0.22,0.22-0.508,0.33-0.797,0.33c-0.286,0-0.578-0.11-0.794-0.33c-0.443-0.436-0.443-1.148,0-1.591l5.559-5.563
            		c-2.075-1.343-4.88-1.107-6.702,0.712c-2.096,2.095-2.092,5.493,0,7.584c2.091,2.097,5.488,2.097,7.581,0
            		c1.819-1.822,2.055-4.626,0.712-6.705L130.71,124.871z M119.324,93.802H85.778c-0.966,0-1.758,0.79-1.758,1.758v31.133
            		c0,0.969,0.792,1.758,1.758,1.758h33.546c0.973,0,1.758-0.789,1.758-1.758V95.56C121.082,94.592,120.297,93.802,119.324,93.802"/>
            </g>
          </svg>
          <p>{{ $t('menu.field1') }}</p>
        </li>
      </ul>
    </div>
    <div class='our-people-link'>
      <div class="cell">
        <h2>{{ $t('menu.people') }}</h2>
        <h3>{{ $t('menu.link') }}</h3>
      </div>
    </div>
    <div class='recently'>
      <div class='title-dark'>{{ $t('menu.recently') }}</div>
      <ul>
        <li v-for="n in 4">
          <div class='black'>
          </div>
        </li>
      </ul>
    </div>
    <div class='building'></div>
    <a target='_blank' href="http://map.naver.com/?menu=location&mapMode=0&lat=37.5002951&lng=127.0117457&dlevel=12&type=SITE_1&tab=1&__fromRestorer=true&query=67KV66y067KV7J24IO2ZlO2YhA%3D%3D&searchCoord=&mpx=37.5876733%2C126.9447369%3AZ11%3A0.0287341%2C0.0135111&enc=b64">
      <div class='map'></div>
    </a>
    <div class='detail'>
      <div class='cell1'>
        <h2>{{ $t('menu.site') }}</h2>
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
export default {
}
</script>

<style lang="stylus" scoped>
@import "../variables.styl"

.title
  font-size 22.5pt
  border 1px solid $dark
  border-radius 28px
  color $dark
  width 300px
  height 56px
  line-height 56px
  margin 59px auto 47px
  text-align center

.title-dark
  @extend .title
  color $light
  border-color $light

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
    padding-right 12px
    h1
      font-weight bold
      font-size 27pt
      padding-bottom 20px
    h2
      font-weight normal
      font-size 27pt
    h3
      font-weight normal
      font-size 15pt

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
      font-weight bold
      font-size 21pt
    h3
      font-weight 300
      font-size 21pt
      margin-top -10px

.recently
  clearfix()
  background $dark


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
  h2
    font-weight bold
    font-size 21pt
  h3
    font-weight normal
    font-size 21pt
  .cell1
    width 50%
    float left
    text-align right
    border-right 1px solid $light
    padding-left 30px
    padding-right 30px
    margin-top 111px
    margin-bottom 156px
  .cell2
    @extend .detail .cell1
    text-align left
</style>
