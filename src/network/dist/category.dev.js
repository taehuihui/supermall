"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCategory = getCategory;
exports.getSubCategory = getSubCategory;

var _request = require("./request");

function getCategory() {
  return (0, _request.request)({
    url: '/category'
  });
}

function getSubCategory(maitKey) {
  return (0, _request.request)({
    url: '/subcategory',
    params: {
      maitKey: maitKey
    }
  });
}