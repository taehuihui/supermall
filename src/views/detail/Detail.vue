<template>
  <div class="detail">
    <!-- <nav-bar>
          <div slot="left">&lt;</div>
          <div slot="center" class="center">
              <a href="" class="active">商品</a>
              <a href="">参数</a>
              <a href="">评论</a>
              <a href="">推荐</a>
          </div>
    </nav-bar> -->
    <detail-nav @detailnav="detailNavC" ref="detailnav"></detail-nav>
    <scroll ref="scroll" :probeType="3" @scroll="scrollD">
      <detail-swiper :topImages="topImages" class="detailswiper"></detail-swiper>
      <detail-info :goods="goods"></detail-info>
      <detail-merchant :shop="shop"></detail-merchant>
      <detail-goods-info :detailInfo="detailInfo"
                          @imgLoadFini="imgLoadFini"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="params"></detail-param-info>
      <detail-comment :commentInfo="commentInfo" ref="comment"></detail-comment>
      <detail-recom :goodslist="recommendInfo" ref="recommend"></detail-recom>
    </scroll>
    <!-- 组件如果要触发原生事件，需要加上.native -->
    <back-top  @click.native="backClick" v-show="isShow"></back-top>
    <detail-bottom @addcar="addCar"></detail-bottom>
    <toast :message="message" v-if="isToast"></toast>
  </div>
</template>

<script>
// import NavBar from 'components/common/navbar/NavBar'
import DetailSwiper from 'views/detail/detailchild/DetailSwiper'
import DetailInfo from 'views/detail/detailchild/DetailInfo'
import DetailMerchant from 'views/detail/detailchild/DetailMerchant'
import DetailGoodsInfo from 'views/detail/detailchild/DetailGoodsInfo'
import DetailParamInfo from 'views/detail/detailchild/DetailParamInfo'
import DetailComment from 'views/detail/detailchild/DetailComment'
import DetailNav from 'views/detail/detailchild/DetailNav'
import DetailBottom from 'views/detail/detailchild/DetailBottom'
import DetailRecom from 'views/detail/detailchild/DetailRecom'

import Scroll from 'components/common/scroll/Scroll'
import Toast from 'components/common/toast/Toast'

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail.js'

import {debounce} from 'common/utils'
import {goodsListItemMixin,backTopMixin} from 'common/mixin.js'


export default {
  name:"Detail",
  data(){
    return{
      goodsId:null,//用于记录商品id值
      topImages:[],//轮播图图片
      goods:{},//商品基本信息
      shop:{},//商家信息
      detailInfo: {},//商品详情数据
      paramInfo: {},//参数信息
      commentInfo:{},//评论信息
      recommendInfo:[],//推荐信息
      navY:[],//nav跳转位置
      getNavY:null,
      positionY:0,
      currentIndex:0,
      message:null,
      isToast:false
    }
  },
  mixins:[goodsListItemMixin,backTopMixin],
  components:{
    DetailNav,
    DetailSwiper,
    DetailInfo,
    Scroll,
    Toast,
    DetailMerchant,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    DetailRecom,
    DetailBottom
  },
  created(){
    // console.log(this.$route)
    this.goodsId=this.$route.params.iid
    // console.log(this.goodsId)
    getDetail(this.goodsId).then(res=>{
        // console.log(res.result)
        const data=res.result
        //1.获取轮播图信息
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 6.取出评论信息
        if(data.rate.cRate!=0){
          this.commentInfo=data.rate.list[0]
          // console.log(this.commentInfo)
        }

        this.getNavY=debounce(()=>{
          this.navY=[]
          this.navY.push(0)
          this.navY.push(this.$refs.params.$el.offsetTop-44)
          this.navY.push(this.$refs.comment.$el.offsetTop-44)
          this.navY.push(this.$refs.recommend.$el.offsetTop-44)
          this.navY.push(Number.MAX_VALUE)
          console.log(this.navY)
        })
        
    }),
    getRecommend().then(res=>{
      // console.log(res)
      // 获取推荐信息
      this.recommendInfo=res.data.list
      // console.log(this.recommendInfo)
    })
  },
  destroyed(){
    // console.log('des')
    this.$bus.$off('imgLoad',this.itemImgListener)
  },
  methods:{
    imgLoadFini(){
      this.$refs.scroll.refresh()
      this.getNavY()
    },
    detailNavC(index){
      console.log(index)
      console.log(this.navY)
      this.currentIndex=index
      console.log(this.currentIndex)
      this.$refs.scroll.scrollTo(0,-this.navY[index])
    },
    scrollD(position){
      this.isShow=(position.y<-1000)?true:false
      console.log(position)
      
      this.positionY=-position.y
      console.log(this.positionY)
      // [0, 2826, 4269, 4578, __ob__: Observer]
      // 加多一个值，方便循环比较
      //  [0, 2826, 4269, 4578, 1.7976931348623157e+308, __ob__: Observer]
      for(let i=0;i<this.navY.length-1;i++){
        // 如果只是这样的话需要频繁判断、赋值
        // if((this.positionY>this.navY[i]) && (this.positionY<this.navY[i+1])){
        //   this.currentIndex=i
        // }
        // 那么再加上一个判断条件,若this.currentIndex==i，则无需判断了
        // 因为若相等，第二个条件成立，赋值，仍然为原来的值，是没必要的操作，还会使得赋值操作增多，影响性能
        if((this.currentIndex!==i) && (this.positionY>=this.navY[i]) && (this.positionY<this.navY[i+1])){
          console.log(i)
          this.currentIndex=i
          console.log(this.currentIndex)
        }
      }
      this.$refs.detailnav.currentIndex=this.currentIndex
    },
    addCar(){
      // 获取展示信息
      let product={}
      product.id=this.goodsId
      product.img=this.topImages[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.realPrice
      // product.count=0

      // 存储到store中
      // 而修改state必须通过mutations
      // this.$store.commit('addToCar',product)
      this.$store.dispatch('addToCar',product).then(res=>{
        this.message=res
        this.isToast=true
      })
      // 通过回调函数，保证已经成功将商品信息保存到store仓库中

      setTimeout(() => {
        this.message=''
        this.isToast=false
      }, 1500);
      
    }
  }
}
</script>

<style scoped>
  .detail{
    /* 这个的作用在于定下视口高度 */
    height: 100vh;
  }
  .wrapper{
    /* 第一种方案 */
    /* 100%相对detail，也就是100vh,然后去掉顶部44px */
    height: calc(100% - 44px - 49px);
    overflow: hidden;
    /* 第二种方案 */
    /* position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 0; */
    /* 两种都可以 */
  }
  .content{
    /* background-color: yellow; */
  }
  .detailswiper{
    height: 300px;
    overflow: hidden;
    /* 注意，这里由于是在swiper进行截取，所以指示器圆点不会被截取，因为指示器是根据swiper进行定位滴 */
  }
</style>