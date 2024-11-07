"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-card",
  emits: ["click"],
  props: {
    //card margin值：[上、右、下、左]
    margin: {
      type: Array,
      default() {
        return ["0", "32rpx"];
      }
    },
    //是否通栏，为true时margin-left，margin-right失效
    full: {
      type: Boolean,
      default: false
    },
    //card 背景色
    background: {
      type: String,
      default: "#fff"
    },
    //card 圆角，非nvue下showBorder为false时生效
    radius: {
      type: String,
      default: "16rpx"
    },
    //阴影：nvue下，android无效
    shadow: {
      type: String,
      default: "0 2rpx 4rpx 0 rgba(2, 4, 38, 0.05)"
    },
    //仅android且nvue下有效，box-shadow失效
    elevation: {
      type: String,
      default: "5px"
    },
    //是否显示card 边框，为true时box-shadow失效
    showBorder: {
      type: Boolean,
      default: false
    },
    //边框颜色，仅nvue下生效
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    headerBackground: {
      type: String,
      default: "#fff"
    },
    //是否需要header底部线条
    headerLine: {
      type: Boolean,
      default: true
    },
    //是否需要内容与footer之间线条
    footerLine: {
      type: Boolean,
      default: false
    },
    //header 底部线条颜色，仅nvue有效，非nvue改变颜色使用css变量
    lineColor: {
      type: String,
      default: "#EEEEEE"
    },
    //header padding值：[上、右、下、左]
    padding: {
      type: Array,
      default() {
        return ["20rpx", "20rpx"];
      }
    },
    //头像，图标图片地址
    src: {
      type: String,
      default: ""
    },
    //图片宽度，单位rpx
    width: {
      type: [Number, String],
      default: 64
    },
    //图片高度，单位rpx
    height: {
      type: [Number, String],
      default: 64
    },
    //图片圆角
    imageRadius: {
      type: String,
      default: "8rpx"
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 30
    },
    color: {
      type: String,
      default: "#7F7F7F"
    },
    tag: {
      type: String,
      default: ""
    },
    tagSize: {
      type: [Number, String],
      default: 24
    },
    tagColor: {
      type: String,
      default: "#b2b2b2"
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue
    };
  },
  methods: {
    handleClick() {
      this.$emit("click", {
        index: this.index
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.tag || $props.title || $props.src
  }, $props.tag || $props.title || $props.src ? common_vendor.e({
    b: $props.src
  }, $props.src ? {
    c: $props.src,
    d: $props.height + "rpx",
    e: $props.width + "rpx",
    f: $props.imageRadius
  } : {}, {
    g: $props.title
  }, $props.title ? {
    h: common_vendor.t($props.title),
    i: $props.size + "rpx",
    j: $props.color
  } : {}, {
    k: $props.tag
  }, $props.tag ? {
    l: common_vendor.t($props.tag),
    m: $props.tagSize + "rpx",
    n: $props.tagColor
  } : {}, {
    o: $props.headerLine ? 1 : "",
    p: $props.full ? 0 : $props.radius,
    q: $props.full ? 0 : $props.radius,
    r: $data.isNvue && $props.headerLine ? $props.lineColor : "transparent",
    s: $props.padding[0] || 0,
    t: $props.padding[1] || 0,
    v: $props.padding[2] || $props.padding[0] || 0,
    w: $props.padding[3] || $props.padding[1] || 0
  }) : {}, {
    x: $props.footerLine ? 1 : "",
    y: $props.full ? 0 : $props.radius,
    z: $props.full ? 0 : $props.radius,
    A: $props.full ? 1 : "",
    B: $props.showBorder ? 1 : "",
    C: $props.showBorder && !$data.isNvue && !$props.full ? 1 : "",
    D: $props.margin[0] || 0,
    E: $props.full ? 0 : $props.margin[1] || 0,
    F: $props.margin[2] || $props.margin[0] || 0,
    G: $props.full ? 0 : $props.margin[3] || $props.margin[1] || 0,
    H: $props.background,
    I: $props.full ? 0 : $props.radius,
    J: $props.showBorder ? "none" : $props.shadow,
    K: $data.isNvue ? $props.borderColor : "transparent",
    L: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3a1d36fe"]]);
wx.createComponent(Component);
