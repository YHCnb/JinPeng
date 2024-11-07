"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      tips: "",
      itemList: [],
      isCancel: true,
      theme: "light"
    };
  },
  methods: {
    showActionSheet(type) {
      this.tips = "";
      this.isCancel = true;
      this.theme = "light";
      switch (type) {
        case 1:
          this.tips = "退出后不会删除任何历史数据，下次登录依然可以使用本账号。";
          this.itemList = [{
            text: "退出登录",
            color: "#FF2B2B"
          }];
          break;
        case 2:
          this.itemList = ["点赞", "评论", "收藏"];
          break;
        case 3:
          this.itemList = ["点赞", "评论", "收藏"];
          this.theme = "dark";
          break;
        case 4:
          this.tips = "请选择性别";
          this.itemList = ["男", "女", "未知"];
          this.isCancel = false;
          break;
      }
      setTimeout(() => {
        this.show = true;
      }, 50);
    },
    itemClick(e) {
      console.log(e);
      this.fui.toast(e.text);
      this.cancel();
    },
    cancel() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_actionsheet2 = common_vendor.resolveComponent("fui-actionsheet");
  (_easycom_fui_button2 + _easycom_fui_actionsheet2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_actionsheet = () => "../../../../components/firstui/fui-actionsheet/fui-actionsheet.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_actionsheet)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showActionSheet(1)),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "带提示",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o(($event) => $options.showActionSheet(2)),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "无提示操作",
      bold: true
    }),
    e: common_vendor.o(($event) => $options.showActionSheet(3)),
    f: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "暗黑模式",
      margin: ["24rpx"],
      bold: true
    }),
    g: common_vendor.o(($event) => $options.showActionSheet(4)),
    h: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "无取消按钮",
      bold: true
    }),
    i: common_vendor.o($options.itemClick),
    j: common_vendor.o($options.cancel),
    k: common_vendor.p({
      show: $data.show,
      tips: $data.tips,
      itemList: $data.itemList,
      isCancel: $data.isCancel,
      theme: $data.theme
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
