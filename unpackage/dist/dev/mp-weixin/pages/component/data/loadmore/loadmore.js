"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_loadmore2 = common_vendor.resolveComponent("fui-loadmore");
  _easycom_fui_loadmore2();
}
const _easycom_fui_loadmore = () => "../../../../components/firstui/fui-loadmore/fui-loadmore.js";
if (!Math) {
  _easycom_fui_loadmore();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      activeColor: "#FFB703"
    }),
    b: common_vendor.p({
      iconColor: "rgba(255, 183, 3, .2)",
      activeColor: "#FFB703",
      color: "#FFB703"
    }),
    c: common_vendor.p({
      direction: "col",
      text: "加载中",
      color: "#465CFF"
    }),
    d: common_vendor.p({
      src: "/static/images/component/loading_gray.png",
      iconWidth: 36,
      text: "加载中..."
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
