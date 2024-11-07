"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-grid",
  emits: ["click"],
  props: {
    // 每行显示个数
    columns: {
      type: Number,
      default: 3
    },
    // 是否显示边框
    showBorder: {
      type: Boolean,
      default: true
    },
    // 边框颜色 仅nvue有效
    borderColor: {
      type: String,
      default: "#EEEEEE"
    },
    // 是否正方形显示,默认为 true
    square: {
      type: Boolean,
      default: true
    },
    // item 项是否两端对齐，仅在宽度无法拉满且影响美观时使用，谨慎使用 v2.0.0+
    between: {
      type: Boolean,
      default: false
    },
    //当数据无法铺满时，且设置了between 布局，末尾补足占位元素个数
    //最后一行数据个数+emptyElements 不可大于 columns 值
    emptyElements: {
      type: [Number, String],
      default: 0
    }
  },
  provide() {
    return {
      grid: this
    };
  },
  data() {
    const elemId = `fui_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      elemId,
      width: 0,
      height: 0,
      isShow: false,
      seats: []
    };
  },
  created() {
    this.children = [];
    let sys = common_vendor.index.getSystemInfoSync();
    this.width = 100 / this.columns + "%";
    if (this.square) {
      this.height = parseInt((sys.windowWidth - 1) / this.columns * 10) / 10 + "px";
    }
  },
  watch: {
    columns(val) {
      this.$nextTick(() => {
        this.init();
      });
    },
    showBorder(val) {
      this.childChange();
    },
    emptyElements(val) {
      this.createEmptyEl(val);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.createEmptyEl(this.emptyElements);
    });
  },
  methods: {
    init() {
      setTimeout(() => {
        this.getWidth((width, height) => {
          this.children.forEach((item, index) => {
            item.width = width;
            item.height = height;
          });
          this.isShow = true;
        });
      }, 50);
    },
    createEmptyEl(val) {
      const nums = Number(val);
      let seats = [];
      if (nums && nums > 0) {
        for (let i = 0; i < nums; i++) {
          seats.push(i);
        }
        this.seats = seats;
      } else {
        this.seats = [];
      }
    },
    childChange() {
      this.children.forEach((item, index) => {
        item.showBorder = this.showBorder;
      });
    },
    handleClick(e) {
      this.$emit("click", e);
    },
    getWidth(fn) {
      let isNoSupported = false;
      this.width = 100 / this.columns + "%";
      if (this.square || isNoSupported) {
        common_vendor.index.createSelectorQuery().in(this).select(`#${this.elemId}`).boundingClientRect().exec((ret) => {
          let width = (ret[0].width - 1) / this.columns;
          width = parseInt(width * 10) / 10 + "px";
          if (this.square)
            this.height = width;
          fn(this.width, this.height);
        });
      } else {
        fn(this.width, this.height);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.elemId,
    b: $props.showBorder ? 1 : "",
    c: $props.between ? 1 : "",
    d: $props.borderColor,
    e: $props.borderColor,
    f: common_vendor.n($data.isShow ? "fui-grid__wrap-show" : "fui-grid__wrap-hidden")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5a018aeb"]]);
wx.createComponent(Component);
