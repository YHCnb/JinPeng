"use strict";
const common_vendor = require("../../../common/vendor.js");
const components_firstui_fuiSwipeAction_mpwxs = require("./mpwxs.js");
const components_firstui_fuiSwipeAction_mpjs = require("./mpjs.js");
const components_firstui_fuiSwipeAction_bindingx = require("./bindingx.js");
const block0 = (Component2) => {
  if (!Component2.wxsCallMethods) {
    Component2.wxsCallMethods = [];
  }
  Component2.wxsCallMethods.push("closeSwipe", "change");
};
const dangerColor = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.color && common_vendor.index.$fui.color.danger || "#FF2B2B";
const _sfc_main = {
  name: "fui-swipe-action",
  mixins: [components_firstui_fuiSwipeAction_mpwxs.mpwxs, components_firstui_fuiSwipeAction_mpjs.mpjs, components_firstui_fuiSwipeAction_bindingx.bindingx],
  emits: ["click", "change"],
  props: {
    buttons: {
      type: Array,
      default() {
        return [{
          text: "删除",
          background: dangerColor
        }];
      }
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#fff"
    },
    show: {
      type: Boolean,
      default: false
    },
    threshold: {
      type: [Number, String],
      default: 30
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    //v2.1.0+ 点击当前菜单是否立即关闭菜单
    clickClose: {
      type: Boolean,
      default: true
    },
    //1.9.9+
    marginTop: {
      type: [Number, String],
      default: 0
    },
    //1.9.9+
    marginBottom: {
      type: [Number, String],
      default: 0
    },
    param: {
      type: [Number, String],
      default: 0
    }
  },
  beforeUnmount() {
    this.__beforeUnmount = true;
    this.unInstall();
  },
  data() {
    let isApp = 0;
    return {
      isApp
    };
  },
  methods: {
    unInstall() {
      if (this.group) {
        this.group.children.forEach((item, index) => {
          if (item === this) {
            this.group.children.splice(index, 1);
          }
        });
      }
    },
    //获取父元素实例
    getParent(name = "fui-swipeaction-group") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.buttons, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: (item.size || $props.size) + "rpx",
        c: item.color || $props.color,
        d: item.background,
        e: index,
        f: common_vendor.o((...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args), index),
        g: common_vendor.o(($event) => _ctx.appTouchEnd($event, index, item), index),
        h: common_vendor.o(($event) => _ctx.handleClick(index, item), index)
      };
    }),
    b: _ctx.isShow,
    c: _ctx.thresholdVal,
    d: $props.clickClose,
    e: _ctx.isDisabled,
    f: $data.isApp,
    g: $props.marginTop + "rpx",
    h: $props.marginBottom + "rpx"
  };
}
if (typeof block0 === "function")
  block0(_sfc_main);
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e4ee5af7"]]);
wx.createComponent(Component);
