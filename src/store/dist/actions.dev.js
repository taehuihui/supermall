"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  addToCar: function addToCar(context, payload) {
    return new Promise(function (resolve, reject) {
      // 方法2.
      var oldproduct = context.state.carList.find(function (item) {
        return item.id === payload.id; // 如果条件成立，则将item加到oldproduct中
      });

      if (oldproduct) {
        context.commit('recompose', oldproduct);
        resolve('加入购物车成功');
      } else {
        context.commit('addition', payload);
        resolve('加入购物车成功');
      }
    });
  }
};
exports["default"] = _default;