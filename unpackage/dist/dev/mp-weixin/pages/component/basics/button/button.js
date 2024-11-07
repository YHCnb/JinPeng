"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    btnClick() {
      this.fui.toast("click~");
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  _easycom_fui_button2();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  _easycom_fui_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.btnClick),
    b: common_vendor.p({
      text: "默认按钮"
    }),
    c: common_vendor.p({
      margin: ["24rpx"],
      type: "success"
    }),
    d: common_vendor.p({
      type: "warning"
    }),
    e: common_vendor.p({
      margin: ["24rpx"],
      type: "danger"
    }),
    f: common_vendor.p({
      type: "purple"
    }),
    g: common_vendor.p({
      margin: ["24rpx"],
      type: "link",
      color: "#465CFF"
    }),
    h: common_vendor.p({
      disabled: true
    }),
    i: common_vendor.p({
      margin: ["24rpx"],
      disabled: true,
      loading: true
    }),
    j: common_vendor.p({
      disabled: true,
      disabledBackground: "#F8F8F8",
      disabledColor: "#CCCCCC"
    }),
    k: common_vendor.p({
      radius: "0"
    }),
    l: common_vendor.p({
      radius: "96rpx",
      margin: ["24rpx"]
    }),
    m: common_vendor.p({
      ["btn-size"]: "medium"
    }),
    n: common_vendor.p({
      type: "warning",
      margin: ["24rpx"],
      ["btn-size"]: "small"
    }),
    o: common_vendor.p({
      type: "danger",
      ["btn-size"]: "mini"
    }),
    p: common_vendor.p({
      plain: true,
      color: "#465CFF",
      borderColor: "#465CFF"
    }),
    q: common_vendor.p({
      type: "purple",
      margin: ["24rpx"],
      width: "224rpx",
      height: "84rpx",
      size: 28
    }),
    r: common_vendor.p({
      type: "danger",
      width: "200rpx",
      height: "72rpx",
      size: 28
    }),
    s: common_vendor.p({
      background: "#fff",
      color: "#465CFF",
      borderColor: "#465CFF"
    }),
    t: common_vendor.p({
      margin: ["24rpx"],
      background: "#fff",
      color: "#6831FF",
      borderColor: "#6831FF"
    }),
    v: common_vendor.p({
      background: "linear-gradient(300deg, #6831FF 0%, #465CFF 100%)",
      ["border-width"]: "0"
    }),
    w: common_vendor.p({
      margin: ["24rpx"],
      background: "linear-gradient(127deg, #FF416C 0%, #FF2B2B 100%)",
      ["border-width"]: "0"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
