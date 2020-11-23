<template>
  <div class="car-item">
    <!-- <div class="select">
      <input type="checkbox">
    </div> -->
    <div class="select">
      <car-check :isChecked="carItem.checked" @click.native="checkClick(carItem)"></car-check>
    </div>
    <div class="item-content">
    <img :src="carItem.img" alt="">
      <div class="item-right">
        <div class="title">{{carItem.title}}</div>
        <div class="desc">{{carItem.desc}}</div>
        <div class="all">
          <span class="price">￥{{carItem.price}}</span>
          <span>×{{carItem.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarCheck from 'views/car/carchild/CarCheck'
export default {
  data(){
    return{
      //   注意噢，购物车商品的选中与否不能直接在这里决定，而应该通过vuex中属性记录，并且决定的
      // 所以呢在vuex中增添此属性
      // isChecked:false
    }
  },
  props:{
    carItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CarCheck
  },
  methods:{
    checkClick(item){
      this.$store.commit('changeChecked',item)
      // this.carItem.checked=!this.carItem.checked//这种无法跟踪❌
    }
  }
}
</script>

<style scoped>
  .car-item{
    display: flex;
    /* height: 200px; */
    padding: 8px 4px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  .select{
    width: 20px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* 侧轴方向上的对齐方式。 */
  }
  .item-content{
    display: flex;
    justify-content: space-around;
  }
  .item-content img{
    width: 70px;
    border-radius: 10px;
    margin: 0 4px;
  }
  .item-right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 2px;
  }
  .item-right .title,.desc{
    width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-right .desc{
    font-size: 14px;
    margin-bottom: 8px;
  }
  .item-right .all{
    display: flex;
    justify-content: space-between;
  }
  .all .price{
    color: var(--color-high-text);
  }
</style>