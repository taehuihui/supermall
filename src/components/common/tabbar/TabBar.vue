<template>
<!-- 底部导航栏大组件 -->
  <div class="tabbar">
    <!-- 这个部分可以拆分成一个小组件<div class="tabbaritem">
        <img src="~assets/images/tabbars/home.png" alt="">
        <div>首页</div>
    </div> -->
    <!-- 预留插槽以便插入内容 -->
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>