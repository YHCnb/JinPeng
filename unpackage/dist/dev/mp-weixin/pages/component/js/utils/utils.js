"use strict";
const components_firstui_fuiUtils_index = require("../../../../components/firstui/fui-utils/index.js");
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      num: 0,
      color: ""
    };
  },
  onLoad() {
    this.throttle = components_firstui_fuiUtils_index.utils.throttle(() => {
      this.num++;
    }, 3e3);
  },
  methods: {
    titleCase() {
      const text = "english";
      const val = components_firstui_fuiUtils_index.utils.titleCase(text);
      console.log(val);
      this.fui.toast(val);
    },
    compressLetter() {
      const text = "aabbbcddddddddd";
      const val = components_firstui_fuiUtils_index.utils.compressLetter(text);
      console.log(val);
      this.fui.toast(val);
    },
    sleep() {
      components_firstui_fuiUtils_index.utils.sleep(1e3);
      this.fui.toast("1000ms后执行！");
    },
    trim() {
      const text = " abcd ";
      const val = components_firstui_fuiUtils_index.utils.trim(text);
      console.log(val);
      this.fui.toast(`字符串${val}`);
    },
    trimAll() {
      const text = " a b c d ";
      const val = components_firstui_fuiUtils_index.utils.trimAll(text);
      console.log(val);
      this.fui.toast(`字符串${val}`);
    },
    replaceAll() {
      const text = "##a###b#######c#";
      const val = components_firstui_fuiUtils_index.utils.replaceAll(text, "#", "");
      console.log(val);
      this.fui.toast(val);
    },
    numberFormatter() {
      const text = "15715600012";
      const val = components_firstui_fuiUtils_index.utils.numberFormatter(text);
      console.log(val);
      this.fui.toast(val);
    },
    moneyFormatter() {
      const text = "2021";
      const val = components_firstui_fuiUtils_index.utils.moneyFormatter(text);
      console.log(val);
      this.fui.toast(val);
    },
    dateFormatter(type) {
      const date = "2023-10-30 22:36:15";
      const format = ["y-m-d h:i", "y/m/d", "m-d", "h:i", "i:s", "y年m月d日 h时i分s秒"][type - 1];
      const val = components_firstui_fuiUtils_index.utils.dateFormatter(date, format);
      console.log(val);
      this.fui.toast(val);
    },
    dateFormatAgo() {
      const date = "2023-10-15 22:56:15";
      const val = components_firstui_fuiUtils_index.utils.formatTimeAgo(date);
      console.log(val);
      this.fui.toast(val);
    },
    btnThrottle() {
      this.throttle();
    },
    getRandomHexColor() {
      const val = components_firstui_fuiUtils_index.utils.getRandomHexColor();
      console.log(val);
      this.color = val;
      this.fui.toast(val);
    },
    convertCurrency(money) {
      const val = components_firstui_fuiUtils_index.utils.convertCurrency(money);
      console.log(val);
      this.fui.toast(val);
    }
  }
};
if (!Array) {
  const _easycom_fui_button2 = common_vendor.resolveComponent("fui-button");
  _easycom_fui_button2();
}
const _easycom_fui_button = () => "../../../../components/firstui/fui-button/fui-button.js";
if (!Math) {
  _easycom_fui_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.titleCase),
    b: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "首字母转大写",
      bold: true,
      margin: ["24rpx"]
    }),
    c: common_vendor.o($options.compressLetter),
    d: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "压缩",
      bold: true,
      margin: ["24rpx"]
    }),
    e: common_vendor.o($options.sleep),
    f: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "等待 1000毫秒",
      bold: true,
      margin: ["24rpx"]
    }),
    g: common_vendor.o($options.trim),
    h: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "去左右空格",
      bold: true,
      margin: ["24rpx"]
    }),
    i: common_vendor.o($options.trimAll),
    j: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "去所有空格",
      bold: true,
      margin: ["24rpx"]
    }),
    k: common_vendor.o($options.replaceAll),
    l: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "替换",
      bold: true,
      margin: ["24rpx"]
    }),
    m: common_vendor.o($options.numberFormatter),
    n: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "格式化",
      bold: true,
      margin: ["24rpx"]
    }),
    o: common_vendor.o($options.moneyFormatter),
    p: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "格式化",
      bold: true,
      margin: ["24rpx"]
    }),
    q: common_vendor.o(($event) => $options.dateFormatter(1)),
    r: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "年-月-日 时:分",
      bold: true,
      margin: ["24rpx"]
    }),
    s: common_vendor.o(($event) => $options.dateFormatter(2)),
    t: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "年/月/日",
      bold: true
    }),
    v: common_vendor.o(($event) => $options.dateFormatter(3)),
    w: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "月-日",
      bold: true,
      margin: ["24rpx"]
    }),
    x: common_vendor.o(($event) => $options.dateFormatter(4)),
    y: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "时:分",
      bold: true
    }),
    z: common_vendor.o(($event) => $options.dateFormatter(5)),
    A: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "分:秒",
      bold: true,
      margin: ["24rpx"]
    }),
    B: common_vendor.o(($event) => $options.dateFormatter(6)),
    C: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "*年*月*日 *时*分*秒",
      bold: true
    }),
    D: common_vendor.o($options.dateFormatAgo),
    E: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "格式化",
      bold: true,
      margin: ["24rpx"]
    }),
    F: common_vendor.t($data.num),
    G: common_vendor.o($options.btnThrottle),
    H: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "执行 +1",
      bold: true,
      margin: ["24rpx"]
    }),
    I: $data.color,
    J: common_vendor.o($options.getRandomHexColor),
    K: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "获取颜色",
      bold: true,
      margin: ["24rpx"]
    }),
    L: common_vendor.o(($event) => $options.convertCurrency("￥20.00")),
    M: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "￥20.00",
      bold: true,
      margin: ["24rpx"]
    }),
    N: common_vendor.o(($event) => $options.convertCurrency("￥1,020.52")),
    O: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "￥1,020.52",
      bold: true
    }),
    P: common_vendor.o(($event) => $options.convertCurrency("1314521")),
    Q: common_vendor.p({
      type: "gray",
      ["btn-size"]: "medium",
      text: "1314521",
      bold: true,
      margin: ["24rpx"]
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
