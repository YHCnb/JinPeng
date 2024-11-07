"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-textarea",
  emits: ["input", "update:modelValue", "focus", "blur", "confirm", "click", "linechange", "keyboardheightchange"],
  //加group是为了避免在表单中使用时给组件加value属性
  behaviors: ["wx://form-field-group"],
  options: {
    addGlobalClass: true,
    virtualHost: true
  },
  props: {
    //是否为必填项
    required: {
      type: Boolean,
      default: false
    },
    requiredColor: {
      type: String,
      default: ""
    },
    requiredTop: {
      type: String,
      default: "34rpx"
    },
    //左侧标题
    label: {
      type: String,
      default: ""
    },
    //标题字体大小
    labelSize: {
      type: [Number, String],
      default: 32
    },
    labelColor: {
      type: String,
      default: "#333"
    },
    //label 最小宽度 rpx
    labelWidth: {
      type: [Number, String],
      default: 140
    },
    //获取焦点
    focus: {
      type: Boolean,
      default: false
    },
    autoHeight: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    placeholderStyle: {
      type: String,
      default: ""
    },
    //输入框名称
    name: {
      type: String,
      default: ""
    },
    //输入框值
    value: {
      type: [Number, String],
      default: ""
    },
    //输入框值
    modelValue: {
      type: [Number, String],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //V2.1.0+
    disabledStyle: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String],
      default: 140
    },
    cursorSpacing: {
      type: Number,
      default: 0
    },
    showConfirmBar: {
      type: Boolean,
      default: true
    },
    cursor: {
      type: Number,
      default: -1
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    selectionEnd: {
      type: Number,
      default: -1
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    disableDefaultPadding: {
      type: Boolean,
      default: true
    },
    holdKeyboard: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "200rpx"
    },
    minHeight: {
      type: String,
      default: "30rpx"
    },
    //标题与输入框是否顶端对齐
    flexStart: {
      type: Boolean,
      default: false
    },
    //输入框字体大小 rpx
    size: {
      type: [Number, String],
      default: 32
    },
    //输入框字体颜色
    color: {
      type: String,
      default: "#333"
    },
    // 是否显示 textarea 边框
    textareaBorder: {
      type: Boolean,
      default: false
    },
    // 是否显示上边框
    borderTop: {
      type: Boolean,
      default: true
    },
    //上边框left值，单位rpx
    topLeft: {
      type: [Number, String],
      default: 0
    },
    //上边框right值，单位rpx
    topRight: {
      type: [Number, String],
      default: 0
    },
    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: true
    },
    //下边框left值，单位rpx
    bottomLeft: {
      type: [Number, String],
      default: 0
    },
    //下边框right值，单位rpx
    bottomRight: {
      type: [Number, String],
      default: 0
    },
    //边框颜色
    borderColor: {
      type: String,
      default: ""
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    // 是否自动去除两端的空格
    trim: {
      type: Boolean,
      default: true
    },
    textRight: {
      type: Boolean,
      default: false
    },
    //输入框padding值：[上，右，下，左]
    padding: {
      type: Array,
      default() {
        return ["32rpx", "32rpx"];
      }
    },
    //输入框背景颜色
    backgroundColor: {
      type: String,
      default: "#FFFFFE"
    },
    //输入框margin-top值 rpx
    marginTop: {
      type: Number,
      default: 0
    },
    //是否显示底部输入长度计数
    isCounter: {
      type: Boolean,
      default: false
    },
    //计数文本颜色
    counterColor: {
      type: String,
      default: "#B2B2B2"
    },
    //计数文本大小 rpx
    counterSize: {
      type: [Number, String],
      default: 28
    }
  },
  computed: {
    getRadius() {
      return Number(this.radius) * 2 + "rpx";
    },
    getRequiredColor() {
      let color = this.requiredColor;
      if (!color || color === true) {
        const app = common_vendor.index && common_vendor.index.$fui && common_vendor.index.$fui.color;
        color = app && app.danger || "#FF2B2B";
      }
      return color;
    }
  },
  data() {
    return {
      placeholderStyl: "",
      count: 0,
      focused: false,
      val: ""
    };
  },
  watch: {
    focus(val) {
      this.$nextTick(() => {
        setTimeout(() => {
          this.focused = val;
        }, 20);
      });
    },
    placeholderStyle() {
      this.fieldPlaceholderStyle();
    },
    modelValue(newVal) {
      this.val = this.getVal(newVal);
      this.count = this.getCount(String(this.val).length);
    },
    value(newVal) {
      this.val = this.getVal(newVal);
      this.count = this.getCount(String(this.val).length);
    }
  },
  created() {
    this.fieldPlaceholderStyle();
    setTimeout(() => {
      if (this.value && !this.modelValue) {
        this.val = this.getVal(this.value);
      } else {
        this.val = this.getVal(this.modelValue);
      }
      this.count = this.getCount(String(this.val).length);
    }, 50);
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.focused = this.focus;
      }, 300);
    });
  },
  methods: {
    getVal(val) {
      return !val && val !== 0 ? "" : val;
    },
    fieldPlaceholderStyle() {
      if (this.placeholderStyle) {
        this.placeholderStyl = this.placeholderStyle;
      } else {
        const size = common_vendor.index.upx2px(this.size);
        this.placeholderStyl = `fontSize:${size}px;`;
      }
    },
    getCount(len) {
      const max = Number(this.maxlength);
      return len > max && max !== -1 ? max : len;
    },
    onInput(event) {
      let value = event.detail.value;
      if (this.trim)
        value = this.trimStr(value);
      let len = value.length;
      const max = Number(this.maxlength);
      if (len > max && max !== -1) {
        len = max;
        value = value.substring(0, max - 1);
      }
      this.count = len;
      this.val = value;
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
    },
    onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.$emit("blur", event);
    },
    onConfirm(e) {
      this.$emit("confirm", e);
    },
    fieldClick() {
      this.$emit("click", {
        name: this.name
      });
    },
    onLinechange(e) {
      this.$emit("linechange", e);
    },
    onKeyboardheightchange(e) {
      this.$emit("keyboardheightchange", e);
    },
    trimStr(str) {
      return str.replace(/^\s+|\s+$/g, "");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.borderTop && !$props.textareaBorder
  }, $props.borderTop && !$props.textareaBorder ? {
    b: $props.borderColor,
    c: $props.topLeft + "rpx",
    d: $props.topRight + "rpx",
    e: !$props.borderColor ? 1 : ""
  } : {}, {
    f: $props.textareaBorder
  }, $props.textareaBorder ? {
    g: !$props.borderColor ? 1 : "",
    h: $options.getRadius,
    i: $props.borderColor
  } : {}, {
    j: $props.required
  }, $props.required ? {
    k: $props.flexStart ? 1 : "",
    l: $options.getRequiredColor,
    m: $props.flexStart ? $props.requiredTop : "50%"
  } : {}, {
    n: $props.label
  }, $props.label ? {
    o: common_vendor.t($props.label),
    p: $props.labelSize + "rpx",
    q: $props.labelColor,
    r: $props.labelWidth + "rpx"
  } : {}, {
    s: $props.textRight ? 1 : "",
    t: $props.disabled && $props.disabledStyle ? 1 : "",
    v: $props.height,
    w: $props.minHeight,
    x: $props.size + "rpx",
    y: $props.color,
    z: $props.name,
    A: $data.val,
    B: $data.val ? "" : $props.placeholder,
    C: $data.placeholderStyl,
    D: $props.disabled,
    E: $props.cursorSpacing,
    F: $props.maxlength,
    G: $data.focused,
    H: $props.autoHeight,
    I: $props.fixed,
    J: $props.showConfirmBar,
    K: $props.cursor,
    L: $props.selectionStart,
    M: $props.selectionEnd,
    N: $props.adjustPosition,
    O: $props.holdKeyboard,
    P: $props.disableDefaultPadding,
    Q: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args)),
    R: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args)),
    S: common_vendor.o((...args) => $options.onInput && $options.onInput(...args)),
    T: common_vendor.o((...args) => $options.onConfirm && $options.onConfirm(...args)),
    U: common_vendor.o((...args) => $options.onLinechange && $options.onLinechange(...args)),
    V: common_vendor.o((...args) => $options.onKeyboardheightchange && $options.onKeyboardheightchange(...args)),
    W: $props.isCounter
  }, $props.isCounter ? {
    X: common_vendor.t($props.maxlength != -1 ? `${$data.count}/${$props.maxlength}` : $data.count),
    Y: $props.counterSize + "rpx",
    Z: $props.counterColor
  } : {}, {
    aa: $props.borderBottom && !$props.textareaBorder
  }, $props.borderBottom && !$props.textareaBorder ? {
    ab: $props.borderColor,
    ac: $props.bottomLeft + "rpx",
    ad: $props.bottomRight + "rpx",
    ae: !$props.borderColor ? 1 : ""
  } : {}, {
    af: $props.flexStart ? 1 : "",
    ag: $props.textareaBorder ? 1 : "",
    ah: $props.padding[0] || 0,
    ai: $props.padding[1] || 0,
    aj: $props.padding[2] || $props.padding[0] || 0,
    ak: $props.padding[3] || $props.padding[1] || 0,
    al: $props.backgroundColor,
    am: $props.radius + "rpx",
    an: $props.borderColor,
    ao: $props.marginTop + "rpx",
    ap: common_vendor.o((...args) => $options.fieldClick && $options.fieldClick(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-31fc37c7"]]);
wx.createComponent(Component);
