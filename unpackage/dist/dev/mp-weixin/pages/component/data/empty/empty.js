"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goIndex() {
      this.fui.href("/pages/tabbar/index/index", true);
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  const _easycom_fui_empty2 = common_vendor.resolveComponent("fui-empty");
  (_easycom_fui_button2 + _easycom_fui_empty2)();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
const _easycom_fui_empty = () => "../../../../components/firstui/fui-empty/fui-empty.js";
if (!Math) {
  (_easycom_fui_button + _easycom_fui_empty)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.goIndex),
    b: common_vendor.p({
      text: "返回首页",
      size: 28,
      width: "336rpx",
      height: "84rpx",
      radius: "100rpx",
      background: "#fff",
      margin: ["64rpx", "0"],
      borderColor: "#465CFF",
      color: "#465CFF"
    }),
    c: common_vendor.p({
      src: "/static/images/component/empty/img_data_3x.png",
      title: "暂无数据",
      descr: "功能开发中，敬请期待！"
    }),
    d: common_vendor.p({
      src: "/static/images/component/empty/img_news_3x.png",
      title: "暂无新消息",
      marginTop: "64"
    }),
    e: common_vendor.p({
      src: "/static/images/component/empty/img_address_3x.png",
      title: "暂无地址信息",
      marginTop: "64"
    }),
    f: common_vendor.p({
      src: "/static/images/component/empty/img_network_3x.png",
      title: "请检查网络设置！",
      marginTop: "64"
    }),
    g: common_vendor.p({
      src: "/static/images/component/empty/img_order_3x.png",
      title: "暂无订单",
      marginTop: "64"
    }),
    h: common_vendor.p({
      src: "/static/images/component/empty/img_search_3x.png",
      title: "没有找到搜索的内容额~",
      marginTop: "64"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
