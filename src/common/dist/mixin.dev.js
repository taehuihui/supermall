"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backTopMixin = exports.goodsListItemMixin = void 0;

var _utils = require("common/utils");

var _BackTop = _interopRequireDefault(require("components/content/backTop/BackTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var goodsListItemMixin = {
  data: function data() {
    return {
      itemImgListener: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var refresh = (0, _utils.debounce)(this.$refs.scroll.refresh, 500);

    this.itemImgListener = function () {
      console.log(_this.$route.path);
      refresh();
    };

    this.$bus.$on('imgLoad', this.itemImgListener);
  }
};
exports.goodsListItemMixin = goodsListItemMixin;
var backTopMixin = {
  data: function data() {
    return {
      isShow: false
    };
  },
  components: {
    BackTop: _BackTop["default"]
  },
  methods: {
    backClick: function backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  }
};
exports.backTopMixin = backTopMixin;