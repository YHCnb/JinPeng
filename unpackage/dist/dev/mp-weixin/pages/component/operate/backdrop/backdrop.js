"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false
    };
  },
  methods: {
    open() {
      this.show = true;
    },
    //关闭遮罩通过show进行控制
    close() {
      this.show = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_backdrop2 = common_vendor.resolveComponent("fui-backdrop");
  (_easycom_fui_button2 + _easycom_fui_backdrop2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_backdrop = () => "../../../../components/firstui/fui-backdrop/fui-backdrop.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_backdrop)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.open),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "打开遮罩层",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o($options.close),
    d: common_vendor.p({
      show: $data.show,
      closable: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
