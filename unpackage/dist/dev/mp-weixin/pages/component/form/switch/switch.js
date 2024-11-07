"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      status: false,
      isOpen: false,
      isOpen2: false
    };
  },
  methods: {
    change(e) {
      this.status = e.detail.value;
    },
    change2(e) {
      this.isOpen = e.detail.value;
    },
    change3(e) {
      this.isOpen2 = e.detail.value;
    }
  }
};
if (!Array) {
  const _easycom_fui_switch2 = common_vendor.resolveComponent("fui-switch");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  (_easycom_fui_switch2 + _easycom_fui_list_cell2 + _easycom_fui_label2)();
}
const _easycom_fui_switch = () => "../../../../components/firstui/fui-switch/fui-switch.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_label = () => "../../../../components/firstui/fui-label/fui-label.js";
if (!Math) {
  (_easycom_fui_switch + _easycom_fui_list_cell + _easycom_fui_label)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.status ? "ON" : "OFF"),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      highlight: false,
      padding: ["28rpx", "32rpx"]
    }),
    d: common_vendor.t($data.isOpen ? "ON" : "OFF"),
    e: common_vendor.o($options.change2),
    f: common_vendor.p({
      highlight: false,
      padding: ["28rpx", "32rpx"]
    }),
    g: `/static/images/component/icon_${$data.isOpen2 ? "moon" : "sun"}.png`,
    h: common_vendor.o($options.change3),
    i: common_vendor.p({
      btnColor: "#3d3d3d",
      color: "#2C2C2C"
    }),
    j: common_vendor.p({
      highlight: false,
      padding: ["28rpx", "32rpx"]
    }),
    k: common_vendor.p({
      checked: true
    }),
    l: common_vendor.p({
      highlight: false,
      padding: ["28rpx", "32rpx"]
    }),
    m: common_vendor.p({
      checked: true,
      disabled: true
    }),
    n: common_vendor.p({
      highlight: false,
      padding: ["28rpx", "32rpx"]
    }),
    o: common_vendor.p({
      scaleRatio: 0.8,
      color: "#FFB703"
    }),
    p: common_vendor.p({
      type: "checkbox",
      color: "#FFB703",
      scaleRatio: 1.1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
