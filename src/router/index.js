import Vue from 'vue'
import Router from 'vue-router'
// Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：
// 嵌套的路由/视图表
// 模块化的、基于组件的路由配置
// 路由参数、查询、通配符
// 基于 Vue.js 过渡系统的视图过渡效果
// 细粒度的导航控制
// 带有自动激活的 CSS class 的链接
// HTML5 历史模式或 hash 模式，在 IE9 中自动降级
// 自定义的滚动条行为

// 这种写法❓
const Home = ()=> import('views/home/Home')
const Category = ()=> import('views/category/Category')
const Car = ()=> import('views/car/Car')
const Profile = ()=> import('views/profile/Profile')
const Detail = ()=> import('views/detail/Detail')

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能
Vue.use(Router)

export default new Router({
    // 路由与组件映射关系
    routes:[
        {
            path:'',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'Home',
            component:Home
        },
        {
          path: '/category',
          name: 'Category',
          component: Category
        },
        {
          path: '/car',
          name: 'Car',
          component: Car
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/detail/:iid',//❓关于前后端路由，参数写法，或者拼接之类的具体怎么搞，还有发送请求时的，也要区分
          name: 'Detail',
          component: Detail
        },
        // {
        //   path: '/recommend/:iid',//❓关于前后端路由，参数写法，或者拼接之类的具体怎么搞，还有发送请求时的，也要区分
        //   name: 'Recommend',
        //   component: Detail
        // }
    ],
    mode:'history'
})