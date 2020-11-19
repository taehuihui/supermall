<template>
<!-- 这个是顶部导航栏，在不同页面可能不同，所以需要在不同组件中进行使用 -->
  <div class="navbar">
      <!-- 所以在这里只预留插槽 -->
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {


}
</script>

<style>
    .navbar{
        height: 44px;
        line-height: 44px;
        /* background-color: pink; */
        display: flex;
        justify-content: space-between;
        text-align: center;

        box-shadow: 0 1px 8px rgba(100, 100, 100, 0.2);

        /* position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99; */
    }
    .center{
        color: seashell;
        font-weight: 600;
        width: 250px;
        /* background-color: blue; */
        
    }
    .left,.right{
        width: 60px;
        /* background-color: pink; */
    }
</style>