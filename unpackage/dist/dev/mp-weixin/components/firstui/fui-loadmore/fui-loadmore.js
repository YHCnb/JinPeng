"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-loadmore",
  props: {
    //占据高度，单位rx
    height: {
      type: [Number, String],
      default: 100
    },
    //1-上拉加载 2-正在加载... 3-没有更多了
    state: {
      type: [Number, String],
      default: 2
    },
    initText: {
      type: String,
      default: "上拉加载"
    },
    //提示文字
    text: {
      type: String,
      default: "正在加载..."
    },
    noneText: {
      type: String,
      default: "没有更多了"
    },
    //文字颜色
    color: {
      type: String,
      default: "#7F7F7F"
    },
    //文字大小，单位rpx
    size: {
      type: [Number, String],
      default: 24
    },
    //loading图标背景色
    iconColor: {
      type: String,
      default: "#B2B2B2"
    },
    //loading图标高亮部分颜色
    activeColor: {
      type: String,
      default: ""
    },
    //loading 图标的宽度，单位rpx
    iconWidth: {
      type: [Number, String],
      default: 28
    },
    //自定义loading图标image路径，若自定义图标则iconColor、activeColor属性失效
    src: {
      type: String,
      default: ""
    },
    //loading图标和文字排列方向，可取值：col，row
    direction: {
      type: String,
      default: "row"
    }
  },
  watch: {
    state(newValue, oldValue) {
      this.$nextTick(() => {
      });
    }
  },
  computed: {
    getActiveColor() {
      let color = this.activeColor;
      return color;
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue,
      deg: 0,
      stop: false
    };
  },
  beforeUnmount() {
    this.deg = 0;
    this.stop = true;
  },
  methods: {
    getStateText(state) {
      state = Number(state);
      return [this.initText, this.text, this.noneText][state - 1];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.src && $props.state == 2
  }, !$props.src && $props.state == 2 ? {
    b: !$data.isNvue && !$props.activeColor ? 1 : "",
    c: $props.iconWidth + "rpx",
    d: $props.iconWidth + "rpx",
    e: $options.getActiveColor,
    f: $props.iconColor,
    g: $props.iconColor,
    h: $props.iconColor
  } : {}, {
    i: $props.src && $props.state == 2
  }, $props.src && $props.state == 2 ? {
    j: $props.src,
    k: $props.iconWidth + "rpx",
    l: $props.iconWidth + "rpx"
  } : {}, {
    m: common_vendor.t($options.getStateText($props.state)),
    n: $props.direction === "col" ? 1 : "",
    o: $props.color,
    p: $props.size + "rpx",
    q: $props.size + "rpx",
    r: common_vendor.n("fui-loadmore__" + $props.direction),
    s: $props.height + "rpx"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-92e92e73"]]);
wx.createComponent(Component);
