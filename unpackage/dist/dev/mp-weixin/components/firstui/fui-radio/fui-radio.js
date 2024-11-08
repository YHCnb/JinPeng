"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-radio",
  emits: ["change"],
  options: {
    virtualHost: true
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //radio选中背景颜色
    color: {
      type: String,
      default: ""
    },
    //radio未选中时边框颜色
    borderColor: {
      type: String,
      default: "#ccc"
    },
    borderRadius: {
      type: String,
      default: "50%"
    },
    //是否只展示对号，无边框背景
    isCheckMark: {
      type: Boolean,
      default: false
    },
    //对号颜色
    checkMarkColor: {
      type: String,
      default: "#fff"
    },
    scaleRatio: {
      type: [Number, String],
      default: 1
    }
  },
  created() {
    this.val = this.checked;
    this.group = this.getParent();
    if (this.group) {
      this.group.childrens.push(this);
      if (this.group.value) {
        this.val = this.value === this.group.value;
      }
      if (this.group.modelValue) {
        this.val = this.value === this.group.modelValue;
      }
    }
    this.label = this.getParent("fui-label");
    if (this.label) {
      this.label.childrens.push(this);
    }
  },
  watch: {
    checked(newVal) {
      this.val = newVal;
    },
    val(newVal) {
      if (newVal && this.group) {
        this.group.changeValue(this.value, this);
      }
    }
  },
  computed: {
    getColor() {
      let color = this.color;
      return color;
    }
  },
  data() {
    let isNvue = false;
    return {
      val: false,
      isNvue
    };
  },
  methods: {
    getBackgroundColor(val, isCheckMark) {
      let color = val ? this.getColor : "#fff";
      if (isCheckMark) {
        color = "transparent";
      }
      return color;
    },
    getBorderColor(val, isCheckMark) {
      let color = val ? this.getColor : this.borderColor;
      if (isCheckMark) {
        color = "transparent";
      }
      return color;
    },
    radioChange(e) {
      if (this.disabled || this.val)
        return;
      this.val = true;
      this.$emit("change", {
        checked: this.val,
        value: this.value
      });
    },
    getParent(name = "fui-radio-group") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    },
    labelClick() {
      this.radioChange();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.val
  }, $data.val ? {
    b: $props.checkMarkColor,
    c: $props.checkMarkColor
  } : {}, {
    d: $options.getColor,
    e: $props.disabled,
    f: $props.value,
    g: $data.val,
    h: $props.disabled ? 1 : "",
    i: !$options.getColor && $data.val && !$props.isCheckMark ? 1 : "",
    j: $options.getBackgroundColor($data.val, $props.isCheckMark),
    k: $options.getBorderColor($data.val, $props.isCheckMark),
    l: $data.isNvue ? 1 : $props.scaleRatio,
    m: `scale(${$data.isNvue ? $props.scaleRatio : 1})`,
    n: $props.borderRadius,
    o: common_vendor.o((...args) => $options.radioChange && $options.radioChange(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8ac3234a"]]);
wx.createComponent(Component);
