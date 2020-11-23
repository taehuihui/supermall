<template>
  <div class="wrapperC">
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>

    <div class="pro-edit">
      <img src="~assets/images/profile/my.png" width="40px">
      <div class="edit-msg">
        <router-link to="/login">
          <div>
            登录/注册
          </div>
        </router-link>
        <p><i class="el-icon-phone-outline"></i>暂无绑定的手机号</p>
      </div>
      <span class="el-icon-arrow-right pro-right"></span>
    </div>

    <div class="pro-msg">
      <div class="banlance">
        <p><span>0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div class="discounts">
        <p><span>0</span>个</p>
        <p>我的优惠</p>
      </div>
      <div class="intergral">
        <p><span>0</span>分</p>
        <p>我的积分</p>
      </div>
    </div>

    <div class="pro-serve">
      <div class="news">
        <i class="el-icon-message"></i>
        <p>我的消息</p>
      </div>
      <div class="mall">
        <i class="el-icon-shopping-cart-full"></i>
        <p>我的商城</p>
      </div>
      <div class="credit">
        <i class="el-icon-bank-card"></i>
        <p>会员卡</p>
      </div>
      <div class="credit">
        <i class="el-icon-shopping-cart-full"></i>
        <p>我的购物车</p>
      </div>
      <div class="credit">
        <i class="el-icon-goods"></i>
        <p>下载购物车APP</p>
      </div>
    </div>

    
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  data(){
    return{
      scroll:null
    }
  },
  components:{
    NavBar
  },
  methods:{
    toLogin(){
      this.$router.push('/login')
    }
  }
}

</script>

<style>
  .nav-bar{
    background-color: var(--color-tint);
  }
  .pro-edit{
    height: 80px;
    background-color: var(--color-tint);
    margin-top: 5px;
    padding: 6px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .pro-edit img{
    border: 2px solid #ccc;
    border-radius: 50%;
    color: #ccc;
  }
  .edit-msg{
    color: #fff;
    line-height: 24px;
    margin-left: -20px;
  }
  .edit-msg div{
    color: #fff;
  }
  .edit-msg p i{
    margin-right: 3px;
  }
  .pro-msg{
    height: 80px;
    display: flex;
  }
  .banlance,.discounts,.intergral{
    border-right: 1px solid rgba(204, 204, 204, 0.678);
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* line-height: 80px; */
  }
  .pro-msg span{
    color: var(--color-tint);
  }
  .pro-msg p{
    margin-bottom: 4px;
  }
  .pro-serve{
    display: flex;
    flex-direction: column;
    padding: 0 12px;
    margin-top: 8px;
  }
  .news,.mall,.credit{
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }
  .pro-serve i{
    margin-right: 8px;
    color: var(--color-tint);
  }
</style>