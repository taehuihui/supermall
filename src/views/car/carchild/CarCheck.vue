<template>
  <div class="check-button" :class="{inactive:isChecked}">
      <img src="~assets/images/cart/tick.svg" alt="" 
            v-if="isChecked">
  </div>
</template>

<script>
export default {
  props:{
    
    isChecked:{
      type:Boolean,
      default(){
          return false
      }
    }
  }
}
</script>

<style>
/* 没选中时灰色边框 */
  .check-button{
    width: 18px;
    height: 18px;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
  /* .check-button img{
    background-color: var(--color-high-text);
    border-radius: 50%;  
  } */
  .inactive{
      background-color: var(--color-high-text);
      border-color: tomato;
  }
</style>