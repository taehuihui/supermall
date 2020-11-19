"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHomeData = getHomeData;
exports.getHomeGoods = getHomeGoods;

var _request = require("./request");

// 首页的数据请求
// 导入时用export，导出时记得加大括号
function getHomeData() {
  // 专属于home组件所需数据的请求
  // request函数,返回一个Promise
  return (0, _request.request)({
    url: '/home/multidata'
  });
} // 这个网址需要传参数


function getHomeGoods(type, page) {
  return (0, _request.request)({
    url: '/home/data',
    // ❓关于网络的传参之类的
    params: {
      type: type,
      page: page
    }
  });
}