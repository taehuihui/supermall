<template>
  <div class="wrapperC">
    <nav-bar class="cate-bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <category-list></category-list>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import NavBar from 'components/common/navbar/NavBar'
import CategoryList from 'views/category/CategoryList.vue'


export default {
  data(){
    return{
      scroll:null
    }
  },
  components:{
    NavBar,
    CategoryList
  }
}
</script>

<style scoped>
  .cate-bar{
    background-color: var(--color-tint);
  }
</style>