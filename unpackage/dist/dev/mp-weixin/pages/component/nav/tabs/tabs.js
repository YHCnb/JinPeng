"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //数据格式一
      tabs: ["热门推荐", "新时代", "懂球帝"],
      //数据格式二：name（必选）、badge（可选）、disabled（可选）为约定属性，其他属性可自行定义
      tabs2: [{
        name: "标签一"
      }, {
        name: "标签二"
      }, {
        name: "标签三",
        badge: 1
      }, {
        name: "标签四"
      }, {
        name: "标签五"
      }, {
        name: "标签六"
      }, {
        name: "标签七"
      }, {
        name: "标签八",
        disabled: true
      }, {
        name: "标签九"
      }]
    };
  },
  onLoad() {
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_tabs2 = common_vendor.resolveComponent("fui-tabs");
  _easycom_fui_tabs2();
}
const _easycom_fui_tabs = () => "../../../../components/firstui/fui-tabs/fui-tabs.js";
if (!Math) {
  _easycom_fui_tabs();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.p({
      tabs: $data.tabs
    }),
    c: common_vendor.o($options.change),
    d: common_vendor.p({
      tabs: $data.tabs,
      center: true
    }),
    e: common_vendor.p({
      tabs: $data.tabs,
      selectedColor: "#FFB703",
      sliderBackground: "#FFB703"
    }),
    f: common_vendor.p({
      tabs: $data.tabs,
      short: false
    }),
    g: common_vendor.p({
      tabs: $data.tabs2,
      isDot: true,
      scroll: true,
      alignLeft: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
