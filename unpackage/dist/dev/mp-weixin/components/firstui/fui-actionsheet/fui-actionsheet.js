"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-actionsheet",
  emits: ["click", "cancel"],
  props: {
    //是否显示操作菜单
    show: {
      type: Boolean,
      default: false
    },
    //菜单按钮数组，可自定义文本颜色
    itemList: {
      type: Array,
      default() {
        return [];
      }
    },
    textKey: {
      type: String,
      default: "text"
    },
    //菜单按钮字体大小 rpx
    itemSize: {
      type: [Number, String],
      default: 32
    },
    //v2.4.0+
    itemColor: {
      type: String,
      default: "#181818"
    },
    //v2.4.0+
    itemDarkColor: {
      type: String,
      default: "#D1D1D1"
    },
    //提示信息
    tips: {
      type: String,
      default: ""
    },
    //提示信息文本颜色
    color: {
      type: String,
      default: "#7F7F7F"
    },
    //提示文字大小 rpx
    size: {
      type: [Number, String],
      default: 26
    },
    //是否需要圆角
    radius: {
      type: Boolean,
      default: true
    },
    //是否需要取消按钮
    isCancel: {
      type: Boolean,
      default: true
    },
    //v2.4.0+
    cancelSize: {
      type: [Number, String],
      default: 32
    },
    //light/dark
    theme: {
      type: String,
      default: "light"
    },
    //点击遮罩 是否可关闭
    maskClosable: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: [Number, String],
      default: 996
    },
    //是否适配底部安全区
    safeArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let isNvue = false;
    return {
      iphoneX: false,
      vals: [],
      isNvue,
      isShow: false
    };
  },
  computed: {
    getStyle() {
      return `z-index:${Number(this.zIndex) - 10};`;
    }
  },
  watch: {
    itemList(newVal) {
      this.initData(newVal);
    }
  },
  created() {
    this.initData(this.itemList);
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              [this.textKey]: item
            };
          });
        }
        this.vals = vals;
      }
    },
    handleClickMask() {
      if (!this.maskClosable)
        return;
      this.handleClickCancel();
    },
    handleClickItem(index) {
      if (!this.show)
        return;
      this.$emit("click", {
        index,
        ...this.vals[index]
      });
    },
    handleClickCancel() {
      this.$emit("cancel");
    },
    stop() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow || !$data.isNvue
  }, $data.isShow || !$data.isNvue ? common_vendor.e({
    b: $props.show ? 1 : "",
    c: common_vendor.o((...args) => $options.handleClickMask && $options.handleClickMask(...args)),
    d: common_vendor.s($options.getStyle),
    e: $props.tips
  }, $props.tips ? {
    f: common_vendor.t($props.tips),
    g: $props.radius ? 1 : "",
    h: $props.theme === "light" ? 1 : "",
    i: $props.theme === "dark" ? 1 : "",
    j: $props.size + "rpx",
    k: $props.color
  } : {}, {
    l: common_vendor.f($data.vals, (item, index, i0) => {
      return {
        a: common_vendor.t(item[$props.textKey]),
        b: $props.theme === "dark" ? item.darkColor || $props.itemDarkColor : item.color || $props.itemColor,
        c: (item.size || $props.itemSize) + "rpx",
        d: !$props.isCancel && index == $data.vals.length - 1 ? 1 : "",
        e: !$props.isCancel && index == $data.vals.length - 1 && $data.iphoneX && $props.safeArea ? 1 : "",
        f: $props.radius && !$props.tips && index === 0 ? 1 : "",
        g: (index !== 0 || $props.tips) && $props.theme === "light" ? 1 : "",
        h: (index !== 0 || $props.tips) && $props.theme === "dark" ? 1 : "",
        i: index,
        j: common_vendor.o(($event) => $options.handleClickItem(index), index)
      };
    }),
    m: $props.theme === "light" ? 1 : "",
    n: $props.theme === "dark" ? 1 : "",
    o: $props.isCancel ? 1 : "",
    p: $props.isCancel
  }, $props.isCancel ? {
    q: $props.theme === "dark" ? $props.itemDarkColor : $props.itemColor,
    r: ($props.cancelSize || $props.itemSize) + "rpx",
    s: $data.iphoneX && $props.safeArea ? 1 : "",
    t: $props.theme === "light" ? 1 : "",
    v: $props.theme === "dark" ? 1 : "",
    w: common_vendor.o((...args) => $options.handleClickCancel && $options.handleClickCancel(...args))
  } : {}, {
    x: $props.show ? 1 : "",
    y: $props.radius ? 1 : "",
    z: $props.theme === "light" ? 1 : "",
    A: $props.theme === "dark" ? 1 : "",
    B: $props.zIndex,
    C: common_vendor.o((...args) => $options.stop && $options.stop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-afd32c58"]]);
wx.createComponent(Component);
