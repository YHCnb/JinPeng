"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_pagination2 = common_vendor.resolveComponent("fui-pagination");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_pagination2 + _easycom_fui_icon2)();
}
const _easycom_fui_pagination = () => "../../../../components/firstui/fui-pagination/fui-pagination.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_pagination + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.p({
      total: 100
    }),
    c: common_vendor.p({
      total: 100,
      color: "#FFB703",
      background: "transparent",
      currentColor: "#FFB703"
    }),
    d: common_vendor.p({
      name: "arrowleft"
    }),
    e: common_vendor.p({
      name: "arrowright"
    }),
    f: common_vendor.p({
      total: 100,
      custom: true,
      background: "transparent"
    }),
    g: common_vendor.p({
      total: 1e3,
      pageType: 2
    }),
    h: common_vendor.p({
      size: 40,
      name: "arrowleft",
      color: "#fff"
    }),
    i: common_vendor.p({
      size: 40,
      name: "arrowright",
      color: "#fff"
    }),
    j: common_vendor.p({
      total: 1e3,
      custom: true,
      pageType: 2,
      width: 62,
      background: "#FFB703",
      pageBgColor: "rgba(255, 183, 3, .1)",
      activeBgColor: "#FFB703"
    }),
    k: common_vendor.p({
      size: 40,
      name: "arrowleft",
      color: "#fff"
    }),
    l: common_vendor.p({
      size: 40,
      name: "arrowright",
      color: "#fff"
    }),
    m: common_vendor.p({
      total: 1e3,
      custom: true,
      pageType: 2,
      width: 60,
      background: "#09BE4F",
      pageBgColor: "rgba(9, 190, 79, .05)",
      activeBgColor: "#09BE4F"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
