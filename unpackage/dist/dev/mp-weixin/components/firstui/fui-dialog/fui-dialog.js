"use strict";
const common_vendor = require("../../../common/vendor.js");
const primaryColor = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.color && common_vendor.index.$fui.color.primary || "#465CFF";
const _sfc_main = {
  name: "fui-dialog",
  emits: ["click", "close"],
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "温馨提示"
    },
    color: {
      type: String,
      default: "#333"
    },
    content: {
      type: String,
      default: ""
    },
    contentColor: {
      type: String,
      default: "#7F7F7F"
    },
    buttons: {
      type: Array,
      default() {
        return [{
          text: "取消"
        }, {
          text: "确定",
          color: primaryColor
        }];
      }
    },
    background: {
      type: String,
      default: "#fff"
    },
    radius: {
      type: [Number, String],
      default: 24
    },
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,.6)"
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isNvue = false;
    return {
      visible: false,
      isNvue
    };
  },
  methods: {
    handleClick(index) {
      this.$emit("click", {
        index,
        ...this.buttons[index]
      });
    },
    maskClose() {
      if (!this.maskClosable)
        return;
      this.$emit("close", {});
    },
    stop() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.visible || !$data.isNvue
  }, $data.visible || !$data.isNvue ? common_vendor.e({
    b: $props.title
  }, $props.title ? {
    c: common_vendor.t($props.title),
    d: $props.color
  } : {}, {
    e: $props.content
  }, $props.content ? {
    f: common_vendor.t($props.content),
    g: $props.contentColor
  } : {}, {
    h: !$props.title ? 1 : "",
    i: common_vendor.f($props.buttons, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: index,
        c: item.color || "#333333",
        d: index === 0 ? 1 : "",
        e: common_vendor.o(($event) => $options.handleClick(index), index)
      };
    }),
    j: $props.background,
    k: $props.radius + "rpx",
    l: common_vendor.o((...args) => $options.stop && $options.stop(...args)),
    m: common_vendor.o((...args) => $options.maskClose && $options.maskClose(...args)),
    n: $props.maskBackground,
    o: $props.show ? 1 : "",
    p: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f6503a43"]]);
wx.createComponent(Component);
