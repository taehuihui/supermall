<template>
  <div id="app">
    <!-- 根据路由映射显示组件视图 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <!-- 3.使用组件 -->
    <!-- v-show="$route.meta.showMainTab"判断当前组件是否显示底部导航，
        需要在路由组件映射时，设置meta参数 -->
    <main-tabbar v-show="$route.meta.showMainTab"></main-tabbar>
  </div>
</template>

<script>
// 1.导入组件 模板对象/构造器
// import TabBar from './components/common/tabbar/Tabbar'
// import TabBarItem from './components/common/tabbar/TabbarItem'
import MainTabbar from './components/content/maintab/MainTabbar'

export default {
  name: 'App',
  components: {//2.注册组件，这里相当于简写TabBar(组件标签名):TabBar(组件模板对象)
    // TabBar,
    // TabBarItem
    MainTabbar
  }
}
</script>

<style>
/* base.css文件引入 */
@import "assets/css/base.css";
</style>
