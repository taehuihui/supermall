import Vue from 'vue'
// element-ui引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'
import router from './router'//只能是router,其他写法似乎不行❓
import store from 'store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/swiper-bundle.css'//💥新版写法！！！

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(ElementUI)

new Vue({
  // ❓
  // render函数是渲染一个视图，然后提供给el挂载，如果没有render，页面上什么都没有
  // h是createElement的别名，vue生态系统的通用管理
  render: h => h(App),
  router,
  store
}).$mount('#app')
// $mount()手动挂载
// 当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
// 假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。
