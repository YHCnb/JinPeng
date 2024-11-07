"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      val: 1,
      inputVal: ""
    };
  },
  methods: {
    change(e) {
      this.inputVal = e.value;
    }
  }
};
if (!Array) {
  const _easycom_fui_input_number2 = common_vendor.resolveComponent("fui-input-number");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_input_number2 + _easycom_fui_icon2)();
}
const _easycom_fui_input_number = () => "../../../../components/firstui/fui-input-number/fui-input-number.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_input_number + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      signColor: "#FFB703",
      value: "1.1",
      modelValue: "1.1"
    }),
    b: common_vendor.p({
      backgroundColor: "#F1F4FA"
    }),
    c: common_vendor.p({
      name: "minussign",
      size: 48,
      color: "#FFB703"
    }),
    d: common_vendor.p({
      name: "plussign-fill",
      size: 48,
      color: "#FFB703"
    }),
    e: common_vendor.p({
      custom: true,
      backgroundColor: "#FFF",
      size: 30,
      width: 60,
      margin: "0"
    }),
    f: common_vendor.t($data.val),
    g: common_vendor.o(($event) => $data.val = $event),
    h: common_vendor.p({
      modelValue: $data.val
    }),
    i: common_vendor.p({
      min: -9,
      max: 9
    }),
    j: common_vendor.p({
      step: 0.1
    }),
    k: common_vendor.p({
      disabled: true
    }),
    l: common_vendor.t($data.inputVal),
    m: common_vendor.o($options.change),
    n: common_vendor.p({
      type: "text",
      min: -99
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
