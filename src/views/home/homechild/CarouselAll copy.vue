<template>
  <div class="carouall">
      <carousel>
        <carousel-item v-for="(item,index) in banner">
          <img :src="item.image" alt="" @load="carouLoad">
        </carousel-item>

          <!-- 指标圆点 -->
        <div slot="indicator" class="dot" v-for="item in banner"></div>
      </carousel>
  </div>
</template>

<script>
import Carousel from 'components/common/carousel/Carousel'
import CarouselItem from 'components/common/carousel/CarouselItem'


export default {
  data(){
    return{
      isLoad:false
    }
  },
  components:{
      Carousel,
      CarouselItem
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
      // 为了不让其多次调用声明了的变量
      if(!this.isLoad){
        this.$emit('carouLoad')
        this.isLoad=true
      }
    }
  }
}
</script>

<style>
  .carouall{
      position: relative;

      /* margin-top: 44px; */
  }
  .dot{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: seashell;
      margin: 0 3px;
  }
</style>