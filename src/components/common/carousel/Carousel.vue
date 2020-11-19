<template>
<!-- 轮播图组件 -->
  <div class="carousel">
      <!-- 放置图片 -->
      <div class="viewpage">
        <slot></slot>
      </div>
      <!-- 放置圆点指标 -->
      <div class="indicator">
        <slot name="indicator"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .viewpage{
    display: flex;
    overflow: hidden;
  }
  .viewpage img{
    width: 100%;
    
  }
  .indicator{
      display: flex;
      justify-content: center;
      padding: 2px;
      /* background-color: orange; */

      position: absolute;
      /* left: 50%; */
      width: 100%;
      bottom: 8px;
  }
</style>