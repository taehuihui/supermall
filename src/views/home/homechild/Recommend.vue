<template>
  <div class="recommend">
      <div class="recommenditem" v-for="(item,index) in recommend" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
        type:Array,
        default(){
            return []
        }
    }
  }
}
</script>

<style>
  .recommend{
      display: flex;
      width: 100%;
      text-align: center;
      /* margin-top: 5px; */

      padding: 10px 0 20px;
      border-bottom: 10px solid #eee;
  }
  .recommenditem{
      flex: 1;
      font-size: 12px;
  }
  .recommenditem img{
      width: 70px;
      margin-bottom: 10px;
  }
</style>