<template>
  <div class="comment" v-if="Object.keys(commentInfo).length!==0" >
      <div class="info-header">
          <div class="header-title">用户评价</div>
          <div class="header-more">
              更多
              <i class="arrow-right"></i>
          </div>
      </div>

      <div class="info-user">
          <img :src="commentInfo.user.avatar" alt="">
          <span>{{commentInfo.user.uname}}</span>
      </div>

      <div class="info-detail">
          <p>{{commentInfo.content}}</p>
          <div class="info-other">
              <span class="data">{{commentInfo.created | showDate}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
          <div class="info-imgs">
              <!-- 这个里面没数据暂时用下面那个顶替，看呈现效果 -->
              <!-- <img :src="item" v-for="(item,index) in commentInfo.image" :key="index" alt=""> -->
            <img :src="commentInfo.user.avatar" alt="">
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'
export default {
  props:{
      commentInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  filters:{
    showDate(time){
        var date=new Date(time * 1000)
        return formatDate(date,"yyyy/MM/dd hh:mm:ss")
    }
  }
}
</script>

<style>
  .comment{
      padding: 0 10px;
  }
  .info-header{
      display: flex;
      justify-content: space-between;
      margin: 12px 0;
      padding: 12px 0;
      border-bottom: 2px solid rgba(204, 204, 204, 0.5);
  }
  .info-user{
      height: 60px;
      line-height: 60px;
  }
  .info-user img{
      width: 50px;
      border-radius: 50%;
      vertical-align: top;
      margin-right: 10px;
  }
  .info-other{
    
  }
</style>