"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-segmented-control",
  emits: ["click"],
  props: {
    values: {
      type: Array,
      default() {
        return [];
      }
    },
    current: {
      type: Number,
      default: 0
    },
    //button、text
    type: {
      type: String,
      default: "button"
    },
    color: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: "#fff"
    },
    bold: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: 64
    },
    size: {
      type: [Number, String],
      default: 28
    },
    radius: {
      type: [Number, String],
      default: 8
    },
    disabled: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: [Number, String],
      default: 0
    },
    marginBottom: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    getColor() {
      let color = this.color;
      return color;
    }
  },
  data() {
    return {
      currentIndex: 0,
      vals: []
    };
  },
  watch: {
    current(val) {
      if (val !== this.currentIndex) {
        this.currentIndex = val;
      }
    },
    values(vals) {
      this.initData(vals);
    }
  },
  created() {
    this.currentIndex = this.current;
    this.initData(this.values);
  },
  methods: {
    initData(vals) {
      if (vals && vals.length > 0) {
        if (typeof vals[0] === "object") {
          this.vals = vals;
        } else {
          this.vals = vals.map((item) => {
            return {
              name: item
            };
          });
        }
      }
    },
    handleClick(index) {
      let vals = this.vals[index];
      if (this.currentIndex !== index && !this.disabled && !vals.disabled) {
        this.currentIndex = index;
        this.$emit("click", {
          index,
          ...vals
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.vals, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.name),
        b: $data.currentIndex === index ? $props.activeColor : $options.getColor,
        c: $props.bold && $data.currentIndex === index ? 600 : 400,
        d: item.disabled ? 1 : "",
        e: !$props.color && $data.currentIndex !== index ? 1 : "",
        f: $data.currentIndex === index && $props.type === "text"
      }, $data.currentIndex === index && $props.type === "text" ? {
        g: $props.activeColor
      } : {}, {
        h: index,
        i: index === 0 ? $props.radius + "rpx" : "0",
        j: index === 0 ? $props.radius + "rpx" : "0",
        k: index === $props.values.length - 1 ? $props.radius + "rpx" : "0",
        l: index === $props.values.length - 1 ? $props.radius + "rpx" : "0",
        m: $data.currentIndex === index && $props.type === "button" ? $options.getColor : "transparent",
        n: index === 0 && $props.type === "button" ? 1 : "",
        o: $data.currentIndex === index && !$props.color && $props.type === "button" ? 1 : "",
        p: common_vendor.o(($event) => $options.handleClick(index), index)
      });
    }),
    b: $props.size + "rpx",
    c: $props.type === "button" ? $options.getColor : "transparent",
    d: $props.height + "rpx",
    e: !$props.color && $props.type === "button" ? 1 : "",
    f: $props.type === "button" ? 1 : "",
    g: $props.disabled ? 1 : "",
    h: $props.marginTop + "rpx",
    i: $props.marginBottom + "rpx"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b6f739f1"]]);
wx.createComponent(Component);
