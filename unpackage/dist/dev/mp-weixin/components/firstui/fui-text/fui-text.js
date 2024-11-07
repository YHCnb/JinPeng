"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-text",
  emits: ["click"],
  props: {
    //样式类型：primary，success， warning，danger，purple，gray，black
    type: {
      type: String,
      default: "black"
    },
    text: {
      type: [Number, String],
      default: ""
    },
    size: {
      type: [Number, String],
      default: 0
    },
    unit: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    //left、center、right
    align: {
      type: String,
      default: "left"
    },
    //none、 underline、line-through 
    decoration: {
      type: String,
      default: "none"
    },
    //是否将行高设置与字体大小一致
    lineHeight: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Array,
      default() {
        return ["0", "0"];
      }
    },
    block: {
      type: Boolean,
      default: false
    },
    //文本类型：text、mobile、amount、name
    textType: {
      type: String,
      default: "text"
    },
    //是否格式化，仅mobile、amount时有效
    format: {
      type: Boolean,
      default: false
    },
    call: {
      type: Boolean,
      default: false
    },
    //文本是否可选：nvue不支持，加此属性导致事件无法冒泡
    selectable: {
      type: Boolean,
      default: false
    },
    //文本是否可选：微信小程序
    userSelect: {
      type: Boolean,
      default: false
    },
    //是否解码：App、H5、微信小程序
    decode: {
      type: Boolean,
      default: false
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    unShrink: {
      type: Boolean,
      default: false
    },
    param: {
      type: [Number, String],
      default: ""
    }
  },
  computed: {
    getSize() {
      const size = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiText && common_vendor.index.$fui.fuiText.size || 32;
      const unit = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.fuiText && common_vendor.index.$fui.fuiText.unit || "rpx";
      return (this.size || size) + (this.unit || unit);
    },
    getColor() {
      let color = this.color || "";
      return color;
    }
  },
  methods: {
    getText(text, textType, format) {
      let _text = text;
      if (format) {
        if (textType === "mobile") {
          _text = this.numberFormatter(text);
        } else if (textType === "amount") {
          _text = this.moneyFormatter(text);
        } else if (textType === "name") {
          _text = this.nameFormatter(text);
        }
      }
      return _text;
    },
    numberFormatter(num) {
      return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : num;
    },
    moneyFormatter(money) {
      return parseFloat(money).toFixed(2).toString().split("").reverse().join("").replace(/(\d{3})/g, "$1,").replace(
        /\,$/,
        ""
      ).split("").reverse().join("");
    },
    trimAll(value) {
      return value.toString().replace(/\s+/g, "");
    },
    nameFormatter(name) {
      let _name = this.trimAll(name || "");
      if (_name && _name.length >= 2) {
        const arr = _name.split("");
        _name = arr[0] + "*";
        if (arr.length > 2) {
          _name = _name + arr[arr.length - 1];
        }
      }
      return _name;
    },
    handleTap() {
      if (this.disable)
        return;
      this.$emit("click", {
        text: this.text,
        param: this.param
      });
      if (this.call) {
        common_vendor.index.makePhoneCall({
          phoneNumber: this.text,
          success: function() {
          },
          fail: function() {
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.getText($props.text, $props.textType, $props.format)),
    b: $options.getColor,
    c: $options.getSize,
    d: $props.lineHeight ? $options.getSize : "auto",
    e: $props.align,
    f: $props.decoration,
    g: $props.fontWeight,
    h: common_vendor.n($props.color ? "" : "fui-text__" + $props.type),
    i: common_vendor.n($props.unShrink ? "fui-text__unshrink" : ""),
    j: $props.selectable,
    k: $props.userSelect,
    l: $props.decode,
    m: common_vendor.n($props.block ? "fui-text__block" : "fui-text__inline"),
    n: common_vendor.n("fui-text__" + $props.align),
    o: common_vendor.n($props.highlight && !$props.disable ? "fui-text__active" : ""),
    p: $props.align,
    q: $props.padding[0] || 0,
    r: $props.padding[1] || 0,
    s: $props.padding[2] || $props.padding[0] || 0,
    t: $props.padding[3] || $props.padding[1] || 0,
    v: common_vendor.o((...args) => $options.handleTap && $options.handleTap(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-29dd0122"]]);
wx.createComponent(Component);
