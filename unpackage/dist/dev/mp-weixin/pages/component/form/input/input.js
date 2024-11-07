"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text: "",
      password: true
    };
  },
  watch: {
    text(val) {
      console.log(val);
    }
  },
  methods: {
    input(e) {
      console.log(e);
    },
    change() {
      this.password = !this.password;
    }
  }
};
if (!Array) {
  const _easycom_fui_input2 = common_vendor.resolveComponent("fui-input");
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  (_easycom_fui_input2 + _easycom_fui_icon2 + _easycom_fui_button2)();
}
const _easycom_fui_input = () => "../../../../components/firstui/fui-input/fui-input.js";
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  (_easycom_fui_input + _easycom_fui_icon + _easycom_fui_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.input),
    b: common_vendor.p({
      borderTop: true,
      placeholder: "请输入用户名"
    }),
    c: common_vendor.p({
      bottomLeft: 0,
      placeholder: "请输入手机号码",
      maxlength: "11"
    }),
    d: common_vendor.p({
      label: "标题",
      borderTop: true,
      placeholder: "这是一个输入框"
    }),
    e: common_vendor.p({
      label: "标题文字",
      bottomLeft: 0,
      placeholder: "请输入文本"
    }),
    f: common_vendor.o($options.change),
    g: common_vendor.p({
      name: $data.password ? "invisible" : "visible",
      color: "#B2B2B2",
      size: 50
    }),
    h: common_vendor.o($options.input),
    i: common_vendor.p({
      borderTop: true,
      padding: ["20rpx", "32rpx"],
      placeholder: "请输入密码",
      password: $data.password
    }),
    j: common_vendor.o(($event) => $data.text = $event),
    k: common_vendor.p({
      label: "标题",
      bottomLeft: 0,
      borderTop: true,
      placeholder: "请输入文本",
      clearable: true,
      modelValue: $data.text
    }),
    l: common_vendor.p({
      label: "标题",
      inputBorder: true,
      placeholder: "请输入文本"
    }),
    m: common_vendor.p({
      marginTop: 24,
      isFillet: true,
      inputBorder: true,
      placeholder: "请输入文本"
    }),
    n: common_vendor.p({
      marginTop: 24,
      radius: 24,
      ["border-color"]: "#FFB703",
      inputBorder: true,
      placeholder: "请输入文本"
    }),
    o: common_vendor.p({
      required: true,
      label: "标题",
      borderTop: true,
      placeholder: "请输入文本"
    }),
    p: common_vendor.p({
      required: true,
      label: "标题文字",
      bottomLeft: 0,
      placeholder: "请输入文本内容"
    }),
    q: common_vendor.p({
      ["text-align"]: "right",
      label: "身高",
      borderTop: true,
      placeholder: "请输入身高"
    }),
    r: common_vendor.p({
      ["text-align"]: "right",
      label: "体重",
      bottomLeft: 0,
      placeholder: "请输入体重"
    }),
    s: common_vendor.p({
      label: "标题",
      bottomLeft: 0,
      borderTop: true,
      placeholder: "这是一个被禁用的输入框",
      disabled: true
    }),
    t: common_vendor.p({
      type: "gray",
      bold: true,
      width: "200rpx",
      height: "64rpx",
      size: 28,
      text: "获取验证码"
    }),
    v: common_vendor.p({
      padding: ["20rpx", "32rpx"],
      label: "验证码",
      bottomLeft: 0,
      placeholder: "请输入手机验证码"
    }),
    w: common_vendor.p({
      name: "mobile",
      color: "#333",
      size: 48
    }),
    x: common_vendor.p({
      placeholder: "请输入手机号"
    }),
    y: common_vendor.p({
      name: "captcha",
      size: 48
    }),
    z: common_vendor.p({
      type: "gray",
      bold: true,
      width: "200rpx",
      height: "64rpx",
      size: 28,
      text: "获取验证码"
    }),
    A: common_vendor.p({
      padding: ["20rpx", "32rpx"],
      placeholder: "请输入验证码",
      bottomLeft: 0
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
