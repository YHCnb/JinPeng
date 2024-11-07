"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  emits: ["click"],
  name: "fui-number",
  options: {
    virtualHost: true,
    addGlobalClass: true
  },
  props: {
    //数字值
    text: {
      type: [Number, String],
      default: ""
    },
    size: {
      type: [Number, String],
      default: 0
    },
    //rpx | px
    unit: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#333"
    },
    //字重
    fontWeight: {
      type: [Number, String],
      default: "normal"
    },
    //是否禁用点击
    disabled: {
      type: Boolean,
      default: false
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      default: false
    },
    //none、 underline、line-through
    decoration: {
      type: String,
      default: "none"
    },
    //是否将行高设置与字体大小一致
    lineHeight: {
      type: Boolean,
      default: false
    },
    params: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getSize() {
      const size = common_vendor.index.$fui && common_vendor.index.$fui.fuiNumber && common_vendor.index.$fui.fuiNumber.size || 32;
      const unit = common_vendor.index.$fui && common_vendor.index.$fui.fuiNumber && common_vendor.index.$fui.fuiNumber.unit || "rpx";
      return (this.size || size) + (this.unit || unit);
    },
    getColor() {
      let color = this.color;
      return color;
    }
  },
  methods: {
    handleClick() {
      if (this.disabled)
        return;
      this.$emit("click", {
        text: this.text,
        params: this.params
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.text),
    b: !$props.disabled && $props.highlight ? 1 : "",
    c: !$props.color || $props.color === true ? 1 : "",
    d: $options.getColor,
    e: $options.getSize,
    f: $props.fontWeight,
    g: $props.lineHeight ? $options.getSize : "auto",
    h: $props.decoration,
    i: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f7335a2d"]]);
wx.createComponent(Component);
