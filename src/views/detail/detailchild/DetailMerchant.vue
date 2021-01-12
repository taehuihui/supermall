<template>
  <div class="merchant">
      <div class="design">
          <img :src="'http:'+shop.logo" alt="">
          <span>{{shop.name}}</span>
      </div>
      <div class="description">
          <div class="sales">
            <span>{{shop.sells}}</span>
            <span>总销量</span>
          </div>
          <div class="amount">
            <span>{{shop.goodsCount}}</span>
            <span>全部宝贝</span>
          </div>
          <div class="score">
              <div class="item" v-for="(item,index) in shop.score" :key="index">
                <span>{{item.name}}</span>
                <span class="item-score">{{item.score}}</span>
                <span v-if="item.isBetter" class="high">高</span>
                <span v-else class="low">低</span>
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    shop:{
      type:Object,
      default(){
          return {}
      }
    }
  }
}
</script>

<style>
  .merchant{
      padding: 6px 10px;
  }
  .design{
      height: 45px;
      line-height: 45px;
      margin: 12px 0;
  }
  .design img{
      width: 44px;
      border-radius: 50%;
      margin-right: 20px;
      vertical-align: top;
  }
  .description,.sales,.amount,.score{
    display: flex;  
  }
  .description{
    justify-content: space-around;
    padding: 6px 0;
  }
  .sales,.amount{
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }
  .amount{
      padding-right: 16px;
      border-right: 2px solid #ccc;
  }
  .score{
    flex-direction: column;
    justify-content: space-around;
  }
  .score .item{
      margin: 4px 0;
      display: flex;
      justify-content: space-between;
  }
  .item-score{
      margin: 0 16px;
      text-align: left;
  }
  .high{
      background-color: red;
      color: #fff;
  }
  .low{
      background-color: green;
      color: #fff;
  }
</style>