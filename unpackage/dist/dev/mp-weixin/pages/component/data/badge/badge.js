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
  const _easycom_fui_badge2 = common_vendor.resolveComponent("fui-badge");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_badge2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_badge = () => "../../../../components/firstui/fui-badge/fui-badge.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_badge + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: "1"
    }),
    b: common_vendor.p({
      type: "success",
      value: "2"
    }),
    c: common_vendor.p({
      type: "warning",
      value: "3"
    }),
    d: common_vendor.p({
      type: "danger",
      value: "4"
    }),
    e: common_vendor.p({
      type: "purple",
      value: "5"
    }),
    f: common_vendor.p({
      value: "6",
      background: "#eee",
      color: "#333"
    }),
    g: common_vendor.p({
      dot: true
    }),
    h: common_vendor.p({
      type: "success",
      dot: true
    }),
    i: common_vendor.p({
      type: "warning",
      dot: true
    }),
    j: common_vendor.p({
      type: "danger",
      dot: true
    }),
    k: common_vendor.p({
      type: "purple",
      dot: true
    }),
    l: common_vendor.p({
      highlight: false
    }),
    m: common_vendor.p({
      value: "1",
      type: "danger"
    }),
    n: common_vendor.p({
      arrow: true,
      topBorder: true
    }),
    o: common_vendor.p({
      dot: true,
      type: "danger"
    }),
    p: common_vendor.p({
      arrow: true
    }),
    q: common_vendor.p({
      type: "danger",
      marginLeft: 16,
      value: "8"
    }),
    r: common_vendor.p({
      arrow: true
    }),
    s: common_vendor.p({
      type: "danger",
      marginLeft: 16,
      value: "new"
    }),
    t: common_vendor.p({
      arrow: true,
      bottomLeft: 0
    }),
    v: common_assets._imports_0$3,
    w: common_vendor.p({
      absolute: true,
      type: "danger",
      value: "99+"
    }),
    x: common_vendor.p({
      topBorder: true
    }),
    y: common_assets._imports_0$3,
    z: common_vendor.p({
      absolute: true,
      type: "danger",
      dot: true
    }),
    A: common_vendor.p({
      bottomLeft: 0
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
