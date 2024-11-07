"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-wing-blank",
  emits: ["click"],
  props: {
    //small、default、large
    size: {
      type: String,
      default: ""
    },
    gap: {
      type: [Number, String],
      default: 0
    },
    background: {
      type: String,
      default: ""
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getSize() {
      const app = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiWingBlank;
      return this.size || app && app.size || "default";
    },
    getPadding() {
      let styles = "";
      const app = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiWingBlank;
      const padding = Number(this.gap || app && app.gap || 0);
      if (padding && padding > 0) {
        styles += `padding:0 ${padding}rpx;`;
      }
      return styles;
    },
    getStyles() {
      const app = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiWingBlank;
      let styles = `background:${this.background || app && app.background || "transparent"};border-radius:${this.radius}rpx;margin-top:${this.marginTop}rpx;margin-bottom:${this.marginBottom}rpx;`;
      styles += this.getPadding;
      return styles;
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
    a: common_vendor.n($props.radius ? "fui-wing__blank-hidden" : ""),
    b: common_vendor.n($options.getPadding ? "" : `fui-wing__blank-${$options.getSize}`),
    c: common_vendor.s($options.getStyles),
    d: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0c14cef3"]]);
wx.createComponent(Component);
