"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      items: [{
        src: "/static/images/common/logo.png",
        title: "First UI",
        descr: "First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。",
        isOpen: true
      }, {
        src: "/static/images/common/icon_tabbar_2x.png",
        title: "标题内容",
        descr: "自定义折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开。再次点击标题，折叠内容。"
      }],
      list: [{
        question: "我只想用某个组件可以吗？",
        answer: "可以，组件支持按需引入，详见 First UI 文档 “快速上手”，使用组件前请先仔细阅读组件文档。"
      }, {
        question: "为什么文档或示例中有些组件在GitHub或npm下载的包中无法找到？",
        answer: "First UI 分为 “开源版” 和 “商业版”，所有示例或文档中加 “V” 的表示需要开通会员才可获取源码使用，会员内容不会发布到任何公开渠道。"
      }, {
        question: "组件支持Nvue、支付宝小程序...吗？",
        answer: "支持。组件支持哪些平台请参考组件具体文档，每个组件文档中都有支持平台的说明。"
      }]
    };
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
if (!Array) {
  const _easycom_fui_collapse_item2 = common_vendor.resolveComponent("fui-collapse-item");
  const _easycom_fui_collapse2 = common_vendor.resolveComponent("fui-collapse");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_collapse_item2 + _easycom_fui_collapse2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_collapse_item = () => "../../../../components/firstui/fui-collapse-item/fui-collapse-item.js";
const _easycom_fui_collapse = () => "../../../../components/firstui/fui-collapse/fui-collapse.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_collapse_item + _easycom_fui_collapse + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$5,
    b: common_vendor.o($options.change),
    c: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.descr),
        d: index,
        e: "0b97ac4e-2-" + i0 + ",0b97ac4e-1",
        f: common_vendor.p({
          index,
          open: item.isOpen
        })
      };
    }),
    d: common_vendor.o($options.change),
    e: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.descr),
        d: index,
        e: "0b97ac4e-4-" + i0 + ",0b97ac4e-3",
        f: common_vendor.p({
          index
        })
      };
    }),
    f: common_vendor.o($options.change),
    g: common_vendor.p({
      accordion: true
    }),
    h: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.descr),
        d: index,
        e: "0b97ac4e-6-" + i0 + ",0b97ac4e-5",
        f: common_vendor.p({
          animation: false,
          arrowColor: "#333",
          index
        })
      };
    }),
    i: common_vendor.o($options.change),
    j: common_vendor.f($data.items, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.descr),
        d: index,
        e: "0b97ac4e-8-" + i0 + ",0b97ac4e-7",
        f: common_vendor.p({
          disabled: index === 1,
          arrowColor: "#333",
          index
        })
      };
    }),
    k: common_vendor.o($options.change),
    l: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.question),
        b: "0b97ac4e-11-" + i0 + "," + ("0b97ac4e-10-" + i0),
        c: common_vendor.t(item.answer),
        d: index,
        e: "0b97ac4e-10-" + i0 + ",0b97ac4e-9",
        f: common_vendor.p({
          arrow: false,
          index
        })
      };
    }),
    m: common_vendor.p({
      padding: []
    }),
    n: common_vendor.o($options.change),
    o: common_vendor.p({
      accordion: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
