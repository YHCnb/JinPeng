"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      mode: ["fade"],
      styles: {}
    };
  },
  methods: {
    ani(mode, mask) {
      if (mask) {
        this.$set(this.styles, "backgroundColor", "rgba(0,0,0,0.6)");
      } else {
        this.$set(this.styles, "backgroundColor", "rgba(0,0,0,0)");
      }
      setTimeout(() => {
        this.mode = mode;
        this.show = !this.show;
      }, 80);
    },
    handleClick() {
      this.show = false;
    },
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_animation2 = common_vendor.resolveComponent("fui-animation");
  (_easycom_fui_button2 + _easycom_fui_animation2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_animation = () => "../../../../components/firstui/fui-animation/fui-animation.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_animation)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.ani(["fade"], true)),
    b: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "Fade",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o(($event) => $options.ani(["slide-top"])),
    d: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "Slide Top",
      bold: true
    }),
    e: common_vendor.o(($event) => $options.ani(["slide-left"])),
    f: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "Slide Left",
      bold: true,
      margin: ["24rpx"]
    }),
    g: common_vendor.o(($event) => $options.ani(["slide-right"])),
    h: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "Slide Right",
      bold: true
    }),
    i: common_vendor.o(($event) => $options.ani(["slide-bottom"])),
    j: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "Slide Bottom",
      bold: true,
      margin: ["24rpx"]
    }),
    k: common_vendor.o(($event) => $options.ani(["zoom-in", "fade"])),
    l: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "Zoom In",
      bold: true
    }),
    m: common_vendor.o(($event) => $options.ani(["zoom-out", "fade"])),
    n: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "Zoom Out",
      bold: true,
      margin: ["24rpx"]
    }),
    o: common_vendor.o(($event) => $options.ani(["slide-left", "slide-top", "fade"])),
    p: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "Custom",
      bold: true
    }),
    q: common_vendor.o($options.handleClick),
    r: common_vendor.o($options.change),
    s: common_vendor.p({
      duration: 500,
      animationType: $data.mode,
      styles: $data.styles,
      show: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
