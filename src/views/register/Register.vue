<template>
  <div class="register">
      <nav-bar class="regis-nav">
          <div slot="left" @click="backClick">&lt;</div>
          <div slot="center">注册</div>
      </nav-bar>

      <!-- 注册表单 -->
    <div class="regis-con">
        <!-- 注册账号密码 -->
        <div class="regis">
            <div class="regis-user">
                <input type="text" maxlength="11" v-model="iusername" placeholder="请输入账号...">
            </div>
            <div class="regis-pass">
                <input type="password" minlength="8" maxlength="14" v-model="iuserpwd" placeholder="请输入密码..." v-if="!isVisibled">
                <input type="text" minlength="8" maxlength="14" v-model="iuserpwd" placeholder="请输入密码..." v-else>
                <span class="el-icon-view" @click="isVisible" :class="{visibled:isVisibled}"></span>
            </div>
        </div>
        <!-- 注册按钮 -->
        <div class="regis-submit">
            <input type="submit" value="注册" @click="Register">
        </div>
        <!-- 注册 -->
        <div class="to-login" @click="backClick">登录</div>
        
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {phoneLogin} from 'network/login'

export default {
    data(){
        return{
            isVisibled:false,
            iusername:'',
            iuserpwd:''
        }
    },
    components:{
      NavBar
    },
    methods:{
        backClick(){
          this.$router.push('/login')
      },
      isVisible(){
          this.isVisibled=!this.isVisibled
      },
      Register(){
          this.$message({
              message:'暂不支持,请使用手机验证码登录',
              width:50,
              offset:60,
              center:true
          })
      }
    }
}
</script>

<style scoped>
  .register{
      height: 100vh;
      background-color: #fff;
      position: relative;
      z-index: 99;
  }
  .regis-nav{
      background-color: seagreen;
  }
  .regis-nav .left div{
      color: #fff;
  }
  .regis-con{
      width: 300px;
      margin: 100px auto;
  }
  .regis-user input,.regis-pass input{
      width: 100%;
      height: 40px;
      border-radius: 10px;
      border: 1px solid seagreen;
      outline: 0;
      padding: 0 8px;
  }
  .regis-user,.regis-pass{
      margin-top: 20px;
  }
  .regis-pass{
      position: relative;
  }
  .regis-pass span{
      position: absolute;
      right: 18px;
      top: 11px;
      color: silver;
  }
  .regis-pass .visibled{
      color: seagreen;
  }
  .regis-submit{
      width: 300px;
      height: 30px;
      margin: 20px auto;
  }
  .regis-submit input{
      background-color: seagreen;
      outline: 0;
      border: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      color: seashell;
  }
  .to-login{
      width: 300px;
      text-align: right;
      margin: 0 auto;
      padding: 0 6px;
  }
</style>