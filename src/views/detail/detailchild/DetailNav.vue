<template>
  <nav-bar>
      <div slot="left" @click="backClick">&lt;</div>
      <div slot="center" class="center">
        <span href="" v-for="(item,index) in titles"
                   @click="navClick(index)"
                   :key="index"
                    :class="{active:currentIndex === index}">{{item}}</span>
      </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    navClick(index){
      this.currentIndex=index
      this.$emit('detailnav',index)
    },
    backClick(){
      this.$router.push('/home')
    }
  }
}
</script>

<style>
  .center{
      display: flex;
      justify-content: space-around;
  }
  .center span{
    font-weight: 500;
    color: rgb(61, 61, 61);
  }
  .center .active{
      color: rosybrown;
  }
</style>