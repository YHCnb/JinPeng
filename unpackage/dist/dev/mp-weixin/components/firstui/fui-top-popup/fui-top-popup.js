"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-top-popup",
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    //背景颜色
    background: {
      type: String,
      default: "#fff"
    },
    //圆角
    radius: {
      type: [Number, String],
      default: 24
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
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      isShow: false
    };
  },
  methods: {
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
    b: $props.show ? 1 : "",
    c: $props.radius + "rpx",
    d: $props.radius + "rpx",
    e: $props.background,
    f: common_vendor.o(($event) => $options.stop($event, true)),
    g: $props.show ? 1 : "",
    h: $props.zIndex,
    i: $props.maskBackground,
    j: common_vendor.o((...args) => $options.handleClose && $options.handleClose(...args)),
    k: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a6f9c2a8"]]);
wx.createComponent(Component);
