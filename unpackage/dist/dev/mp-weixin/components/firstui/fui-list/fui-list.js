"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-list",
  props: {
    //fui-list margin-top值,单位rpx
    marginTop: {
      type: [Number, String],
      default: 0
    },
    //标题
    title: {
      type: String,
      default: ""
    },
    //标题颜色
    color: {
      type: String,
      default: "#7F7F7F"
    },
    //标题字体大小 单位rpx
    size: {
      type: [Number, String],
      default: 28
    },
    //标题padding值['32rpx','32rpx','20rpx','32rpx'] 上、右、下、左
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx", "20rpx", "32rpx"];
      }
    },
    //标题背景色
    background: {
      type: String,
      default: "transparent"
    },
    //底部说明文字
    footer: {
      type: String,
      default: ""
    },
    //底部说明文字颜色
    footerColor: {
      type: String,
      default: "#7F7F7F"
    },
    //底部说明文字大小 单位rpx
    footerSize: {
      type: [Number, String],
      default: 28
    },
    //底部说明文本padding值['20rpx','32rpx','0','32rpx'] 上、右、下、左
    footerPadding: {
      type: Array,
      default() {
        return ["20rpx", "32rpx", "0"];
      }
    },
    //是否显示上边框
    topBorder: {
      type: Boolean,
      default: true
    },
    //是否显示下边框
    bottomBorder: {
      type: Boolean,
      default: false
    },
    //边框颜色，非nvue下传值则全局默认样式失效
    borderColor: {
      type: String,
      default: ""
    },
    //上边框left值，单位rpx
    topLeft: {
      type: [Number, String],
      default: 0
    },
    //上边框right值，单位rpx
    topRight: {
      type: [Number, String],
      default: 0
    },
    //下边框left值，单位rpx
    bottomLeft: {
      type: [Number, String],
      default: 0
    },
    //下边框right值，单位rpx
    bottomRight: {
      type: [Number, String],
      default: 0
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.title
  }, $props.title ? {
    b: common_vendor.t($props.title),
    c: $props.color,
    d: $props.size + "rpx",
    e: $props.padding[0] || 0,
    f: $props.padding[1] || 0,
    g: $props.padding[2] || $props.padding[0] || 0,
    h: $props.padding[3] || $props.padding[1] || 0,
    i: $props.background
  } : {}, {
    j: $props.topBorder
  }, $props.topBorder ? {
    k: $props.borderColor,
    l: $props.topLeft + "rpx",
    m: $props.topRight + "rpx",
    n: !$props.borderColor ? 1 : ""
  } : {}, {
    o: $props.bottomBorder
  }, $props.bottomBorder ? {
    p: $props.borderColor,
    q: $props.bottomLeft + "rpx",
    r: $props.bottomRight + "rpx",
    s: !$props.borderColor ? 1 : ""
  } : {}, {
    t: $props.footer
  }, $props.footer ? {
    v: common_vendor.t($props.footer),
    w: $props.footerColor,
    x: $props.footerSize + "rpx",
    y: $props.footerPadding[0] || 0,
    z: $props.footerPadding[1] || 0,
    A: $props.footerPadding[2] || $props.footerPadding[0] || 0,
    B: $props.footerPadding[3] || $props.footerPadding[1] || 0
  } : {}, {
    C: $props.marginTop + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-492c3973"]]);
wx.createComponent(Component);
