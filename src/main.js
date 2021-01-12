import Vue from 'vue'
// element-ui引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyLoad from 'vue-lazyload'

import App from './App.vue'
import router from './router'
import store from 'store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import './appback.js'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(ElementUI)
//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/images/common/loading.jpg')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
