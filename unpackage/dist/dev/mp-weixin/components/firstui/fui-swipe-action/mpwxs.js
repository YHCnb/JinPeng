"use strict";
const mpwxs = {
  data() {
    return {
      isShow: false,
      isDisabled: false,
      thresholdVal: 30
    };
  },
  watch: {
    show(newVal) {
      this.isShow = this.show ? "right" : "none";
    },
    disabled(val) {
      this.isDisabled = this.disabled;
    },
    threshold(val) {
      this.thresholdVal = Number(this.threshold);
    }
  },
  created() {
    this.group = this.getParent();
    if (this.group.children !== void 0) {
      this.group.children.push(this);
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.isShow = this.show ? "right" : "none";
        this.isDisabled = this.disabled;
        this.thresholdVal = Number(this.threshold);
      }, 10);
    });
  },
  methods: {
    closeSwipe(e) {
      if (!this.autoClose)
        return;
      this.group && this.group.closeAuto(this);
    },
    change(e) {
      const isOpen = e.open === "right";
      this.$emit("change", {
        isOpen,
        param: this.param
      });
      if (this.isShow !== e.open) {
        this.isShow = e.open;
      }
    },
    isPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
      var flag = true;
      for (let v = 0; v < Agents.length - 1; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    //解决 ios 13 点击区域错位的问题
    appTouchStart(e) {
      const {
        clientX
      } = e.changedTouches[0];
      this.clientX = clientX;
      this.timestamp = (/* @__PURE__ */ new Date()).getTime();
    },
    appTouchEnd(e, index, item) {
      const {
        clientX
      } = e.changedTouches[0];
      let diff = Math.abs(this.clientX - clientX);
      let time = (/* @__PURE__ */ new Date()).getTime() - this.timestamp;
      if (diff < 40 && time < 300) {
        this.$emit("click", {
          index,
          item,
          param: this.param
        });
      }
    },
    handleClick(index, item) {
    }
  }
};
exports.mpwxs = mpwxs;
