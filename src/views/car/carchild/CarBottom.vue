<template>
  <div class="car-bottom">
    <div class="bt-left">
        <div class="bottom-select">
            <car-check class="ck-btn" :isChecked="judgeCheck" @click.native="bottomClick"></car-check>全选
        </div>
        <div class="amounts">合计:￥{{totalPrice}}</div>
    </div>
    <div class="bt-right">
        <div class="compute">去计算({{goodsLength}})</div>
    </div>
  </div>
</template>

<script scoped>
import CarCheck from 'views/car/carchild/CarCheck'

import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            allChecked:false
        }
    },
    components:{
      CarCheck
    },
    computed:{
      ...mapGetters(['carList','carListLength']),
      totalPrice(){
          return this.carList.filter(item=>{
            //   有被选中的商品，会返回到数组中
              return item.checked
          }).reduce((pre,item)=>{//注意reduce有两个参数
            // 选中的商品中，去计算总价格
              return pre + item.price * item.count
          },0)
      },
      goodsLength(){
        return this.carList.filter(item=>{
            //   有被选中的商品，会返回到数组中
              return item.checked
        }).length
      },
      judgeCheck(){
        // 判断商品选框，只要有一个没选中，那么全选框就不选中
        // 如果都选中，那么，全选框也选中
          if(this.carListLength===0) return false
          return !(this.carList.filter(item=>{
              return !item.checked
          }).length)
      }
    },
    methods:{
      bottomClick(){
        // 点击全选框，根据原本的状态，如果原本是全选中，那么现在就要取消掉所有选框的选中状态
        // 而商品一旦全部取消，全选框也会取消选中，如此类推。

          // 这部分还是需要通过mutations更改否则会出错
          if(this.judgeCheck){
            this.$store.commit('allUnChecked')
              
          }else{
            this.$store.commit('allChecked')
          }
      }
    }
}
</script>

<style>
  .car-bottom{
      width: 100%;
      height: 40px;
      background-color: rgba(204, 204, 204, 0.411);
      position: fixed;
      bottom: 49px;
      display: flex;
      justify-content: space-between;
      line-height: 40px;
  }
  .bt-left{
      flex: 1;
      display: flex;
      font-size: 14px;
  }
  .bottom-select{
      display: flex;
      align-items: center;
      margin: 0 10px;
  }
  .ck-btn{
      margin-right: 6px;
  }
  .bottom-select img{
      vertical-align: top;
  }
  .compute{
      flex: 1;
      background-color: orange;
      text-align: center;
      padding: 0 10px;
  }
</style>