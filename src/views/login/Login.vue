<template>
  <div class="login">
      <nav-bar class="login-bar">
          <div slot="left" @click="backClick">&lt;</div>
          <div slot="center">登录</div>
      </nav-bar>
    <!-- tab栏 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="login_tab">
      <el-tab-pane label="密码登录" name="login_pass"></el-tab-pane>
      <el-tab-pane label="短信登录" name="login_ema"></el-tab-pane>
    </el-tabs>
    <!-- 登录表单 -->
    <div class="login-con">
        <!-- 密码登录 -->
        <div class="login-pass" v-if="loginWay">
            <div class="pass-user">
                <input type="text" maxlength="11" placeholder="请输入账号...">
            </div>
            <div class="pass-pass">
                <input type="password" minlength="8" maxlength="14" placeholder="请输入密码..." v-if="!isVisibled">
                <input type="text" minlength="8" maxlength="14" placeholder="请输入密码..." v-else>
                <span class="el-icon-view" @click="isVisible" :class="{visibled:isVisibled}"></span>
            </div>
        </div>
        <!-- 短信登录 -->
        <div class="login-ema" v-else>
            <div class="ema-tel">
                <input type="tel" maxlength="11" v-model="phone" placeholder="请输入手机号...">
                <!-- 只有手机号格式匹配正确之后，才能点击获取验证码 -->
                <!-- 注意，必须阻止默认事件，否则每次点击都会提交表单 -->
                <button :disabled="!Cphone" 
                    :class="{get_code:Cphone}"
                    @click.prevent="getCode"
                    v-text="time>0?`已发送(${time}s)`:'获取验证码'">
                </button>
            </div>
            <div class="ema-code">
                <input type="password" maxlength="11" placeholder="请输入验证码...">
            </div>
            
        </div>
    </div>
    <!-- 登录按钮 -->
    <div class="login-submit">
        <input type="submit" value="登录">
    </div>

    <!-- 注册 -->
    <div class="to-regis" @click="toRegister">注册</div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

  export default {
    data() {
      return {
        activeName: 'login_pass',
        loginWay:true,
        phone:'',
        time:0,
        isVisibled:false
      }
    },
    components:{
        NavBar
    },
    computed:{
    //   验证输入的手机号码是否标准
      Cphone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        if(tab.name==='login_pass'){
            this.loginWay=true
        }else{
            this.loginWay=false
        }
      },
      getCode(){
          this.time=60
          let id=setInterval(() => {
              this.time--
          }, 1000);
          if(this.time===0){
              clearInterval(id)
          }
      },
      isVisible(){
          this.isVisibled=!this.isVisibled
      },
      backClick(){
          this.$router.push('/profile')
      },
      toRegister(){
          this.$router.push('/register')
      }
    }
  };
</script>

<style>
  .login-bar{
      background-color: seagreen;
      margin-bottom: 80px;
  }
  .login-bar .left{
      color: seashell;
  }
  .login{
      height: 100vh;
      background-color: #fff;
      position: relative;
      z-index: 99;
  }
  .login_tab{
    /* width:200px; */
    display: flex;
    padding: 0 10px;
    justify-content: center;
  }
  /* 修改组件样式 */
  .el-tabs__active-bar{
      background-color: seagreen;
  }
  .el-tabs__item.is-active{
      color: seagreen;
  }
  .login-ema,.login-pass{
      width: 300px;
      position: relative;
      margin: 0 auto;
  }
  .login-ema input,.pass-user input,.pass-pass input{
      width: 100%;
      height: 40px;
      border-radius: 10px;
      border: 1px solid seagreen;
      outline: 0;
      padding: 0 8px;
  } 
  .login-ema button{
      background-color: #fff;
      outline: 0;
      border: 0;
      position: absolute;
      right: 12px;
      top: 11px;
  }
  .ema-tel,.ema-code,.pass-user,.pass-pass{
      margin-top: 20px;
  }
  .pass-pass{
      position: relative;
  }
  .pass-pass span{
      position: absolute;
      right: 18px;
      top: 11px;
      color: silver;
  }
  .pass-pass .visibled{
      color: seagreen;
  }
  .login-submit{
      width: 300px;
      height: 30px;
      margin: 20px auto;
  }
  .login-submit input{
      background-color: seagreen;
      outline: 0;
      border: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      color: seashell;
  }
  .to-regis{
      width: 300px;
      text-align: right;
      margin: 0 auto;
      padding: 0 6px;
  }
</style>