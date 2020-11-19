<template>
  <div class="home">
    <nav-bar class="nav">
      <div slot="center">首页-购物街</div>
    </nav-bar>
    <tab-control :tabcon="['流行','新款','精选']" 
                   @tabClick="tabClick"
                   ref="tabcontrol1"
                   class="tabcontrol1"
                   v-show="isTabFixed">
    </tab-control>
    
    <!-- ❓ 刷新后总是不法滚动，除非切换到别的组件回来才可以，为啥子？ -->
    <!-- 子传父需要驼峰命名法 :pull-up-load="true" -->
    <scroll class="scrolls" ref="scroll" 
            :probeType="3"
            @scroll="getRTdata"
            :pull-up-load="true"
            @pullingUp="pullMore">
      <!-- <carousel-all :banner="banner" 
                    @carouLoad="carouLoad"></carousel-all> -->
      <home-swiper :banner="banner" @carouLoad="carouLoad"/>
      <recommend :recommend="recommend"></recommend>
      <feature></feature>
      <!-- ❓为什么tabbar不用v-bind可以传path,而这里不行呢,一样都是固定值呀 -->
      <!-- 没有v-bind，默认所有传的都是字符串，加上v-bind就会根据props类型，传相应类型的值 -->
      <!-- 不加v-bind也能传值吗❓ -->
      <tab-control :tabcon="['流行','新款','精选']" 
                   @tabClick="tabClick"
                   ref="tabcontrol"></tab-control>
      <goods-list :goodslist="showGoods"></goods-list>
    </scroll>
    
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

// import CarouselAll from 'views/home/homechild/CarouselAll'
import HomeSwiper from './homechild/HomeSwiper'
import Recommend from 'views/home/homechild/Recommend'
import Feature from 'views/home/homechild/Feature'

import {getHomeData,getHomeGoods} from 'network/home'
// import {debounce} from 'common/utils'

import {goodsListItemMixin,backTopMixin} from 'common/mixin.js'

export default {
  components:{
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    HomeSwiper,
    Recommend,
    Feature
    // BackTop
  },
  data(){
    return{
      banner:[],
      recommend:[],
      goods:{//tabcontrol栏的商品信息,三类,以属性划分,每30个商品为一页(page)
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',//记录当前哪个tab栏
      // isShow:false,
      taboffsetTop:0,
      isTabFixed:false
    }
  },
  mixins:[goodsListItemMixin,backTopMixin],
  computed:{
    // 💥这里在打开网页之后就要显示了，所以直接通过计算属性返回即可
    // 如果涉及生命周期或者，放在变量中会有一些复杂的问题
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  // activated() {
  //     // 进来时定位
  //     this.$refs.scroll.scrollTo(0, this.saveY, 0)
  //     this.$refs.scroll.refresh()
  //   },
    deactivated() {
      // 1.退出首页时记录
      // this.saveY = this.$refs.scroll.getScrollY()

      // 2.取消全局监听事件
      // (取消监听的事件，事件的函数)
      // console.log('deactived')
      this.$bus.$off('imgLoad',this.itemImgListener)
    },
  created(){//生命周期函数,在组件创建完成时回调这个函数
  // getHomeData()得到一个promise❓如何理解,promise之类的问题
    getHomeData().then(res=>{
      console.log(res)
      this.banner=res.data.banner.list
      this.recommend=res.data.recommend.list
    }),
    // 调用方法,获取商品信息
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
    
    // 在这里的话有可能拿不到this.$refs.scroll，因为此时还没有挂载dom元素
    // this.$bus.$on('homeimgLoad',()=>{
    //   this.$refs.scroll && this.$refs.scroll.refresh()
    // })
  },
  // 对应使用混入mixin
  // mounted(){
  //   // 每张图片加载完都刷新一次过于频繁
  //   // this.$bus.$on('homeimgLoad',()=>{
  //   //   this.$refs.scroll && this.$refs.scroll.refresh()
  //   // })
  
  //   const refresh=debounce(this.$refs.scroll.refresh,500)
  //   this.$bus.$on('homeimgLoad',()=>{
  //     // console.log('--home--homeimgLoad--')
  //     // console.log('refresh')
  //     // 图片加载完成，以及触发监听次数仍然不变
  //     // refresh就只调用一次了
  //     refresh()
  //   })
  // },
  // updated(){
  //   this.$refs.scroll.refresh()
  // },
  
  methods:{
    /**
     * 关于事件监听
     */
    // 接收子组件发送过来的数据
    carouLoad(){
      // this.$refs.scroll.refresh()
      // console.log(this.$refs.tabcontrol.$el.offsetTop)
      this.taboffsetTop=this.$refs.tabcontrol.$el.offsetTop
      
    },
    tabClick(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }

      // 为了让两个tabcontrol一致，tabcontrol无论哪一个点击，都会传过来index
      // 那么就让两个都处于这个状态栏即可
      this.$refs.tabcontrol.activeIndex=index
      this.$refs.tabcontrol1.activeIndex=index
    },
    // backClick(){//返回顶部按钮
    //   //this.$refs.scroll，拿到组件Scroll
    //   //this.$refs.scroll.scroll，拿到其中的scroll数据对象
    //   // scrollTo方法设置滚动位置
    //   // 500是毫秒
    //   // this.$refs.scroll.scroll.scrollTo(0,0,500)//进一步封装，方便使用和维护
    //   this.$refs.scroll.scrollTo(0,0,500)
    // },
    getRTdata(position){
        //得到实时位置数据
        // console.log(position)
        this.isShow=(position.y<-1000)?true:false

        // 
        this.isTabFixed=(-position.y)>this.taboffsetTop
        // console.log(this.isTabFixed)
    },
    pullMore(){
      // console.log(this.currentType)
      this.getGoods(this.currentType)
      // console.log(this.goods)
    },
    /**
     * 关于网络请求数据
     */
    // 获取商品信息进行封装
    getGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // console.log(res)
        // ...res.data.list,...是能够自动将数组解构,便能够加入到另一个数组
        this.goods[type].list.push(...res.data.list)
        // 请求一次,页数加
        this.goods[type].page+=1

        // 上面请求完成后，完成上拉加载更多，才能进行下一次加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
    // 似乎是闭包知识❓
    // debounce(fn,delay){
    //   let timId=null
    //   return function(...args){
    //     if(timId){
    //       clearTimeout(timId)
    //     }
    //     timId=setTimeout(()=>{
    //       fn.apply(this,args)//这里不理解干嘛的❓
    //     },delay)
    //   }
    // },//封装至utils.js
  }
}
</script>

<style scoped>
  .home{
    /* 100vh表示百分之八视口高度 */
    height:100vh;
    position: relative;
  }
  .nav{
    background-color: pink;
  }
  .scrolls{
    /* 介于顶部和底部bar之间，通过定位 */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    overflow: hidden;
  }
  /* .scroll{
    height: calc(100% -93px);//这个划不动？？
    overflow: hidden;
    margin-top: 44px;
  } */
  .tabcontrol1{
    position: relative;
    /* left: 0;
    right: 0;
    top: 44px; */
    top: -1px;
    z-index: 999;
  }
  /* .active{
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  } 这个行不通，❓为什么呢，无法通过fixed固定定位，是因为在scroll内部吗*/
</style>