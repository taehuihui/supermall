<template>
  <div class="login">
      <nav-bar class="login-bar">
          <div slot="left" @click="backClick">&lt;</div>
          <div slot="center">登录</div>
      </nav-bar>
    <!-- tab栏 -->
    <el-tabs v-model="activeName" @tab-click="handleClick" class="login_tab">
      <el-tab-pane label="短信登录" name="login_ema"></el-tab-pane>
      <el-tab-pane label="密码登录" name="login_pass"></el-tab-pane>
    </el-tabs>
    <!-- 登录表单 -->
    <div class="login-con">
        <!-- 短信登录 -->
        <div class="login-ema" v-if="!loginWay">
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
                <input type="password" maxlength="11" v-model="inputCode" placeholder="请输入验证码...">
            </div>
            
        </div>
        <!-- 密码登录 -->
        <div class="login-pass" v-else>
            <div class="pass-user">
                <input type="text" maxlength="11" placeholder="请输入账号...">
            </div>
            <div class="pass-pass">
                <input type="password" minlength="8" maxlength="14" placeholder="请输入密码..." v-if="!isVisibled">
                <input type="text" minlength="8" maxlength="14" placeholder="请输入密码..." v-else>
                <span class="el-icon-view" @click="isVisible" :class="{visibled:isVisibled}"></span>
            </div>
        </div>
        
    </div>
    <!-- 登录按钮 -->
    <div class="login-submit">
        <input type="submit" value="登录" @click="Login">
    </div>

    <!-- 注册 -->
    <div class="to-regis">
        <div @click="toRegister">去注册</div>
    </div>
    
    <!-- dialog -->
    <div class="dialog_dv" v-show="dialogAc">
        <el-dialog
        title="提示"
        :visible="dialogAc"
        width="80%"
        :before-close="handleClose"
        getLoginCodemodal="true">
            <span>手机验证码为:{{phoneCode}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogAc = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {getLoginCode,phoneLogin} from 'network/login'
import {
  getLocalStore
} from 'config/global'

import { Message } from 'element-ui'

  export default {
    data() {
      return {
        activeName: 'login_ema',
        loginWay:false,//true密码登录，false短信登录
        phone:'',
        time:0,
        isVisibled:false,
        phoneCode:0,
        dialogAc:false,
        inputCode:''
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
        // console.log(tab, event);
        if(tab.name==='login_pass'){
            this.loginWay=true
        }else{
            this.loginWay=false
        }
      },
      getCode(){
          this.time=60
          var ree = getLoginCode(this.phone)
          ree.then(res=>{
            //   console.log(res)
              this.phoneCode=res.data.code
              if(this.phoneCode){
                  this.dialogAc=true
              }
          })
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
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    //   登录
      Login(){
          let userinfo = JSON.parse(getLocalStore('userInfo'))
          if(userinfo){
              this.$message({
                    message:'请先退出当前账号',
                    width:50,
                    offset:240,
                    center:true
                })
                return
          }
          if(!this.loginWay){
              //短信登录
              if (!this.Cphone || this.phone.length < 11) {
                this.$message({
                    message:'请输入正确的手机号码',
                    width:50,
                    offset:240,
                    center:true
                })
                return;
                } else if (this.inputCode < 7 || this.inputCode != Number(this.phoneCode)) {
                // 5.1.2 验证验证码
                this.$message({
                    message:'请输入正确的验证码',
                    width:50,
                    offset:200,
                    center:true
                })
                return;
              }
              //请求后台登录接口
              let loginAc=phoneLogin(this.phone,this.phoneCode)
              loginAc.then(res=>{
                console.log(res.data)
                //保存用户信息至vuex和本地
                this.$store.commit('adduserInfo',res.data)
                this.$router.push('/profile')
            })
          }
        
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
      margin: 0 auto;
      padding: 0 6px;
  }
  .to-regis>div{
      width: 50px;
  }
</style>