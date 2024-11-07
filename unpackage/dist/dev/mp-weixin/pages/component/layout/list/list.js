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
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_badge2 = common_vendor.resolveComponent("fui-badge");
  const _easycom_fui_list2 = common_vendor.resolveComponent("fui-list");
  (_easycom_fui_list_cell2 + _easycom_fui_badge2 + _easycom_fui_list2)();
}
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_badge = () => "../../../../components/firstui/fui-badge/fui-badge.js";
const _easycom_fui_list = () => "../../../../components/firstui/fui-list/fui-list.js";
if (!Math) {
  (_easycom_fui_list_cell + _easycom_fui_badge + _easycom_fui_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      arrow: true
    }),
    b: common_vendor.p({
      arrow: true
    }),
    c: common_vendor.p({
      value: "1",
      type: "danger"
    }),
    d: common_vendor.p({
      arrow: true,
      bottomLeft: 0
    }),
    e: common_vendor.p({
      highlight: false
    }),
    f: common_vendor.p({
      bottomBorder: false,
      highlight: false,
      arrow: true
    }),
    g: common_vendor.p({
      bottomBorder: true,
      title: "带标题的列表"
    }),
    h: common_assets._imports_0$4,
    i: common_vendor.p({
      topBorder: true
    }),
    j: common_assets._imports_0$4,
    k: common_assets._imports_0$4,
    l: common_vendor.p({
      arrow: true
    }),
    m: common_assets._imports_0$4,
    n: common_vendor.p({
      arrow: true,
      bottomLeft: 0
    }),
    o: common_assets._imports_0$4,
    p: common_vendor.p({
      topBorder: true,
      bottomLeft: 104
    }),
    q: common_assets._imports_0$4,
    r: common_vendor.p({
      bottomLeft: 0
    }),
    s: common_assets._imports_0$4,
    t: common_vendor.p({
      bottomRight: 32
    }),
    v: common_assets._imports_0$4,
    w: common_vendor.p({
      bottomBorder: false
    }),
    x: common_assets._imports_0$4,
    y: common_vendor.p({
      bottomBorder: false,
      arrow: true
    }),
    z: common_assets._imports_0$4,
    A: common_vendor.p({
      bottomBorder: false,
      arrow: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
