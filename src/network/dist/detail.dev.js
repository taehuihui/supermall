"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDetail = getDetail;
exports.getRecommend = getRecommend;
exports.GoodsParam = exports.Shop = exports.Goods = void 0;

var _request = require("./request");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getDetail(iid) {
  return (0, _request.request)({
    url: '/detail',
    params: {
      iid: iid //这里是iid:iid的简写！！！,若形参为id，应写成iid:id

    }
  });
}

function getRecommend() {
  return (0, _request.request)({
    url: '/recommend'
  });
} // 商品信息封装类


var Goods = function Goods(itemInfo, columns, services) {
  _classCallCheck(this, Goods);

  this.title = itemInfo.title;
  this.desc = itemInfo.desc;
  this.newPrice = itemInfo.price;
  this.oldPrice = itemInfo.oldPrice;
  this.discount = itemInfo.discountDesc;
  this.discountBgColor = itemInfo.discountBgColor;
  this.columns = columns;
  this.services = services;
  this.realPrice = itemInfo.lowNowPrice;
}; // 商家信息封装类


exports.Goods = Goods;

var Shop = function Shop(shopInfo) {
  _classCallCheck(this, Shop);

  this.logo = shopInfo.shopLogo;
  this.name = shopInfo.name;
  this.fans = shopInfo.cFans;
  this.sells = shopInfo.cSells;
  this.score = shopInfo.score;
  this.goodsCount = shopInfo.cGoods;
};

exports.Shop = Shop;

var GoodsParam = function GoodsParam(info, rule) {
  _classCallCheck(this, GoodsParam);

  // 注: images可能没有值(某些商品有值, 某些没有值)
  this.image = info.images ? info.images[0] : '';
  this.infos = info.set;
  this.sizes = rule.tables;
};

exports.GoodsParam = GoodsParam;