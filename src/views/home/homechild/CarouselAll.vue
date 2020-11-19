<template>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="carouLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
// import Carousel from 'components/common/carousel/Carousel'
// import CarouselItem from 'components/common/carousel/CarouselItem'

import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  data(){
    return{
      isLoad:false
    }
  },
  components:{
    Swiper,
    SwiperItem,
  },
  props:{
      banner:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
    carouLoad(){
      // 为了不让其多次调用 声明了的变量
      if(!this.isLoad){
        this.$emit('carouLoad')
        this.isLoad=true
      }
    }
  }
}
</script>

<style>
</style>