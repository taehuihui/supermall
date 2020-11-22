"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var Home = function Home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/home/Home'));
  });
};

var Category = function Category() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/category/Category'));
  });
};

var Car = function Car() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/car/Car'));
  });
};

var Profile = function Profile() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/profile/Profile'));
  });
};

var Detail = function Detail() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/detail/Detail'));
  });
};

var Login = function Login() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/login/Login'));
  });
};

var Register = function Register() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('views/register/Register'));
  });
}; // 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题


var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
}; // 如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能


_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  // 路由与组件映射关系
  routes: [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/category',
    name: 'Category',
    component: Category
  }, {
    path: '/car',
    name: 'Car',
    component: Car
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }, {
    path: '/detail/:iid',
    //❓关于前后端路由，参数写法，或者拼接之类的具体怎么搞，还有发送请求时的，也要区分
    name: 'Detail',
    component: Detail
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  } // {
  //   path: '/recommend/:iid',//❓关于前后端路由，参数写法，或者拼接之类的具体怎么搞，还有发送请求时的，也要区分
  //   name: 'Recommend',
  //   component: Detail
  // }
  ],
  mode: 'history'
});

exports["default"] = _default;