<template>
  <div class="toast">
      {{message}}
  </div>
</template>

<script>
export default {
  props:{
      message:{
        type:String,
        default(){
            return ''
        }
      }
  }
}
</script>

<style>
  .toast{
      width: auto;
      height: 50px;
      line-height: 50px;
      background-color: rgba(0, 0, 0, 0.75);
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #fff;
      padding: 2px 8px;
  }
</style>