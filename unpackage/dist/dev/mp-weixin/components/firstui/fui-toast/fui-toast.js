"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-toast",
  props: {
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    background: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    //图标宽度（高度与宽度一致）rpx
    width: {
      type: [Number, String],
      default: 64
    },
    size: {
      type: [Number, String],
      default: 30
    },
    color: {
      type: String,
      default: "#fff"
    },
    zIndex: {
      type: Number,
      default: 1001
    }
  },
  data() {
    let isNvue = false;
    return {
      timer: null,
      visible: false,
      src: "",
      text: "",
      isNvue
    };
  },
  beforeUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  },
  methods: {
    show: function(options) {
      clearTimeout(this.timer);
      let {
        duration = 2e3,
        src = "",
        text = ""
      } = options;
      this.text = text;
      this.src = src;
      this.$nextTick(() => {
        setTimeout(() => {
          this.visible = true;
          this.timer = setTimeout(() => {
            this.visible = false;
            clearTimeout(this.timer);
            this.timer = null;
          }, duration);
        }, 50);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.visible || !$data.isNvue
  }, $data.visible || !$data.isNvue ? common_vendor.e({
    b: $data.src
  }, $data.src ? {
    c: $data.src,
    d: $props.width + "rpx",
    e: $props.width + "rpx",
    f: $props.width + "rpx",
    g: $props.width + "rpx"
  } : {}, {
    h: $data.text
  }, $data.text ? {
    i: common_vendor.t($data.text),
    j: $props.size + "rpx",
    k: $props.color
  } : {}, {
    l: $props.padding[0] || 0,
    m: $props.padding[1] || 0,
    n: $props.padding[2] || $props.padding[0] || 0,
    o: $props.padding[3] || $props.padding[1] || 0,
    p: $props.background,
    q: $props.zIndex,
    r: $data.visible ? 1 : ""
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ee5bdb78"]]);
wx.createComponent(Component);
