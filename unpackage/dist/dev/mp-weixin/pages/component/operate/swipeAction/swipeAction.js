"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      buttons: [{
        text: "标为未读",
        background: "#465CFF"
      }, {
        text: "删除",
        background: "#FF2B2B"
      }]
    };
  },
  onLoad() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    vip() {
      this.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容");
    },
    onClick(e) {
      console.log(e);
      this.fui.toast(e.item.text);
    },
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_swipe_action2 = common_vendor.resolveComponent("fui-swipe-action");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_swipeaction_group2 = common_vendor.resolveComponent("fui-swipeaction-group");
  (_easycom_fui_list_cell2 + _easycom_fui_swipe_action2 + _easycom_fui_icon2 + _easycom_fui_swipeaction_group2)();
}
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_swipe_action = () => "../../../../components/firstui/fui-swipe-action/fui-swipe-action.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_swipeaction_group = () => "../../../../components/firstui/fui-swipeaction-group/fui-swipeaction-group.js";
if (!Math) {
  (_easycom_fui_list_cell + _easycom_fui_swipe_action + _easycom_fui_icon + _easycom_fui_swipeaction_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o((...args) => $options.vip && $options.vip(...args)),
    c: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    d: common_vendor.o($options.onClick),
    e: common_vendor.o($options.change),
    f: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    g: common_vendor.o($options.onClick),
    h: common_vendor.o($options.change),
    i: common_vendor.p({
      buttons: $data.buttons
    }),
    j: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    k: common_vendor.p({
      name: "delete",
      size: 44
    }),
    l: common_vendor.p({
      buttons: $data.buttons
    }),
    m: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    n: common_vendor.p({
      disabled: true
    }),
    o: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    p: common_vendor.p({
      show: $data.show
    }),
    q: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    r: common_vendor.p({
      autoClose: false
    }),
    s: common_vendor.p({
      padding: ["36rpx", "32rpx"],
      highlight: false
    }),
    t: common_vendor.p({
      autoClose: false,
      buttons: $data.buttons
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
