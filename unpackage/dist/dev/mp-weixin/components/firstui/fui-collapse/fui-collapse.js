"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-collapse",
  emits: ["change"],
  props: {
    // 是否开启手风琴效果
    accordion: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: "transparent"
    }
  },
  created() {
    this.children = [];
  },
  methods: {
    collapseChange(obj, isOpen, idx) {
      if (this.accordion && isOpen) {
        this.children.forEach((item, index) => {
          if (item !== obj) {
            item.isOpen = false;
          }
        });
      }
      this.$emit("change", {
        index: idx,
        isOpen
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.background
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-90b150a9"]]);
wx.createComponent(Component);
