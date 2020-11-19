"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  /**
   * mutations唯一的目的就是要修改state中状态
   * mutations中的每一个方法，尽可能完成的事情比较单一
   * 对于逻辑判断之后去做两件不同的事情，最好在actions中完成
   * 否则很难跟踪到哪个事件进行了修改
   */
  recompose: function recompose(state, oldproduct) {
    //参数第几个分别代表什么要记清，就算用不到，也要写着占位置
    oldproduct.count += 1;
  },
  addition: function addition(state, payload) {
    payload.count = 1;
    payload.checked = false;
    state.carList.push(payload);
  },
  changeChecked: function changeChecked(state, payload) {
    payload.checked = !payload.checked;
  },
  allChecked: function allChecked(state) {
    state.carList.forEach(function (ele) {
      ele.checked = true;
    });
  },
  allUnChecked: function allUnChecked(state) {
    state.carList.forEach(function (ele) {
      ele.checked = false;
    });
  }
};
exports["default"] = _default;