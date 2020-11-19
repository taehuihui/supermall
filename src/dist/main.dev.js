"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _index2 = _interopRequireDefault(require("store/index"));

var _vueAwesomeSwiper = _interopRequireDefault(require("vue-awesome-swiper"));

require("swiper/swiper-bundle.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// element-ui引入
//只能是router,其他写法似乎不行❓
// require styles
//💥新版写法！！！
_vue["default"].config.productionTip = false;
_vue["default"].prototype.$bus = new _vue["default"]();

_vue["default"].use(_vueAwesomeSwiper["default"]
/* { default global options } */
);

_vue["default"].use(_elementUi["default"]);

new _vue["default"]({
  // ❓
  // render函数是渲染一个视图，然后提供给el挂载，如果没有render，页面上什么都没有
  // h是createElement的别名，vue生态系统的通用管理
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _index2["default"]
}).$mount('#app'); // $mount()手动挂载
// 当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
// 假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。