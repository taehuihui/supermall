<template>
  <div class="goods-list">
      <goods-list-item v-for="(item,index) in goodslist" :goodsItem="item" :key="index">
      </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
    components:{
        GoodsListItem
    },
    props:{
        goodslist:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style>
  .goods-list{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 2px;
  }
</style>