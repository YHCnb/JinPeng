"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text: ""
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_textarea2 = common_vendor.resolveComponent("fui-textarea");
  _easycom_fui_textarea2();
}
const _easycom_fui_textarea = () => "../../../../components/firstui/fui-textarea/fui-textarea.js";
if (!Math) {
  _easycom_fui_textarea();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      placeholder: "请输入内容"
    }),
    b: common_vendor.p({
      flexStart: true,
      label: "标题",
      placeholder: "请输入内容"
    }),
    c: common_vendor.p({
      required: true,
      height: "40rpx",
      label: "标题",
      placeholder: "请输入内容"
    }),
    d: common_vendor.o(($event) => $data.text = $event),
    e: common_vendor.p({
      isCounter: true,
      placeholder: "请输入内容",
      modelValue: $data.text
    }),
    f: common_vendor.p({
      textareaBorder: true,
      placeholder: "请输入简介"
    }),
    g: common_vendor.p({
      radius: 24,
      ["background-color"]: "#f8f8f8",
      placeholder: "请输入内容"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
