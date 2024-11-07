"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  emits: ["click"],
  name: "fui-white-space",
  props: {
    //small、default、large 默认优先使用全局配置
    size: {
      type: String,
      default: ""
    },
    height: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: ""
    }
  },
  computed: {
    getSize() {
      const app = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiWhiteSpace;
      return this.size || app && app.size || "default";
    },
    getHeight() {
      let style = "";
      const app = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiWhiteSpace;
      const h = Number(String(this.height || app && app.height || 0).replace("rpx", ""));
      if (h && h > 0) {
        style += `height:${h}rpx;`;
      }
      return style;
    },
    getStyles() {
      const app = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiWhiteSpace;
      let style = `background:${this.background || app && app.background || "transparent"};`;
      style += this.getHeight;
      return style;
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n("fui-white__space-" + ($options.getHeight ? "" : $options.getSize)),
    b: common_vendor.s($options.getStyles),
    c: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5ce5c5a7"]]);
wx.createComponent(Component);
