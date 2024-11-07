"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: true,
      shown: true
    };
  },
  methods: {
    close() {
      this.show = false;
    },
    close2() {
      this.shown = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_alert2 = common_vendor.resolveComponent("fui-alert");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  (_easycom_fui_alert2 + _easycom_fui_icon2)();
}
const _easycom_fui_alert = () => "../../../../components/firstui/fui-alert/fui-alert.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
if (!Math) {
  (_easycom_fui_alert + _easycom_fui_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "An info alert"
    }),
    b: common_vendor.p({
      type: "success",
      isLeft: true,
      title: "An success alert",
      marginTop: 24
    }),
    c: common_vendor.p({
      type: "warn",
      isLeft: true,
      title: "An warn alert",
      marginTop: 24
    }),
    d: common_vendor.p({
      type: "clear",
      isLeft: true,
      title: "An error alert",
      marginTop: 24
    }),
    e: common_vendor.p({
      isLeft: true,
      title: "An info alert",
      desc: "Content of alert. Content of alert.",
      marginTop: 24
    }),
    f: common_vendor.p({
      type: "clear",
      isLeft: true,
      title: "An error alert",
      desc: "Content of alert. Content of alert.",
      marginTop: 24
    }),
    g: common_vendor.p({
      type: "warn",
      isLeft: true,
      title: "An warn alert",
      desc: "Content of alert. Content of alert.",
      marginTop: 24
    }),
    h: common_vendor.p({
      type: "success",
      title: "An warn alert",
      desc: "Content of alert. Content of alert.",
      marginTop: 24
    }),
    i: common_vendor.p({
      type: "info",
      title: "An info alert",
      marginTop: 24
    }),
    j: common_vendor.p({
      type: "clear",
      title: "An success alert",
      marginTop: 24
    }),
    k: common_vendor.p({
      type: "warn",
      title: "An warn alert",
      marginTop: 24
    }),
    l: $data.show || $data.shown
  }, $data.show || $data.shown ? {} : {}, {
    m: $data.show
  }, $data.show ? {
    n: common_vendor.o($options.close),
    o: common_vendor.p({
      closable: true,
      title: "An info alert"
    })
  } : {}, {
    p: $data.shown
  }, $data.shown ? {
    q: common_vendor.o($options.close2),
    r: common_vendor.p({
      type: "success",
      closable: true,
      title: "An info alert",
      desc: "Content of alert. Content of alert.Content of alert.",
      marginTop: 24
    })
  } : {}, {
    s: common_vendor.p({
      name: "info",
      size: 48,
      color: "#fff"
    }),
    t: common_vendor.p({
      type: "info",
      isLeft: true,
      spacing: true,
      title: "An info alert",
      size: "28rpx"
    }),
    v: common_vendor.p({
      name: "checkbox",
      size: 48,
      color: "#fff"
    }),
    w: common_vendor.p({
      type: "success",
      isLeft: true,
      spacing: true,
      title: "An info alert",
      size: "28rpx",
      marginTop: 24
    }),
    x: common_vendor.p({
      name: "warning",
      size: 48,
      color: "#fff"
    }),
    y: common_vendor.p({
      type: "warn",
      isLeft: true,
      spacing: true,
      title: "An info alert",
      size: "28rpx",
      marginTop: 24
    }),
    z: common_vendor.p({
      name: "clear",
      size: 48,
      color: "#fff"
    }),
    A: common_vendor.p({
      type: "clear",
      isLeft: true,
      spacing: true,
      title: "An info alert",
      size: "28rpx",
      marginTop: 24
    }),
    B: common_vendor.p({
      type: "clear",
      iconColor: "#FF2B2B",
      background: "#fff",
      color: "#181818",
      title: "An info alert"
    }),
    C: common_vendor.p({
      type: "success",
      iconColor: "#09BE4F",
      background: "#fff",
      color: "#181818",
      title: "An info alert",
      marginTop: 24
    }),
    D: common_vendor.p({
      type: "warn",
      iconColor: "#FFB703",
      background: "#fff",
      color: "#181818",
      title: "An info alert",
      marginTop: 24
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
