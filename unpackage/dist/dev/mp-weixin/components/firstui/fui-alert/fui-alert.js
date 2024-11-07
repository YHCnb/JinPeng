"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-alert",
  emits: ["leftClick", "click", "close"],
  props: {
    //info, success, warn, waiting,clear
    type: {
      type: String,
      default: ""
    },
    //背景色，如果设置type对应颜色失效
    background: {
      type: String,
      default: ""
    },
    //padding值：[上，右，下，左]
    padding: {
      type: Array,
      default() {
        return ["20rpx", "32rpx"];
      }
    },
    //margin-top值，单位rpx
    marginTop: {
      type: [Number, String],
      default: 0
    },
    //margin-bottom值，单位rpx
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    //圆角
    radius: {
      type: String,
      default: "16rpx"
    },
    //icon颜色
    iconColor: {
      type: String,
      default: "#fff"
    },
    //icon字体大小，px
    iconSize: {
      type: Number,
      default: 22
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeColor: {
      type: String,
      default: "#fff"
    },
    //关闭icon字体大小，px
    closeSize: {
      type: Number,
      default: 22
    },
    //是否自定义左侧内容,默认图标失效
    isLeft: {
      type: Boolean,
      default: false
    },
    //内容是否与图标之间有间隔，isLeft为true时生效
    spacing: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "#fff"
    },
    size: {
      type: String,
      default: "14px"
    },
    desc: {
      type: String,
      default: ""
    },
    descColor: {
      type: String,
      default: "#fff"
    },
    descSize: {
      type: String,
      default: "12px"
    },
    //描述文字单行展示，超出隐藏
    single: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getColor(type) {
      const app = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.color;
      const color = app && app.primary || "#465CFF";
      const colors = {
        "success": app && app.success || "#09BE4F",
        "warn": app && app.warning || "#FFB703",
        "clear": app && app.danger || "#FF2B2B"
      };
      return colors[type] ? colors[type] : color;
    },
    leftClick() {
      this.$emit("leftClick", {});
    },
    onClick() {
      this.$emit("click", {});
    },
    close() {
      this.$emit("close", {});
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.isLeft && $props.type && $props.type !== "true"
  }, !$props.isLeft && $props.type && $props.type !== "true" ? {
    b: $props.type,
    c: $props.iconSize,
    d: $props.iconColor
  } : {}, {
    e: common_vendor.o((...args) => $options.leftClick && $options.leftClick(...args)),
    f: $props.title
  }, $props.title ? {
    g: common_vendor.t($props.title),
    h: $props.size,
    i: $props.color
  } : {}, {
    j: $props.desc
  }, $props.desc ? {
    k: common_vendor.t($props.desc),
    l: $props.single ? 1 : "",
    m: $props.descSize,
    n: $props.descColor
  } : {}, {
    o: !$props.isLeft && $props.type && $props.type !== "true" || $props.spacing && $props.isLeft ? 1 : "",
    p: $props.closable ? 1 : "",
    q: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    r: $props.closable
  }, $props.closable ? {
    s: common_vendor.o((...args) => $options.close && $options.close(...args)),
    t: $props.closeSize,
    v: $props.closeColor,
    w: $props.desc ? 1 : ""
  } : {}, {
    x: common_vendor.n($props.background ? "" : "fui-alert__" + $props.type),
    y: $props.background || $options.getColor($props.type),
    z: $props.radius,
    A: $props.padding[0] || 0,
    B: $props.padding[1] || 0,
    C: $props.padding[2] || $props.padding[0] || 0,
    D: $props.padding[3] || $props.padding[1] || 0,
    E: $props.marginTop + "rpx",
    F: $props.marginBottom + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0c953c23"]]);
wx.createComponent(Component);
