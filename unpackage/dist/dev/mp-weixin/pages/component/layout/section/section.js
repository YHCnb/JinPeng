"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_section2 = common_vendor.resolveComponent("fui-section");
  _easycom_fui_section2();
}
const _easycom_fui_section = () => "../../../../components/firstui/fui-section/fui-section.js";
if (!Math) {
  _easycom_fui_section();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "Section",
      descr: "Section 标题栏，主要用于文章、列表详情等标题展示。",
      ["margin-top"]: 52
    }),
    b: common_vendor.p({
      title: "装饰线条",
      isLine: true,
      ["margin-top"]: "64"
    }),
    c: common_vendor.p({
      title: "线条宽度/颜色调整",
      ["line-width"]: "8rpx",
      ["line-color"]: "#FF2B2B",
      isLine: true,
      ["margin-top"]: "96"
    }),
    d: common_vendor.p({
      title: "标题/无线条/带描述",
      descr: "我是描述文本~",
      ["margin-top"]: "96"
    }),
    e: common_vendor.p({
      padding: ["32rpx", "32rpx"],
      background: "#fff",
      title: "设置背景",
      isLine: true,
      ["margin-top"]: "96"
    }),
    f: common_assets._imports_0$1,
    g: common_vendor.p({
      title: "插槽使用/加图标",
      ["margin-top"]: "64"
    }),
    h: common_vendor.p({
      title: "线条渐变色/调整字体大小",
      ["line-width"]: "3px",
      size: "48",
      isLine: true,
      ["line-color"]: "linear-gradient(to bottom , #FFB703, #FF416C)",
      ["margin-top"]: "96"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
