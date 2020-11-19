<template>
  <!-- 底部导航栏中 每个小导航组件 -->
  <div class="tabbaritem" @click="itemClick">
      <!-- <img src="" alt="">
      <img src="" alt="">
      <div></div> -->

      <!-- 一般预留插槽 -->
      <!-- 为防止插槽被整个覆盖，而有些设置也被覆盖，会在插槽外再套一层div -->
      <!-- 有多个插槽，那么就需要起名字了 -->
      <div v-if="!isActive"><slot name="tab-img"></slot></div>
      <div v-else><slot name="tab-img-active"></slot></div>
      <!-- <div :class="{active:isActive}"><slot name="tab-text"></slot></div> -->
      <div :style="activeStyle"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>

export default {
    props:{
        //1.接收传过来的跳转路径，在点击时父传子
        // ❓为什么传过来就是点击的那个路径呢--是因为每个item都会创建自己的小组件，每个小组件都有自己的path吗？
            // ，而触发点击事件的小组件才会打印出来，其他的感受不到而已？
            // 解释：以上理解正确，虽然组件复用，但是本质还是分开的，
                // 复用的组件都会有各自不同的id，生成的dom也是分开的，数据互不影响
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
            // console.log(this.$route.path)
            // console.log(this.$router.path)//报错
            this.$router.push(this.path)
            // NavigationDuplicated: Avoided redundant navigation to current location: "/home".
            // 重复路由跳转就会报这个错误，升级版本可解决❓
        }
    }
}
</script>

<style>
    /* .active{
        color: salmon;
    } */
</style>