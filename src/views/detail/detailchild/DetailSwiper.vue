<template>
  <swiper v-if="topImages.length>1" class="detailswiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name: "HomeSwiper",
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
}

</script>

<style>
  
</style>