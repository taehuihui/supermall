<template>
<!-- v-if="Object.keys(goods).length !== 0"是为了判断goods里面有无值，
    如果没有的话，下面的东西就都无需渲染啦 -->
  <div v-if="Object.keys(goods).length !== 0" class="detailinfo">
    <div class="title">{{goods.title}}</div>
    <div class="info-price">
        <span class="newprice">{{goods.newPrice}}</span>
        <span class="oldprice">{{goods.oldPrice}}</span>
        <span v-if="goods.discount" 
                class="discount"
                :style="{backgroundColor:goods.discountBgColor}">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
        <!-- v-for="index in 数字"，index就是从1到数字 -->
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods:{
        type:Object,
        default(){
            return {}
        }
    }
  },
  data(){
      return{

      }
  }
}
</script>

<style>
  .detailinfo{
      padding: 0 10px;
      border-bottom: 5px solid #f2f5f8;
      margin-top: 15px;
      color: #999;
  }
  .title{
      margin: 4px 0;
      color: #222
  }
  .info-price{
      margin: 10px 0;
  }
  .newprice{
      font-size: 24px;
      color: var(--color-high-text);
  }
  .oldprice{
      font-size: 13px;
      text-decoration: line-through;
      margin: 0 4px 0 6px;
  }
  .discount{
      color: #fff;
      background-color: var(--color-high-text);
      border-radius: 5px;
      font-size: 12px;
      padding: 2px 5px;
      /* 根据文字内容撑大的，可以通过内边距进行调整留空 */

      /* 让其往上移动一点，使用相对定位即可 */
      position: relative;
      top: -10px;
  }
  .info-other{
      display: flex;
      justify-content: space-between;
      color: silver;
      font-size: 13px;
      margin: 8px 0;
  }
  .info-service{
      border-top:4px solid rgba(219, 219, 219, 0.308);
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 20px 0;
  }
  .info-service-item{

  }
  .info-service-item img{
      width: 14px;
      vertical-align: top;
      margin-right: 1px;
  }
</style>