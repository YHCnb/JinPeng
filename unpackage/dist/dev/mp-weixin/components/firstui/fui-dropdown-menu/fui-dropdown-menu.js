"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-dropdown-menu",
  emits: ["click", "close"],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    textKey: {
      type: String,
      default: "text"
    },
    srcKey: {
      type: String,
      default: "src"
    },
    checkedKey: {
      type: String,
      default: "checked"
    },
    maxHeight: {
      type: [Number, String],
      default: 400
    },
    minWidth: {
      type: [Number, String],
      default: 0
    },
    left: {
      type: [Number, String],
      default: 0
    },
    //right大于等于0时生效，left失效
    right: {
      type: [Number, String],
      default: -1
    },
    background: {
      type: String,
      default: "#fff"
    },
    radius: {
      type: [Number, String],
      default: 0
    },
    padding: {
      type: String,
      default: "32rpx"
    },
    isCheckbox: {
      type: Boolean,
      default: true
    },
    //选择框选中后颜色
    checkboxColor: {
      type: String,
      default: ""
    },
    //选择框未选中时边框颜色
    borderColor: {
      type: String,
      default: "#ccc"
    },
    //是否只展示对号，无边框背景
    isCheckMark: {
      type: Boolean,
      default: false
    },
    //对号颜色
    checkmarkColor: {
      type: String,
      default: "#fff"
    },
    //选择框与内容是否颠倒排列
    isReverse: {
      type: Boolean,
      default: false
    },
    //是否需要分割线条
    splitLine: {
      type: Boolean,
      default: false
    },
    lineColor: {
      type: String,
      default: "#eee"
    },
    iconWidth: {
      type: [Number, String],
      default: 48
    },
    size: {
      type: [Number, String],
      default: 32
    },
    color: {
      type: String,
      default: "#181818"
    },
    selectedColor: {
      type: String,
      default: ""
    },
    isMask: {
      type: Boolean,
      default: true
    },
    maskBackground: {
      type: String,
      default: "transparent"
    },
    //down/up
    direction: {
      type: String,
      default: "down"
    }
  },
  watch: {
    options(newVal) {
      this.initData(newVal);
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      isNvueShow: false,
      itemList: [],
      isShow: false
    };
  },
  computed: {
    getStyles() {
      let styles = `border-radius:${this.radius}rpx;background:${this.background};`;
      let right = Number(this.right || 0);
      let left = Number(this.left || 0);
      if (right >= 0) {
        styles += "right:0;";
      } else {
        styles += `left:${left}rpx;`;
      }
      return styles;
    },
    getChkColor() {
      let color = this.checkboxColor;
      return color;
    }
  },
  created() {
    this.initData(this.options);
  },
  methods: {
    resetCalc(callback, height) {
    },
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] !== "object") {
          vals = vals.map((item) => {
            return {
              [this.textKey]: item,
              [this.checkedKey]: false
            };
          });
        } else {
          vals.map((item) => {
            item[this.checkedKey] = item[this.checkedKey] || false;
          });
        }
        this.itemList = vals;
      } else {
        this.itemList = [];
      }
    },
    itemClick(index) {
      let item = this.itemList[index];
      let vals = [...this.itemList];
      vals.forEach((item2, idx) => {
        if (index === idx) {
          item2[this.checkedKey] = true;
        } else {
          item2[this.checkedKey] = false;
        }
      });
      this.itemList = vals;
      this.$emit("click", {
        index,
        ...item
      });
      this.close(2);
    },
    close(type) {
      this.isShow = false;
      if (type === 1) {
        this.$emit("close", {});
      }
    },
    show() {
      this.isShow = true;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow && $props.isMask
  }, $data.isShow && $props.isMask ? {
    b: $props.maskBackground,
    c: common_vendor.o(($event) => $options.close(1))
  } : {}, {
    d: $data.isNvueShow || !$data.isNvue
  }, $data.isNvueShow || !$data.isNvue ? {
    e: common_vendor.f($data.itemList, (model, index, i0) => {
      return common_vendor.e($props.isCheckbox ? common_vendor.e({
        a: model[$props.checkedKey]
      }, model[$props.checkedKey] ? {
        b: $props.checkmarkColor,
        c: $props.checkmarkColor
      } : {}, {
        d: $props.isCheckMark ? 1 : "",
        e: (!$props.checkboxColor || $props.checkboxColor === true) && model[$props.checkedKey] && !$props.isCheckMark ? 1 : "",
        f: model[$props.checkedKey] && !$props.isCheckMark ? $options.getChkColor : "transparent",
        g: model[$props.checkedKey] && !$props.isCheckMark ? $options.getChkColor : $props.borderColor
      }) : {}, {
        h: model[$props.srcKey]
      }, model[$props.srcKey] ? {
        i: model[$props.srcKey],
        j: $props.iconWidth + "rpx",
        k: $props.iconWidth + "rpx",
        l: !$props.isReverse && $props.isCheckbox ? 1 : "",
        m: $props.isReverse ? 1 : "",
        n: $props.iconWidth + "rpx",
        o: $props.iconWidth + "rpx"
      } : {}, {
        p: common_vendor.t(model[$props.textKey]),
        q: !$props.isReverse && ($props.isCheckbox || model[$props.srcKey]) ? 1 : "",
        r: $props.isReverse && ($props.isCheckbox || model[$props.srcKey]) ? 1 : "",
        s: $props.selectedColor && model[$props.checkedKey] ? $props.selectedColor : $props.color,
        t: $props.splitLine && $data.itemList.length - 1 !== index ? 1 : "",
        v: index,
        w: common_vendor.o(($event) => $options.itemClick(index), index)
      });
    }),
    f: $props.isCheckbox,
    g: $props.size + "rpx",
    h: $props.background,
    i: $props.padding,
    j: $props.splitLine && $data.isNvue ? $props.lineColor : "transparent",
    k: $props.isReverse ? 1 : "",
    l: $data.isNvue ? $props.maxHeight + "rpx" : "auto",
    m: $props.maxHeight + "rpx",
    n: $props.minWidth + "rpx",
    o: $props.direction !== "up" ? 1 : "",
    p: $props.direction === "up" ? 1 : "",
    q: $data.isShow && $props.direction !== "up" ? 1 : "",
    r: $data.isShow && $props.direction === "up" ? 1 : "",
    s: common_vendor.s($options.getStyles)
  } : {}, {
    t: common_vendor.o((...args) => $options.resetCalc && $options.resetCalc(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e7fc96a8"]]);
wx.createComponent(Component);
