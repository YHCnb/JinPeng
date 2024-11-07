"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-divider",
  props: {
    text: {
      type: String,
      default: ""
    },
    //divider占据高度，单位rpx
    height: {
      type: [Number, String],
      default: 100
    },
    //divider宽度
    width: {
      type: String,
      default: "400rpx"
    },
    //divider颜色
    dividerColor: {
      type: String,
      default: "#CCCCCC"
    },
    //文字颜色
    color: {
      type: String,
      default: "#B2B2B2"
    },
    //文字大小 rpx
    size: {
      type: [Number, String],
      default: 24
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.dividerColor,
    b: $props.text
  }, $props.text ? {
    c: common_vendor.t($props.text),
    d: $props.fontWeight,
    e: $props.color,
    f: $props.size + "rpx",
    g: $props.size + "rpx"
  } : {}, {
    h: $props.dividerColor,
    i: $props.width,
    j: $props.height + "rpx",
    k: $props.height + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a128a94"]]);
wx.createComponent(Component);
