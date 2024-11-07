"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      values: ["segmented1", "segmented2"],
      //name为约定属性，其他可自定义
      values2: [{
        id: 1,
        name: "segmented1"
      }, {
        id: 2,
        name: "segmented2"
      }, {
        id: 3,
        name: "segmented3"
      }],
      values3: [{
        name: "segmented1"
      }, {
        name: "segmented2",
        disabled: true
      }, {
        name: "segmented3"
      }]
    };
  },
  methods: {
    itemClick(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_segmented_control2 = common_vendor.resolveComponent("fui-segmented-control");
  _easycom_fui_segmented_control2();
}
const _easycom_fui_segmented_control = () => "../../../../components/firstui/fui-segmented-control/fui-segmented-control.js";
if (!Math) {
  _easycom_fui_segmented_control();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.itemClick),
    b: common_vendor.p({
      values: $data.values
    }),
    c: common_vendor.p({
      values: $data.values,
      marginTop: "24",
      color: "#FF2B2B"
    }),
    d: common_vendor.p({
      values: $data.values,
      marginTop: "24",
      color: "#FFB703"
    }),
    e: common_vendor.p({
      values: $data.values,
      marginTop: "24",
      color: "#09BE4F"
    }),
    f: common_vendor.p({
      values: $data.values,
      marginTop: "24",
      color: "#6831FF"
    }),
    g: common_vendor.p({
      values: $data.values,
      marginTop: "24",
      color: "#333333"
    }),
    h: common_vendor.p({
      values: $data.values,
      marginTop: "24",
      color: "#333",
      activeColor: "#FFB703",
      type: "text",
      height: "100",
      size: "32"
    }),
    i: common_vendor.o($options.itemClick),
    j: common_vendor.p({
      values: $data.values2
    }),
    k: common_vendor.p({
      values: $data.values2,
      disabled: true
    }),
    l: common_vendor.p({
      values: $data.values2,
      current: 1
    }),
    m: common_vendor.p({
      values: $data.values2,
      radius: 100
    }),
    n: common_vendor.p({
      values: $data.values3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
