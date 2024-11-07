"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      //百度小程序循环数字有问题
      nums: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      arrs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    };
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_fui_grid_item2 = common_vendor.resolveComponent("fui-grid-item");
  const _easycom_fui_grid2 = common_vendor.resolveComponent("fui-grid");
  (_easycom_fui_grid_item2 + _easycom_fui_grid2)();
}
const _easycom_fui_grid_item = () => "../../../../components/firstui/fui-grid-item/fui-grid-item.js";
const _easycom_fui_grid = () => "../../../../components/firstui/fui-grid/fui-grid.js";
if (!Math) {
  (_easycom_fui_grid_item + _easycom_fui_grid)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.nums, (item, index, i0) => {
      return {
        a: index,
        b: "477ef724-1-" + i0 + ",477ef724-0"
      };
    }),
    b: common_assets._imports_0$3,
    c: common_vendor.f($data.nums, (item, index, i0) => {
      return {
        a: index,
        b: "477ef724-3-" + i0 + ",477ef724-2"
      };
    }),
    d: common_assets._imports_1$1,
    e: common_vendor.p({
      square: false
    }),
    f: common_vendor.f($data.arrs, (item, index, i0) => {
      return {
        a: index,
        b: "477ef724-5-" + i0 + ",477ef724-4"
      };
    }),
    g: common_assets._imports_1$1,
    h: common_vendor.p({
      columns: 4
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
