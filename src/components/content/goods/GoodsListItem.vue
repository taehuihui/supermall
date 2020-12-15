<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="imgurl" alt="" @load="ImgLoad">

      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
      return{
        idurl:null
      }
    },
    props:{
        goodsItem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods:{
      ImgLoad(){
        // 解决方法2.取消全局监听事件，由于代码重复，使用混入mixin
        this.$bus.$emit('imgLoad')
        
      },
      itemClick(){
        if(this.goodsItem.iid){
          this.$router.push('/detail/'+this.goodsItem.iid)//需要配置前端路由
        // 这里还需要根据不同商品传具体iid值，才能在detail中知道具体展示哪个商品
        }else if(this.goodsItem.shop_id){
          this.$router.push('/recommend/'+this.goodsItem.shop_id)
        }

        
      }
    },
    computed:{
      imgurl(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    }
}
</script>

<style>
  .goods-item{
      width: 48%;
      position: relative;
      padding-bottom: 40px;
      position: relative;
  }
  .goods-item img{
      width: 100%;
      border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 3px;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
      color: tomato;
      margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before{
      content: '';
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
  }
</style>