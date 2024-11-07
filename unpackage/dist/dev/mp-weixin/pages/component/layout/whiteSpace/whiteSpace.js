"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_white_space2 = common_vendor.resolveComponent("fui-white-space");
  _easycom_fui_white_space2();
}
const _easycom_fui_white_space = () => "../../../../components/firstui/fui-white-space/fui-white-space.js";
if (!Math) {
  _easycom_fui_white_space();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: "small"
    }),
    b: common_vendor.p({
      size: "default"
    }),
    c: common_vendor.p({
      size: "large"
    }),
    d: common_vendor.p({
      height: "10"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
