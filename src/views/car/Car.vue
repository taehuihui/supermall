<template>
  <div class="car">
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车({{length}})
      </div>
    </nav-bar>

    <div class="car-img" v-if="carList.length===0">
      <img src="~assets/images/gouwuc.jpg">
    </div>
    <scroll ref="scroll" v-else>
      <car-list></car-list>
    </scroll>

    
    <car-bottom></car-bottom>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CarList from 'views/car/carchild/CarList'
import CarBottom from 'views/car/carchild/CarBottom'

// 为了更好更方便的使用getters的值，vuex有这么一种方法
// 引入，并且在计算属性结构即可得到getters中的属性方法
import { mapGetters } from 'vuex'

export default {
  components:{
    NavBar,
    Scroll,
    CarList,
    CarBottom
  },
  computed:{
    ...mapGetters({
      length:'carListLength',
      carList:'carList'
    })
  },
  activated(){
    if(this.$refs.scroll){
      this.$refs.scroll.refresh()
    }
    console.log('activated')
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
  }
  .car{
    height: 100vh;
    background-color: #f2f2f2;
  }
  .wrapper{
    /* height: calc(100% - 44px - 49px);
    overflow: hidden;
    background-color: yellow;
    margin-bottom: 49px; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    /* background-color: yellow; */
  }
  /* .content{
    background-color: pink;
  } */
  .car-img img{
    margin-top: 80px;
    width: 100%;
  }
</style>