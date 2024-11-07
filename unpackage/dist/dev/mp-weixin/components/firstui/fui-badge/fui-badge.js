"use strict";
const common_vendor = require("../../../common/vendor.js");
common_vendor.index.getSystemInfoSync();
const _sfc_main = {
  name: "fui-badge",
  emits: ["click"],
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    max: {
      type: [Number, String],
      default: -1
    },
    //类型：primary，success，warning，danger，purple，white
    type: {
      type: String,
      default: "primary"
    },
    //背景色，如果设置背景则type失效
    background: {
      type: String,
      default: ""
    },
    //字体颜色
    color: {
      type: String,
      default: "#FFFFFF"
    },
    //是否显示为圆点
    dot: {
      type: Boolean,
      default: false
    },
    //margin-top值，单位rpx
    marginTop: {
      type: [Number, String],
      default: 0
    },
    //margin-left值，单位rpx
    marginLeft: {
      type: [Number, String],
      default: 0
    },
    //margin-right值，单位rpx
    marginRight: {
      type: [Number, String],
      default: 0
    },
    //是否绝对定位
    absolute: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: "-8rpx"
    },
    right: {
      type: String,
      default: "-18rpx"
    },
    //缩放比例
    scaleRatio: {
      type: Number,
      default: 1
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      width: 0,
      showValue: ""
    };
  },
  computed: {
    getBgColor() {
      let color = this.background;
      return color;
    }
  },
  watch: {
    value(val) {
      this.getWidth();
    }
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    _getTextWidth(text) {
      let sum = 0;
      for (let i = 0, len = text.length; i < len; i++) {
        if (text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 255)
          sum = sum + 1;
        else
          sum = sum + 2;
      }
      const px = common_vendor.index.upx2px(text.length > 1 ? 32 : 24);
      var strCode = text.charCodeAt();
      let multiplier = 12;
      if (strCode >= 65 && strCode <= 90) {
        multiplier = 15;
      }
      return sum / 2 * multiplier + px + "px";
    },
    getWidth() {
      let max = Number(this.max);
      let val = Number(this.value);
      let value = "";
      if (isNaN(val) || max === -1) {
        value = this.value;
      } else {
        value = val > max ? `${max}+` : val;
      }
      this.showValue = value;
      this.width = this.dot ? "8px" : this._getTextWidth(String(value));
    },
    handleClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.showValue || $props.dot
  }, $data.showValue || $props.dot ? {
    b: common_vendor.t($props.dot ? "" : $data.showValue),
    c: common_vendor.n($props.dot ? "fui-badge__dot" : "fui-badge__wrap"),
    d: common_vendor.n($props.background ? "" : "fui-badge__bg-" + $props.type),
    e: common_vendor.n($props.absolute ? "fui-badge__absolute" : ""),
    f: common_vendor.n($props.scaleRatio != 1 && $data.isNvue ? "fui-badge__trans-origin" : ""),
    g: common_vendor.n(!$props.background && $props.type === "white" ? "fui-badge__text-color" : ""),
    h: $props.absolute ? $props.top : "auto",
    i: $props.absolute ? $props.right : "auto",
    j: $props.scaleRatio,
    k: $data.isNvue ? `scale(${$props.scaleRatio})` : "scale(1)",
    l: $props.marginTop + "rpx",
    m: $props.marginLeft + "rpx",
    n: $props.marginRight + "rpx",
    o: $data.width,
    p: $props.color,
    q: $options.getBgColor,
    r: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d3d4490c"]]);
wx.createComponent(Component);
