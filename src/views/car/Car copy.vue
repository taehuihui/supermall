<template>
  <swiper ref="mySwiper" :options="swiperOption" v-if="banner.length>1">
    <swiper-slide v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
   </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'//💢新版写法！！！
import {getHomeData} from 'network/home'
export default {
 name: 'carrousel',
 data() {
    return {
   banner:[],
 swiperOption: {      // swiper4的写法哟！
        autoplay: {       // 自动轮播
          delay: 3000,
          disableOnInteraction: false
        },
        // slidesPerView: 5,   // 一次轮播放几张图
        // spaceBetween: 30,   // 每一张图间隔的距离
        loop: true       // 无限轮播
      }
 }
 },
  components: {
    Swiper,
    SwiperSlide
  },
 // you can find current swiper instance object like this, while the notNextTick property value must be true
 // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
 computed: {
  swiper() {
    return this.$refs.mySwiper.swiper
  }
 },
 created(){//生命周期函数,在组件创建完成时回调这个函数
  // getHomeData()得到一个promise❓如何理解,promise之类的问题
    getHomeData().then(res=>{
      console.log(res)
      this.banner=res.data.banner.list
    })
  },
 mounted() {
 // you can use current swiper instance object to do something(swiper methods)
 // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
 // console.log('this is current swiper instance object', this.swiper)
 // this.swiper.slideTo(3, 1000, false)
 }
}
</script>

<style scoped>
 img{
   width: 100%;
 }
</style>