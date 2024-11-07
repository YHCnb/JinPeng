"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-animation",
  emits: ["click", "change"],
  props: {
    //是否显示
    show: {
      type: Boolean,
      default: false
    },
    /*
     过渡动画类型
      ['fade,'slide-top','slide-right','slide-bottom','slide-left','zoom-in','zoom-out']
    */
    animationType: {
      type: Array,
      default() {
        return [];
      }
    },
    duration: {
      type: Number,
      default: 300
    },
    //styles 组件样式，同 css 样式
    styles: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      isShow: false,
      transform: "",
      ani: {
        in: "",
        active: ""
      }
    };
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true
    }
  },
  computed: {
    stylesObject() {
      const defStyles = {
        position: "fixed",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      };
      const mergeStyles = Object.assign({}, defStyles, this.styles);
      const styles = {
        ...mergeStyles,
        "transition-duration": this.duration / 1e3 + "s"
      };
      let transfrom = "";
      for (let i in styles) {
        let line = this.toLine(i);
        transfrom += line + ":" + styles[i] + ";";
      }
      return transfrom;
    }
  },
  methods: {
    change() {
      this.$emit("click", {
        detail: this.isShow
      });
    },
    open() {
      clearTimeout(this.timer);
      this.isShow = true;
      this.transform = "";
      this.ani.in = "";
      for (let i in this.getTranfrom(false)) {
        if (i === "opacity") {
          this.ani.in = "fui-popup__fade-out";
        } else {
          this.transform += `${this.getTranfrom(false)[i]} `;
        }
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this._animation(true);
        }, 50);
      });
    },
    close(type) {
      clearTimeout(this.timer);
      this._animation(false);
    },
    _animation(type) {
      let styles = this.getTranfrom(type);
      this.transform = "";
      for (let i in styles) {
        if (i === "opacity") {
          this.ani.in = `fui-popup__fade-${type ? "in" : "out"}`;
        } else {
          this.transform += `${styles[i]} `;
        }
      }
      this.timer = setTimeout(() => {
        if (!type) {
          this.isShow = false;
        }
        this.$emit("change", {
          detail: this.isShow
        });
      }, this.duration);
    },
    getTranfrom(type) {
      let styles = {
        transform: ""
      };
      this.animationType.forEach((mode) => {
        switch (mode) {
          case "fade":
            styles.opacity = type ? 1 : 0;
            break;
          case "slide-top":
            styles.transform += `translateY(${type ? "0" : "-100%"}) `;
            break;
          case "slide-right":
            styles.transform += `translateX(${type ? "0" : "100%"}) `;
            break;
          case "slide-bottom":
            styles.transform += `translateY(${type ? "0" : "100%"}) `;
            break;
          case "slide-left":
            styles.transform += `translateX(${type ? "0" : "-100%"}) `;
            break;
          case "zoom-in":
            styles.transform += `scale(${type ? 1 : 0.8}) `;
            break;
          case "zoom-out":
            styles.transform += `scale(${type ? 1 : 1.2}) `;
            break;
        }
      });
      return styles;
    },
    toLine(name) {
      return name.replace(/([A-Z])/g, "-$1").toLowerCase();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow
  }, $data.isShow ? {
    b: common_vendor.n($data.ani.in),
    c: common_vendor.s("transform:" + $data.transform + ";" + $options.stylesObject),
    d: common_vendor.o((...args) => $options.change && $options.change(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2fecaf62"]]);
wx.createComponent(Component);
