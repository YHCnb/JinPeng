"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-swipeaction-group",
  data() {
    return {};
  },
  created() {
    this.children = [];
  },
  methods: {
    reset() {
    },
    close() {
      this.children.forEach((child) => {
        child.isShow = false;
      });
    },
    closeAuto(child) {
      this.children.forEach((item) => {
        if (item !== child) {
          item.isShow = false;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
