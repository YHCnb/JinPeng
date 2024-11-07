"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-pagination",
  emits: ["change"],
  props: {
    prevText: {
      type: String,
      default: "上一页"
    },
    nextText: {
      type: String,
      default: "下一页"
    },
    width: {
      type: [Number, String],
      default: 128
    },
    height: {
      type: [Number, String],
      default: 60
    },
    borderColor: {
      type: String,
      default: "transparent"
    },
    background: {
      type: String,
      default: "#fff"
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 28
    },
    radius: {
      type: [Number, String],
      default: 12
    },
    //是否有点击效果
    highlight: {
      type: Boolean,
      default: true
    },
    //是否自定义按钮显示内容
    custom: {
      type: Boolean,
      default: false
    },
    //当前页码
    current: {
      type: [Number, String],
      default: 1
    },
    //当前页码字体颜色
    currentColor: {
      type: String,
      default: ""
    },
    //页码字体颜色
    pageColor: {
      type: String,
      default: ""
    },
    //页码字体大小
    pageFontSize: {
      type: [Number, String],
      default: 36
    },
    //是否需要展示页码
    isPage: {
      type: Boolean,
      default: true
    },
    //页码展示类型 1-简约型 2-展开型
    pageType: {
      type: [Number, String],
      default: 1
    },
    pageBgColor: {
      type: String,
      default: "rgba(0,0,0,0)"
    },
    activeBgColor: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: "#fff"
    },
    //数据总量
    total: {
      type: [Number, String],
      default: 0
    },
    //每页数据量
    pageSize: {
      type: [Number, String],
      default: 10
    }
  },
  computed: {
    maxPage() {
      let maxPage = 1;
      let total = Number(this.total);
      let pageSize = Number(this.pageSize);
      if (total && pageSize) {
        maxPage = Math.ceil(total / pageSize);
      }
      return maxPage;
    },
    getCurrentColor() {
      let color = this.currentColor;
      return color;
    },
    getActiveBgColor() {
      let color = this.activeBgColor;
      return color;
    }
  },
  watch: {
    current(val) {
      this.currentIndex = +val;
    },
    total(val) {
      if (this.pageType == 2) {
        this.getPageNumber();
      }
    },
    pageSize(val) {
      if (this.pageType == 2) {
        this.getPageNumber();
      }
    }
  },
  created() {
    this.currentIndex = +this.current;
    if (this.pageType == 2) {
      this.getPageNumber();
    }
  },
  data() {
    return {
      currentIndex: 1,
      pageNumber: [],
      pagerCount: 0
    };
  },
  methods: {
    toArray(start, end) {
      return Array.from(new Array(end + 1).keys()).slice(start);
    },
    getPageNumber() {
      const num = this.currentIndex;
      const total = this.total;
      const pageSize = this.pageSize;
      let pagerCount = this.pagerCount;
      if (!pagerCount) {
        pagerCount = 6;
        const width = Number(this.width);
        if (!isNaN(width) && width <= 60) {
          pagerCount = 8;
        }
        this.pagerCount = pagerCount;
      }
      let showPagerArr = this.toArray(1, pagerCount);
      let pagerNum = Math.ceil(total / pageSize);
      if (pagerNum <= 1) {
        showPagerArr = [1];
      } else if (pagerNum <= pagerCount) {
        showPagerArr = this.toArray(1, pagerNum);
      } else {
        showPagerArr[pagerCount - 1] = pagerNum;
        if (num < pagerCount - 1) {
          showPagerArr[pagerCount - 2] = "...";
        } else if (num >= pagerNum - (pagerCount - 3)) {
          showPagerArr[1] = "...";
          showPagerArr.forEach((item, index) => {
            if (index > 1) {
              showPagerArr[index] = pagerNum - (pagerCount - 3) + (index - 2);
            }
          });
        } else {
          showPagerArr[1] = "...";
          for (let i = 0; i < pagerCount - 3; i++) {
            showPagerArr[i + 2] = num + i;
          }
          showPagerArr[pagerCount - 2] = "...";
        }
      }
      this.pageNumber = showPagerArr;
    },
    clickPrev() {
      if (Number(this.currentIndex) === 1)
        return;
      this.currentIndex -= 1;
      this.change("prev");
    },
    clickNext() {
      if (Number(this.currentIndex) === this.maxPage)
        return;
      this.currentIndex += 1;
      this.change("next");
    },
    handleClick(item, index) {
      let pageNo = Number(item);
      const idx = this.pagerCount === 6 ? 4 : 6;
      if (isNaN(pageNo)) {
        if (index === 1) {
          pageNo = this.pageNumber[index + 1] - (this.pagerCount - 4);
        } else if (index === idx) {
          pageNo = this.pageNumber[index - 1] + 1;
        }
      } else {
        if (Number(this.currentIndex) === pageNo)
          return;
      }
      this.currentIndex = pageNo;
      this.change("pageNumber");
    },
    change(e) {
      this.getPageNumber();
      this.$emit("change", {
        type: e,
        current: this.currentIndex
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.custom
  }, !$props.custom ? {
    b: common_vendor.t($props.prevText),
    c: !$props.color ? 1 : "",
    d: $props.color,
    e: $props.size + "rpx"
  } : {}, {
    f: $data.currentIndex === 1 ? 1 : "",
    g: $data.currentIndex !== 1 && $props.highlight ? 1 : "",
    h: !$props.color ? 1 : "",
    i: $props.width + "rpx",
    j: $props.height + "rpx",
    k: $props.borderColor,
    l: $props.background,
    m: $props.radius + "rpx",
    n: common_vendor.o((...args) => $options.clickPrev && $options.clickPrev(...args)),
    o: $props.isPage && $props.pageType == 1
  }, $props.isPage && $props.pageType == 1 ? {
    p: common_vendor.t($data.currentIndex),
    q: !$props.currentColor ? 1 : "",
    r: $options.getCurrentColor,
    s: $props.pageFontSize + "rpx",
    t: common_vendor.t($options.maxPage || 0),
    v: !$props.pageColor ? 1 : "",
    w: $props.pageColor,
    x: $props.pageFontSize + "rpx"
  } : {}, {
    y: $props.isPage && $props.pageType == 2
  }, $props.isPage && $props.pageType == 2 ? {
    z: common_vendor.f($data.pageNumber, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: !$props.color && $data.currentIndex !== item ? 1 : "",
        c: $data.currentIndex === item ? $props.activeColor : $props.pageColor,
        d: !$props.activeBgColor && $data.currentIndex === item ? 1 : "",
        e: item === "..." || item != "..." && item < 1e3 ? 1 : "",
        f: item != "..." && item > 999 ? 1 : "",
        g: index,
        h: $data.currentIndex === item ? $options.getActiveBgColor : $props.pageBgColor,
        i: common_vendor.o(($event) => $options.handleClick(item, index), index)
      };
    }),
    A: $props.radius + "rpx"
  } : {}, {
    B: !$props.custom
  }, !$props.custom ? {
    C: common_vendor.t($props.nextText),
    D: !$props.color ? 1 : "",
    E: $props.color,
    F: $props.size + "rpx"
  } : {}, {
    G: $data.currentIndex === $options.maxPage ? 1 : "",
    H: $data.currentIndex !== $options.maxPage && $props.highlight ? 1 : "",
    I: !$props.color ? 1 : "",
    J: $props.width + "rpx",
    K: $props.height + "rpx",
    L: $props.borderColor,
    M: $props.background,
    N: $props.radius + "rpx",
    O: common_vendor.o((...args) => $options.clickNext && $options.clickNext(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d7568751"]]);
wx.createComponent(Component);
