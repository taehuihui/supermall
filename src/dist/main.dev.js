"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _index2 = _interopRequireDefault(require("store/index"));

var _vueAwesomeSwiper = _interopRequireDefault(require("vue-awesome-swiper"));

require("swiper/dist/css/swiper.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// element-ui引入
_vue["default"].config.productionTip = false;
_vue["default"].prototype.$bus = new _vue["default"]();

_vue["default"].use(_vueAwesomeSwiper["default"]
/* { default global options } */
);

_vue["default"].use(_elementUi["default"]);

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _index2["default"]
}).$mount('#app');