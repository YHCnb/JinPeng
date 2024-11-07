"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      show: false,
      visible: false,
      buttons: [{
        text: "确定",
        color: "#FF2B2B"
      }]
    };
  },
  methods: {
    showDialog(type) {
      if (type === 1) {
        this.show = true;
      } else {
        this.visible = true;
      }
    },
    onClick(e) {
      console.log(e);
      this.onClose();
    },
    //设置maskClosable为true时（点击遮罩可关闭），需要配合@close事件一起使用，通过控制show来达到关闭效果
    onClose(e) {
      this.show = false;
    },
    onTap(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_dialog2 = common_vendor.resolveComponent("fui-dialog");
  (_easycom_fui_button2 + _easycom_fui_dialog2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_dialog = () => "../../../../components/firstui/fui-dialog/fui-dialog.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showDialog(1)),
    b: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "基础使用",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o(($event) => $options.showDialog(2)),
    d: common_vendor.p({
      type: "gray",
      width: "400rpx",
      height: "84rpx",
      text: "自定义按钮",
      bold: true
    }),
    e: common_vendor.o($options.onClick),
    f: common_vendor.o($options.onClose),
    g: common_vendor.p({
      show: $data.show,
      content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      maskClosable: true
    }),
    h: common_vendor.o($options.onTap),
    i: common_vendor.p({
      show: $data.visible,
      title: "我是标题",
      content: "我是自定义的对话框！",
      buttons: $data.buttons
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
