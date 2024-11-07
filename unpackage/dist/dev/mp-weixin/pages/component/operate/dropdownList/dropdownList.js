"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      options: [{
        text: "机架式服务器",
        value: 1
      }, {
        text: "笔记本",
        value: 2
      }, {
        text: "平板电脑",
        value: 3
      }, {
        text: "台式机+显示器",
        value: 3
      }],
      assets: "",
      assetsShow: false,
      options2: ["注册激活", "站长工具", "投递文章", "媒体合作", "素材相关", "报告错误", "论坛事务", "发布软件", "网站排行榜", "其他事务"],
      question: "",
      quesShow: false,
      options3: ["最新车讯", "降价排行", "SUV", "违章罚单", "提车试驾", "测评体验", "选车指南", "美女车模", "加油优惠卡", "维修保养"],
      tag: "",
      tagShow: false
    };
  },
  methods: {
    assetsTap() {
      this.$refs.ddlAssets.show();
      this.assetsShow = true;
    },
    assetsItemClick(e) {
      console.log(e);
      this.assets = e.text;
      this.assetsClose();
    },
    assetsClose() {
      this.assetsShow = false;
    },
    quesTap() {
      this.$refs.ddlQues.show();
      this.quesShow = true;
    },
    quesItemClick(e) {
      console.log(e);
      this.question = e.text;
      this.quesClose();
    },
    quesClose() {
      this.quesShow = false;
    },
    tagTap() {
      this.$refs.ddlTag.show();
      this.tagShow = true;
    },
    tagItemClick(e) {
      console.log(e);
      this.tag = e.text;
      this.tagClose();
    },
    tagClose() {
      this.tagShow = false;
    }
  }
};
if (!Array) {
  const _easycom_fui_icon2 = common_vendor.resolveComponent("fui-icon");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_dropdown_list2 = common_vendor.resolveComponent("fui-dropdown-list");
  (_easycom_fui_icon2 + _easycom_fui_list_cell2 + _easycom_fui_dropdown_list2)();
}
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_dropdown_list = () => "../../../../components/firstui/fui-dropdown-list/fui-dropdown-list.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_list_cell + _easycom_fui_dropdown_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.assets,
    b: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    c: $data.assetsShow ? 1 : "",
    d: common_vendor.o((...args) => $options.assetsTap && $options.assetsTap(...args)),
    e: common_vendor.p({
      highlight: false
    }),
    f: $data.question,
    g: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    h: $data.quesShow ? 1 : "",
    i: common_vendor.o((...args) => $options.quesTap && $options.quesTap(...args)),
    j: common_vendor.p({
      highlight: false
    }),
    k: $data.tag,
    l: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    m: $data.tagShow ? 1 : "",
    n: common_vendor.o((...args) => $options.tagTap && $options.tagTap(...args)),
    o: common_vendor.p({
      highlight: false
    }),
    p: common_vendor.sr("ddlAssets", "14060760-6"),
    q: common_vendor.o($options.assetsItemClick),
    r: common_vendor.o($options.assetsClose),
    s: common_vendor.p({
      options: $data.options
    }),
    t: common_vendor.sr("ddlQues", "14060760-7"),
    v: common_vendor.o($options.quesItemClick),
    w: common_vendor.o($options.quesClose),
    x: common_vendor.p({
      height: 600,
      width: 480,
      checkboxColor: "#FFB703",
      options: $data.options2
    }),
    y: common_vendor.sr("ddlTag", "14060760-8"),
    z: common_vendor.o($options.tagItemClick),
    A: common_vendor.o($options.tagClose),
    B: common_vendor.p({
      isCheckbox: false,
      selectedColor: "#FFB703",
      splitLine: true,
      height: 600,
      width: 400,
      options: $data.options3
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
