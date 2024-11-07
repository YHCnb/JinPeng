"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      gutter: 0
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_col2 = common_vendor.resolveComponent("fui-col");
  const _easycom_fui_row2 = common_vendor.resolveComponent("fui-row");
  (_easycom_fui_col2 + _easycom_fui_row2)();
}
const _easycom_fui_col = () => "../../../../components/firstui/fui-col/fui-col.js";
const _easycom_fui_row = () => "../../../../components/firstui/fui-row/fui-row.js";
if (!Math) {
  (_easycom_fui_col + _easycom_fui_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["margin-bottom"]: "24rpx"
    }),
    b: common_vendor.p({
      span: 12
    }),
    c: common_vendor.p({
      span: 12
    }),
    d: common_vendor.p({
      ["margin-bottom"]: "24rpx"
    }),
    e: common_vendor.p({
      span: 8
    }),
    f: common_vendor.p({
      span: 8
    }),
    g: common_vendor.p({
      span: 8
    }),
    h: common_vendor.p({
      marginBottom: "24rpx"
    }),
    i: common_vendor.p({
      span: 6
    }),
    j: common_vendor.p({
      span: 6
    }),
    k: common_vendor.p({
      span: 6
    }),
    l: common_vendor.p({
      span: 6
    }),
    m: common_vendor.p({
      marginBottom: "24rpx"
    }),
    n: common_vendor.p({
      span: 4
    }),
    o: common_vendor.p({
      span: 4
    }),
    p: common_vendor.p({
      span: 4
    }),
    q: common_vendor.p({
      span: 4
    }),
    r: common_vendor.p({
      span: 4
    }),
    s: common_vendor.p({
      span: 4
    }),
    t: common_vendor.p({
      marginBottom: "24rpx"
    }),
    v: common_vendor.p({
      span: 8
    }),
    w: common_vendor.p({
      span: 8
    }),
    x: common_vendor.p({
      span: 4
    }),
    y: common_vendor.p({
      span: 4
    }),
    z: common_vendor.p({
      marginBottom: "24rpx",
      gutter: $data.gutter
    }),
    A: common_vendor.p({
      span: 4
    }),
    B: common_vendor.p({
      span: 16
    }),
    C: common_vendor.p({
      span: 4
    }),
    D: common_vendor.p({
      marginBottom: "24rpx",
      gutter: $data.gutter
    }),
    E: common_vendor.p({
      span: 8
    }),
    F: common_vendor.p({
      span: 8,
      offset: 6
    }),
    G: common_vendor.p({
      marginBottom: "10px",
      gutter: $data.gutter
    }),
    H: common_vendor.p({
      span: 6,
      offset: 6
    }),
    I: common_vendor.p({
      span: 6,
      offset: 6
    }),
    J: common_vendor.p({
      marginBottom: "10px",
      gutter: $data.gutter
    }),
    K: common_vendor.p({
      span: 12,
      pullRight: 0
    }),
    L: common_vendor.p({
      span: 6,
      pushLeft: 6
    }),
    M: common_vendor.p({
      marginBottom: "10px",
      gutter: $data.gutter
    }),
    N: common_vendor.p({
      span: 12,
      offset: 6
    }),
    O: common_vendor.p({
      marginBottom: "24rpx",
      gutter: $data.gutter
    }),
    P: common_vendor.p({
      xs: 8,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 1
    }),
    Q: common_vendor.p({
      xs: 4,
      sm: 6,
      md: 8,
      lg: 9,
      xl: 11
    }),
    R: common_vendor.p({
      xs: 4,
      sm: 6,
      md: 8,
      lg: 9,
      xl: 11
    }),
    S: common_vendor.p({
      xs: 8,
      sm: 6,
      md: 4,
      lg: 3,
      xl: 1
    }),
    T: common_vendor.p({
      marginBottom: "24rpx",
      gutter: $data.gutter
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
