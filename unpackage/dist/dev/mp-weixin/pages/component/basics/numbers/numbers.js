"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    onTap(e) {
      console.log(e);
      this.fui.toast(String(e.text));
    }
  }
};
if (!Array) {
  const _easycom_fui_number2 = common_vendor.resolveComponent("fui-number");
  _easycom_fui_number2();
}
const _easycom_fui_number = () => "../../../../components/firstui/fui-number/fui-number.js";
if (!Math) {
  _easycom_fui_number();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "1234567890.00"
    }),
    b: common_vendor.p({
      text: "200",
      color: "#465CFF"
    }),
    c: common_vendor.p({
      text: "123",
      color: "#FFB703",
      size: "24"
    }),
    d: common_vendor.p({
      text: "678",
      color: "#FFB703",
      size: "48"
    }),
    e: common_vendor.o($options.onTap),
    f: common_vendor.p({
      text: 520,
      color: "#09BE4F",
      size: "64",
      fontWeight: "bold",
      highlight: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
