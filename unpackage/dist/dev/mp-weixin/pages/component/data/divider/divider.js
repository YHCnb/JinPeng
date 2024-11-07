"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_divider2 = common_vendor.resolveComponent("fui-divider");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_divider2 + _easycom_fui_icon2)();
}
const _easycom_fui_divider = () => "../../../../components/firstui/fui-divider/fui-divider.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_divider + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "没有更多了"
    }),
    b: common_vendor.p({
      dividerColor: "#465CFF",
      text: "没有更多了"
    }),
    c: common_vendor.p({
      dividerColor: "#FFB703",
      color: "#FFB703",
      text: "没有更多了"
    }),
    d: common_vendor.p({
      dividerColor: "#09BE4F",
      color: "#09BE4F",
      width: "100%",
      text: "没有更多了"
    }),
    e: common_vendor.p({
      dividerColor: "linear-gradient(to right,#eee,#ccc,#ccc,#eee)",
      text: "没有更多了"
    }),
    f: common_vendor.p({
      text: "已加载完全部数据"
    }),
    g: common_vendor.p({
      name: "like",
      color: "#FF2B2B",
      size: 40
    }),
    h: common_vendor.p({
      name: "fabulous",
      color: "#FFB703",
      size: 40
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
