"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-drawer",
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    //left/right
    direction: {
      type: String,
      default: "right"
    },
    //背景颜色
    background: {
      type: String,
      default: "#fff"
    },
    zIndex: {
      type: [Number, String],
      default: 996
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    //圆角值，左侧打开时为右侧圆角，右侧打开时为左侧圆角
    radius: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      isShow: false,
      width: 0,
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(() => {
      setTimeout(() => {
        this._getSize((width) => {
          this.width = width;
        });
      }, 100);
    });
  },
  methods: {
    _getSize(callback) {
      common_vendor.index.createSelectorQuery().in(this).select(".fui-drawer__popup").boundingClientRect().exec((ret) => {
        if (ret) {
          callback && callback(ret[0].width || 0);
        }
      });
    },
    handleClose(e) {
      if (!this.maskClosable)
        return;
      this.$emit("close", {});
    },
    stop(e, tap) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? {
    b: common_vendor.n("fui-drawer_" + $props.direction),
    c: common_vendor.n($props.show ? "fui-drawer__show" : ""),
    d: $props.background,
    e: ($props.direction === "right" ? $props.radius : 0) + "rpx",
    f: ($props.direction === "right" ? $props.radius : 0) + "rpx",
    g: ($props.direction === "left" ? $props.radius : 0) + "rpx",
    h: ($props.direction === "left" ? $props.radius : 0) + "rpx",
    i: common_vendor.o(($event) => $options.stop($event, true)),
    j: $props.show ? 1 : "",
    k: $props.zIndex,
    l: $props.maskBackground,
    m: $props.direction === "left" ? "flex-start" : "flex-end",
    n: common_vendor.o((...args) => $options.handleClose && $options.handleClose(...args)),
    o: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-346b4cbc"]]);
wx.createComponent(Component);
