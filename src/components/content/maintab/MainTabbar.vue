<template>
  <div class="maintabbar">
      <tab-bar>
        <tab-bar-item path="/home" activeColor="salmon">
            <img slot="tab-img" src="~assets/images/tabbars/home.png" alt="">
            <img slot="tab-img-active" src="~assets/images/tabbars/home1.png" alt="">
            <div slot="tab-text">首页</div>
        </tab-bar-item>
        
        <tab-bar-item path="/category" activeColor="salmon">
            <img slot="tab-img" src="~assets/images/tabbars/classify.png" alt="">
            <img slot="tab-img-active" src="~assets/images/tabbars/classify1.png" alt="">
            <div slot="tab-text">分类</div>
        </tab-bar-item>
        
        <!-- <tab-bar-item path="/car" activeColor="salmon">
            <img slot="tab-img" src="~assets/images/car.png" alt="">
            <img slot="tab-img-active" src="~assets/images/tabbars/car1.png" alt="">
            <div slot="tab-text">购物车</div>
        </tab-bar-item> car为什么不行？？？？-->

        <tab-bar-item path="/car" activeColor="salmon">
            <img slot="tab-img" src="~assets/images/tabbars/shop.png" alt="">
            <img slot="tab-img-active" src="~assets/images/tabbars/shop1.png" alt="">
            <div slot="tab-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="salmon">
            <img slot="tab-img" src="~assets/images/tabbars/my.png" alt="">
            <img slot="tab-img-active" src="~assets/images/tabbars/my1.png" alt="">
            <div slot="tab-text">我的</div>
        </tab-bar-item>
        </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>
    .tabbar{
        display: flex;
        height: 49px;
        background-color: #f6f6f6;
        /* justify-content: space-around; */
        text-align: center;
        /* line-height: 49px; */

        position: fixed;
        /* ❓似乎总是有缝隙 */
        bottom: -1px;
        left: 0;
        right: 0;

        box-shadow: 0 -1px 8px rgba(100, 100, 100, 0.2);
    }
    .tabbaritem{
        flex: 1;
        font-size: 12px;
        margin-top: 3px;
    }
    .tabbaritem img{
        width: 26px;
    }
</style>