"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text: "First UI是一套超高性能、超高颜值的移动端UI综合解决方案，包含业内顶尖的组件库、强大的功能库、丰富精美的模板库，提供uni-app(完美支持nvue)、微信小程序、支付宝小程序等版本，兼顾高效率与高性能，让您的开发获得百倍提质提速！"
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
      this.fui.toast("点击了~");
    }
  }
};
if (!Array) {
  const _easycom_fui_text2 = common_vendor.resolveComponent("fui-text");
  _easycom_fui_text2();
}
const _easycom_fui_text = () => "../../../../components/firstui/fui-text/fui-text.js";
if (!Math) {
  _easycom_fui_text();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: $data.text,
      size: 28
    }),
    b: common_vendor.p({
      text: "primary",
      type: "primary"
    }),
    c: common_vendor.p({
      text: "success",
      type: "success"
    }),
    d: common_vendor.p({
      text: "warning",
      type: "warning"
    }),
    e: common_vendor.p({
      text: "danger",
      type: "danger"
    }),
    f: common_vendor.p({
      text: "purple",
      type: "purple"
    }),
    g: common_vendor.p({
      text: "gray",
      type: "gray"
    }),
    h: common_vendor.p({
      text: "black",
      type: "black"
    }),
    i: common_vendor.p({
      text: "block",
      color: "brown",
      block: true
    }),
    j: common_vendor.p({
      text: "yellow",
      color: "yellow",
      block: true
    }),
    k: common_vendor.p({
      text: "张三",
      ["text-type"]: "name",
      format: true,
      block: true
    }),
    l: common_vendor.p({
      text: "王小仙",
      ["text-type"]: "name",
      format: true,
      block: true
    }),
    m: common_vendor.p({
      text: "13544339908",
      ["text-type"]: "mobile",
      format: true
    }),
    n: common_vendor.p({
      text: "20000",
      ["text-type"]: "amount",
      format: true
    }),
    o: common_vendor.o($options.handleClick),
    p: common_vendor.p({
      text: "https://firstui.cn",
      highlight: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
