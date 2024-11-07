"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_wing_blank2 = common_vendor.resolveComponent("fui-wing-blank");
  _easycom_fui_wing_blank2();
}
const _easycom_fui_wing_blank = () => "../../../../components/firstui/fui-wing-blank/fui-wing-blank.js";
if (!Math) {
  _easycom_fui_wing_blank();
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
      gap: "64"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
