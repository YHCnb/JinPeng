"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-switch",
  emits: ["change"],
  behaviors: ["wx://form-field-group"],
  props: {
    //开关选择器名称
    name: {
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
    //样式，有效值：switch, checkbox
    type: {
      type: String,
      default: "switch"
    },
    //switch选中颜色
    color: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "#fdfdfd"
    },
    //switch选中时按钮颜色 V2.3.0+（nvue不支持）
    btnColor: {
      type: String,
      default: ""
    },
    btnBgColor: {
      type: String,
      default: "#fff"
    },
    //边框颜色，type=checkbox时生效
    borderColor: {
      type: String,
      default: "#ccc"
    },
    //对号颜色，type=checkbox时生效
    checkMarkColor: {
      type: String,
      default: "#fff"
    },
    scaleRatio: {
      type: [Number, String],
      default: 1
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
      isNvue,
      isLabel: false
    };
  },
  watch: {
    checked(val) {
      this.val = val;
    }
  },
  created() {
    this.val = this.checked;
    this.label = this.getParent();
    if (this.label) {
      this.isLabel = true;
      this.label.childrens.push(this);
    }
  },
  methods: {
    change(e, label) {
      if (this.label && !label)
        return;
      this.val = e.detail.value;
      this.$emit("change", e);
    },
    labelClick() {
      if (this.disabled)
        return;
      let e = {
        detail: {
          value: !this.val
        }
      };
      this.change(e, true);
    },
    getParent(name = "fui-label") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.type === "switch"
  }, $props.type === "switch" ? {
    b: $data.val ? 1 : "",
    c: $props.background,
    d: $data.val ? $props.btnColor ? $props.btnColor : $props.btnBgColor : $props.btnBgColor,
    e: $data.val ? 1 : "",
    f: $data.isLabel ? 1 : "",
    g: common_vendor.o((...args) => $options.change && $options.change(...args)),
    h: $props.name,
    i: $data.val,
    j: $props.disabled,
    k: $props.color,
    l: $data.val ? $props.color : "#dfdfdf",
    m: $data.val ? $props.color : $props.borderColor,
    n: $props.disabled ? 1 : "",
    o: $data.val && !$props.color ? 1 : ""
  } : common_vendor.e({
    p: $data.val
  }, $data.val ? {
    q: $props.checkMarkColor,
    r: $props.checkMarkColor
  } : {}, {
    s: $data.isLabel ? 1 : "",
    t: common_vendor.o((...args) => $options.change && $options.change(...args)),
    v: $props.name,
    w: $data.val,
    x: $props.disabled,
    y: $props.disabled ? 1 : "",
    z: !$options.getColor && $data.val ? 1 : "",
    A: $data.val ? $options.getColor : $props.background,
    B: $data.val ? `1px solid ${$options.getColor}` : `1px solid ${$props.borderColor}`
  }), {
    C: $data.isNvue ? 1 : $props.scaleRatio,
    D: `scale(${$data.isNvue ? $props.scaleRatio : 1})`
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-27f89589"]]);
wx.createComponent(Component);
