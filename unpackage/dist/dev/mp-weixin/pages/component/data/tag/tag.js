"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_tag2 = common_vendor.resolveComponent("fui-tag");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_tag2 + _easycom_fui_icon2)();
}
const _easycom_fui_tag = () => "../../../../components/firstui/fui-tag/fui-tag.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_tag + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "标签一",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    b: common_vendor.p({
      text: "标签二",
      type: "danger",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    c: common_vendor.p({
      text: "标签三",
      type: "success",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    d: common_vendor.p({
      text: "标签四",
      type: "warning",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    e: common_vendor.p({
      text: "标签五",
      type: "purple",
      ["margin-bottom"]: "24"
    }),
    f: common_vendor.p({
      text: "标签一",
      ["margin-bottom"]: "24",
      theme: "light",
      ["margin-right"]: "24"
    }),
    g: common_vendor.p({
      text: "标签二",
      type: "danger",
      theme: "light",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    h: common_vendor.p({
      text: "标签三",
      type: "success",
      theme: "light",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    i: common_vendor.p({
      text: "标签四",
      type: "warning",
      theme: "light",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    j: common_vendor.p({
      text: "标签五",
      type: "purple",
      theme: "light",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    k: common_vendor.p({
      text: "标签一",
      ["margin-bottom"]: "24",
      theme: "plain",
      ["margin-right"]: "24"
    }),
    l: common_vendor.p({
      text: "标签二",
      type: "danger",
      theme: "plain",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    m: common_vendor.p({
      text: "标签三",
      type: "success",
      theme: "plain",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    n: common_vendor.p({
      text: "标签四",
      type: "warning",
      theme: "plain",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    o: common_vendor.p({
      text: "标签五",
      type: "purple",
      theme: "plain",
      ["margin-bottom"]: "24"
    }),
    p: common_vendor.p({
      name: "close",
      color: "#465CFF",
      size: 32
    }),
    q: common_vendor.p({
      text: "标签一",
      theme: "light",
      ["margin-right"]: "24",
      padding: ["12rpx", "20rpx"]
    }),
    r: common_vendor.p({
      name: "clear",
      color: "#FF2B2B",
      size: 32
    }),
    s: common_vendor.p({
      text: "标签二",
      type: "danger",
      theme: "light",
      ["margin-right"]: "24",
      padding: ["12rpx", "20rpx"]
    }),
    t: common_vendor.p({
      name: "clear-fill",
      color: "#09BE4F",
      size: 32
    }),
    v: common_vendor.p({
      text: "标签三",
      type: "success",
      theme: "light",
      ["margin-right"]: "24",
      padding: ["12rpx", "20rpx"]
    }),
    w: common_vendor.p({
      text: "标签一",
      background: "rgba(255, 43, 43, .05)",
      color: "#333",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    x: common_vendor.p({
      text: "标签二",
      background: "#CCCCCC",
      color: "#fff",
      ["margin-bottom"]: "24",
      ["margin-right"]: "24"
    }),
    y: common_vendor.p({
      text: "标签三",
      background: "rgba(255, 183, 3, .1)",
      color: "#FF2B2B",
      ["margin-bottom"]: "24",
      scaleRatio: 0.8,
      ["margin-right"]: "24"
    }),
    z: common_vendor.p({
      text: "标签四",
      background: "rgba(104, 49, 255, .05)",
      color: "#181818",
      ["margin-bottom"]: "24",
      padding: ["20rpx", "40rpx"],
      ["margin-right"]: "24"
    }),
    A: common_vendor.p({
      text: "标签五",
      background: "rgba(9, 190, 79, .05)",
      color: "#181818",
      ["margin-bottom"]: "24",
      padding: ["12rpx", "24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
