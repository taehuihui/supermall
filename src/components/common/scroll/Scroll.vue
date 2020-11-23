<template>
  <div class="wrapper" ref="wrap">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            scroll:null
        }
    },
    // 💥只有content高度大于wrapper高度时，才能滚动
        // 滚动不了的原因在于content高度没有高于wrapper
    mounted(){//在挂载的时候创建scroll实例
        // 创建BScroll对象
            // console.log(this)
            this.scroll=new BScroll(this.$refs.wrap,{
            click:true,//滚动部分内的原生click点击事件才能生效
            mouseWheel: true,//鼠标滚轮
            probeType:this.probeType,//不一定每个使用的组件都需要实时侦测，所以根据使用的组件传过来的值进行设置
            pullUpLoad:this.pullUpLoad
          })
        // 监听滚动事件
        if(this.probeType===2 || this.probeType===3){
            // 说明会进行侦测
            // 那么就通过监听滚动事件，并将实时位置发送给使用的组件
            this.scroll.on('scroll',(position)=>{
                // console.log(position)
                this.$emit('scroll',position)
                
            })
        }
        // 上拉加载事件
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
            })
        }
    },
  updated () {
        this.scroll.refresh()
  },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        refresh() {
          this.scroll && this.scroll.refresh()
        },
        getScrollY() {
          return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style>
</style>