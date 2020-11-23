<template>
  <div class="tab">
    <div v-for="(item,index) in tabcon" 
        class="tab-item" @click="tabClick(index)" 
        :class="{active:activeIndex===index}"
        :key="index">
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
          activeIndex:0
      }
  },
  props:{
      tabcon:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      tabClick(index){
          this.activeIndex=index
          // 子传父,传递点击哪一个的信息
          this.$emit('tabClick',index)
      }
  }
}
</script>

<style>
  .tab{
      height: 40px;
      line-height: 40px;
      background-color: #fff;
      display: flex;
      text-align: center;
  }
  .tab-item{
      flex: 1;
      font-size: 14px;
  }
  .active span{
    border-bottom:2px solid tomato;
    padding: 3px;
    color: tomato;
  }
</style>