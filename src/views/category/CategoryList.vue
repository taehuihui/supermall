<template>
  <div class="cart-list">
      <div class="cate-title">
        <div v-for="(item,index) in cateList" 
            @click="changeTitle(item.maitKey,index)"
            :class="{active:flag===index}">
            {{item.title}}
        </div>
       </div>

       <scroll class="cate-scroll">
           <div class="cate-content">
                <div v-for="item in cateContent" class="cate-content-inner">
                    <a :href="item.link">
                        <img :src="item.image">
                        <p>{{item.title}}</p>
                    </a>
                </div>
            </div>
       </scroll>
  </div>
</template>

<script>
import {getCategory,getSubCategory} from 'network/category.js'
import Scroll from 'components/common/scroll/Scroll'


export default {
    data(){
        return{
            cateList:[],
            mainKey:3627,
            cateContent:[],
            flag:0
        }
    },
    components:{
      Scroll
    },
    created(){
        getCategory().then(res=>{
            console.log(res)
            this.cateList=res.data.category.list
        }),
        getSubCategory(this.mainKey).then(res=>{
            console.log(res)
            this.cateContent=res.data.list
        })
    },
    methods:{
        changeTitle(key,index){
            this.mainKey=key
            console.log(key)
            getSubCategory(this.mainKey).then(res=>{
                console.log(res)
                this.cateContent=res.data.list
            })
            this.flag=index
        }
    }
}
</script>

<style scoped>
  .cart-list{
      display: flex;
      height: 100vh;
      overflow: hidden;
  }
  
  .cate-title{
    width: 100px;
    background-color: #f2f2f2;
    text-align: center;
    font-size: 18px;
  }
  .cate-title div{
    padding: 8px 0;
  }
  .cate-scroll{
    width: calc(100% - 100px);
    height: calc(100% - 93px);
    overflow: hidden;
  }
  .cate-content{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 6px 0;
  }
  .cate-content-inner{
      width: 50%;
      text-align: center;
      padding: 6px;
  }
  .cate-content img{
      width: 100px;
  }
  .active{
      background-color: #fff;
  }
</style>