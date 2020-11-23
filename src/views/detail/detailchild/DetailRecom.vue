<template>
  <div class="detail-recom">
      <div class="info-header">
          <div class="header-title">猜你喜欢</div>
      </div>
      <goods-list :goodslist="goodslist"></goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'
export default {
  props:{
      goodslist:{
          type:Array,
          default(){
              return []
          }
      }
  },
  components:{
      GoodsList
  }
}
</script>

<style scoped>
  .detail-recom{
      padding: 0 10px;
      margin-top: 5px;
  }
</style>