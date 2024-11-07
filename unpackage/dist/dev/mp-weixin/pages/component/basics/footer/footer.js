"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      navigate: [{
        text: "底部链接",
        openType: "navigateBack"
      }],
      navigate2: [{
        text: "底部链接",
        openType: "navigateBack"
      }, {
        text: "底部链接",
        openType: "navigateBack"
      }]
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_fui_footer2 = common_vendor.resolveComponent("fui-footer");
  _easycom_fui_footer2();
}
const _easycom_fui_footer = () => "../../../../components/firstui/fui-footer/fui-footer.js";
if (!Math) {
  _easycom_fui_footer();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "Copyright © 2021 firstui.cn"
    }),
    b: common_vendor.p({
      navigate: $data.navigate,
      text: "Copyright © 2021 firstui.cn"
    }),
    c: common_vendor.p({
      navigate: $data.navigate2,
      text: "Copyright © 2021 firstui.cn"
    }),
    d: common_vendor.p({
      isFixed: true,
      navigate: $data.navigate,
      text: "Copyright © 2021 firstui.cn"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
