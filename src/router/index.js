import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=> import('views/home/Home')
const Category = ()=> import('views/category/Category')
const Car = ()=> import('views/car/Car')
const Profile = ()=> import('views/profile/Profile')
const Detail = ()=> import('views/detail/Detail')
const Login = ()=> import('views/login/Login')
const Register = ()=> import('views/register/Register')

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
            component:Home,
            meta:{
              showMainTab:true
            }
        },
        {
          path: '/category',
          name: 'Category',
          component: Category,
          meta:{
            showMainTab:true
          }
        },
        {
          path: '/car',
          name: 'Car',
          component: Car,
          meta:{
            showMainTab:true
          }
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile,
          meta:{
            showMainTab:true
          }
        },
        {
          path: '/detail/:iid',
          name: 'Detail',
          component: Detail
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/register',
          name: 'Register',
          component: Register
        }
    ],
    // mode:'history'
})