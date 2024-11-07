"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      options: [{
        text: "综合推荐",
        value: 1,
        checked: true
      }, {
        text: "新品优先",
        value: 2
      }, {
        text: "评论数从高到低",
        value: 3
      }],
      options1: [{
        text: "默认排序",
        value: 11,
        checked: true
      }, {
        text: "销量排序",
        value: 12
      }, {
        text: "价格排序",
        value: 13
      }],
      range: "综合推荐",
      rangeShow: false,
      sort: "默认排序",
      sortShow: false,
      //数据格式二
      options2: ["注册激活", "站长工具", "投递文章", "媒体合作", "素材相关", "报告错误", "论坛事务", "发布软件", "网站排行榜", "其他事务"],
      question: "",
      quesShow: false,
      options3: ["最新车讯", "降价排行", "SUV", "违章罚单", "提车试驾", "测评体验", "选车指南", "美女车模", "加油优惠卡", "维修保养"],
      tag: "",
      tagShow: false
    };
  },
  methods: {
    filterTap(type) {
      if (type === 1) {
        this.$refs.ddmRange.show();
        this.rangeShow = true;
      } else {
        this.$refs.ddmSort.show();
        this.sortShow = true;
      }
    },
    rangeItemClick(e) {
      console.log(e);
      this.range = e.text;
      this.rangeClose();
    },
    rangeClose() {
      this.rangeShow = false;
    },
    sortItemClick(e) {
      console.log(e);
      this.sort = e.text;
      this.sortClose();
    },
    sortClose() {
      this.sortShow = false;
    },
    quesTap() {
      this.$refs.ddmQues.show();
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
      this.$refs.ddmTag.show();
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
  const _easycom_fui_dropdown_menu2 = common_vendor.resolveComponent("fui-dropdown-menu");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_icon2 + _easycom_fui_dropdown_menu2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_icon = () => "../../../../components/firstui/fui-icon/fui-icon.js";
const _easycom_fui_dropdown_menu = () => "../../../../components/firstui/fui-dropdown-menu/fui-dropdown-menu.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_icon + _easycom_fui_dropdown_menu + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.range),
    b: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    c: $data.rangeShow ? 1 : "",
    d: common_vendor.o(($event) => $options.filterTap(1)),
    e: common_vendor.sr("ddmRange", "9fcaa420-0"),
    f: common_vendor.o($options.rangeItemClick),
    g: common_vendor.o($options.rangeClose),
    h: common_vendor.p({
      size: 28,
      selectedColor: "#465CFF",
      options: $data.options
    }),
    i: common_vendor.t($data.sort),
    j: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    k: $data.sortShow ? 1 : "",
    l: common_vendor.o(($event) => $options.filterTap(2)),
    m: common_vendor.sr("ddmSort", "9fcaa420-2"),
    n: common_vendor.o($options.sortItemClick),
    o: common_vendor.o($options.sortClose),
    p: common_vendor.p({
      minWidth: 300,
      right: "0",
      size: 28,
      selectedColor: "#465CFF",
      isCheckMark: true,
      checkmarkColor: "#465CFF",
      isReverse: true,
      options: $data.options1
    }),
    q: $data.question,
    r: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    s: $data.quesShow ? 1 : "",
    t: common_vendor.o((...args) => $options.quesTap && $options.quesTap(...args)),
    v: common_vendor.sr("ddmQues", "9fcaa420-5,9fcaa420-4"),
    w: common_vendor.o($options.quesItemClick),
    x: common_vendor.o($options.quesClose),
    y: common_vendor.p({
      checkboxColor: "#FFB703",
      minWidth: 400,
      splitLine: true,
      options: $data.options2
    }),
    z: common_vendor.p({
      highlight: false
    }),
    A: $data.tag,
    B: common_vendor.p({
      name: "turningdown",
      size: 32
    }),
    C: $data.tagShow ? 1 : "",
    D: common_vendor.o((...args) => $options.tagTap && $options.tagTap(...args)),
    E: common_vendor.sr("ddmTag", "9fcaa420-8,9fcaa420-7"),
    F: common_vendor.o($options.tagItemClick),
    G: common_vendor.o($options.tagClose),
    H: common_vendor.p({
      isCheckbox: false,
      selectedColor: "#FF2B2B",
      splitLine: true,
      options: $data.options3,
      direction: "up"
    }),
    I: common_vendor.p({
      highlight: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
