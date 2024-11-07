"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    //当前版本
    version: "2.3.0",
    //主题 light、dark
    theme: common_vendor.index.getStorageSync("fui_theme") || "light",
    status: 0
  },
  mutations: {},
  actions: {}
});
exports.store = store;
