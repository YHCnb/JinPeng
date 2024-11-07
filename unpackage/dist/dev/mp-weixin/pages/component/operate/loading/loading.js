"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_loading2 = common_vendor.resolveComponent("fui-loading");
  _easycom_fui_loading2();
}
const _easycom_fui_loading = () => "../../../../components/firstui/fui-loading/fui-loading.js";
if (!Math) {
  _easycom_fui_loading();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "row",
      isFixed: false
    }),
    b: common_vendor.p({
      isFixed: false
    }),
    c: common_vendor.p({
      type: "row",
      isFixed: false,
      srcRow: "/static/images/component/loading_gray.png",
      text: "正在加载..."
    }),
    d: common_vendor.p({
      isFixed: false,
      srcCol: "/static/images/component/loading_white.png",
      text: "正在加载..."
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
