<template>
  <!-- 底部导航栏中 每个小导航组件 -->
  <div class="tabbaritem" @click="itemClick">
      <!-- 一般预留插槽 -->
      <!-- 为防止插槽被整个覆盖，而有些设置也被覆盖，会在插槽外再套一层div -->
      <!-- 有多个插槽，那么就需要起名字了 -->
      <div v-if="!isActive"><slot name="tab-img"></slot></div>
      <div v-else><slot name="tab-img-active"></slot></div>
      <div :style="activeStyle"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>

export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'purple'
        }
    },
    data(){
        return{
            flag:true
        }
    },
    computed:{
        isActive(){//3.点击时活跃状态
            // $route当前活跃的路由
            // $route.path就是当前url路径
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor}:''
        }
    },
    methods:{
        itemClick(){//2.点击跳转
            console.log(this.path)
            this.$router.push(this.path)
        }
    }
}
</script>

<style>
</style>