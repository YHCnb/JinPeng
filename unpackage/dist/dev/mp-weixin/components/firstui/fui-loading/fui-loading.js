"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "fui-loading",
  props: {
    //col、row
    type: {
      type: String,
      default: "col"
    },
    //提示文字
    text: {
      type: String,
      default: "加载中"
    },
    //文本颜色，type=col时生效
    colColor: {
      type: String,
      default: "#FFFFFF"
    },
    //文本颜色，type=row时生效
    rowColor: {
      type: String,
      default: "#7F7F7F"
    },
    //字体大小，单位rpx
    size: {
      type: [Number, String],
      default: 26
    },
    //loading背景色，type=col时生效
    backgroundColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.6)"
    },
    //loading icon图片地址，type=col时生效
    srcCol: {
      type: String,
      default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAARVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////9SnXPCAAAAFnRSTlMA8ECgECCAYDDQ4MCwUL9wkN9vP49fRXb34AAAA1dJREFUaN7tmtmSozAMReXdxuyk+f9PnaW6o06CAdtSumqG8xqSi6QrGwfBxcXFD2OW5cP+pVsWDe9AL7YP6xO9mj1w0t3CmkK0H0yhd0qsBzBoazutZxDKACFSrefpJZmFUfad0vpVtonWOvkHZ62Kzas0QcLnJ0dFuxGOHNqny8QMVfjw6By5c+n4GHnwVOGq7tiDD3G74uq234Idzbmue7hVXZtmYfEncqRDicekKPSo+Z6o/EI7bB6Zfc+hXBl1R13V+0Jm6uL3inCiKGZX6g7ENwXKrrwfEB3uyubszYovXahBx3ve9LkvoG4lcc36pf7zagu16JCzeo4E8aLy+TJL1CXAfJWtP7zHKcsPp+NYh6NEY2posOeSbT4v64CMiLU7dvQIVGAsqzyuSKOBEHvCXwHvjZAGQ94PuAVaJIa8X2EDxMSDkGXh0lG9KCkMmCnkbdNq6oARt7t8Oa6A0dhhx1oREPpe9ukVxgEHBnOdyLQAHkI61wqtxcCQ9rXATDPgk9uef7kjFl+PiRJH4EKlijwmniyp15DEqtYBFz7VyQKXLR5ST9iJLibvZLuZiQh8qO1+kizPHq+hNXpT2AIjrlnX+GIii8J8eJPatyQwcwn/j8ISu5uZwj7+d4QBl8w3I3CT4EOnjjcCeJHJXUsDJ35LeHhDPw0yaesROIkmaesAjJgVtmjZizygd99b5CnunCQVsNGlFsbAnOs+tfkNTMdFzOjuqb0HJlR6J4h4uKHH7CSz47SX2tsIGr6Dm9mNyPGFrHZrqBuuKvuD1dhxGbs/6tOGuJcxoObMM5/QQIoWx8G0HA99IwZ89EZzAEI6PKMc+kt4ykRjix4ne6IrczhjGmzmoAn/dOlyXpgrumPoeLrr6JRd1hOkJVN2mW9mFZGywwbJU+51pa/QWJnKk6/o3xbX/Xxl0ZUPvxXp4nREqyuG31zZnFD5nJHp8ZsVc0I9NkTOFFsw9UN7t5x8W1E9oQSdyJ2p1fP04srKSUUlz0zLiqQlKwbwppvfVZ0DjvkR/bWO2urDbIp2t2n9knWk/+ojorfzsty9v8y2n/DTZgBKZLueInZAjR7CkWoYDLBgXCvSs/uoyoJ3Y3zWjOPg4T14KQf7m0FKqeHi4uJH+QUYYoTOYC/s2wAAAABJRU5ErkJggg=="
    },
    //loading icon图片地址，type=row时生效
    srcRow: {
      type: String,
      default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAM1BMVEUAAACPj4+IiIiIiIiIiIiIiIiKioqHh4eHh4eHh4eHh4eIiIiIiIiJiYmIiIiJiYmIiIi8awvKAAAAEHRSTlMAEEDw4NAwwKAgYICQULBwL0wVnQAAAmpJREFUWMPtmOmO4yAQhLlvMO//tDuyjfAaCEcj7UqTT5o/iafSVLcLY/TldyHID8fPH94oir2TLD6QyugdxVoeazAnYPUaFtsws+yNVjR+htolcWz/luHyhL7F55XNQ0Narx+L8TY8bSGTXsiYUB5V8A+zHJ4rud+p3GI+PiwqCXv0Ec+T42awf3L8+iMtzwwp36UEPHR1SIYPKueS+xxJe1CZiYkooNmTvjLHUzHDR7TVgnI2UXR9k/OhQHslieKCcb87reRnB5fCzMeTVp5cUbeY8O6arEYknYs60CJXK21zOvot7DSK4lrR51eA7dQ1y1bFF9MT2Chb358DsLHeLJeKhpZdDgkDFp1jQtRGXiEYOtZU1PLdUt7OFT84gnJUHNE5XOCO2PLnCALDzl21HD2Yam4ZRU9kER8Qs/V7IQ7BIWVqp10TTCFN0gdgwvumJmkcwWDFgigsQtv4Sv8baZ2lt5Pn+n+Wfm+CMsUsHFIJQ7VH+l2hSXsaHFUbEb1l2GRt5zFb/FC1nSfskGam+lSP4cqmks10jyOc1fditiGMXD1G4DekTH5sf14gkTeD1QOdbrRLXodGAKb1hC7gh5nmvzvgI0NoHyswA1niP7WKQE4dmtYHDH4MwzxS3T2MmCWje5OL2aK26j9EC7qkrVIk97XtrM+RYzSoHSZmUCTlLoLNvTs+aFLug+XEu2Mt59boRl9+4vk7gbD79fXnii2dsS6Xc4lb3fx5lX1bfKfPD1HJInetS64lJQnxhkrryV2+INbxeCHXN1PtaGxClUYgvGJ1XY82IA7Fn7IyFO7DIDcYfflN/AFNdjdeDj7M+wAAAABJRU5ErkJggg=="
    },
    isFixed: {
      type: Boolean,
      default: true
    },
    //是否需要遮罩，非nvue有效，nvue默认带遮罩，isFixed为true时生效
    isMask: {
      type: Boolean,
      default: false
    },
    //v1.9.9+
    maskBgColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    let isNvue = false;
    return {
      isNvue
    };
  },
  //nvue暂不支持vue3，所以不需要做兼容,此处以防后续兼容
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.type === "col"
  }, $props.type === "col" ? {
    b: $props.srcCol,
    c: common_vendor.t($props.text),
    d: $props.colColor,
    e: $props.size + "rpx",
    f: $props.size + "rpx",
    g: $props.isFixed && !$data.isNvue ? 1 : "",
    h: $props.backgroundColor,
    i: $props.isFixed && !$data.isNvue ? "fixed" : "static"
  } : {
    j: $props.srcRow,
    k: common_vendor.t($props.text),
    l: $props.rowColor,
    m: $props.size + "rpx",
    n: $props.size + "rpx",
    o: $props.isFixed && !$data.isNvue ? 1 : "",
    p: $props.isFixed && !$data.isNvue ? "fixed" : "static"
  }, {
    q: ($props.isMask || $data.isNvue) && $props.isFixed ? 1 : "",
    r: $props.isFixed ? $props.maskBgColor : "transparent"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4293ef75"]]);
wx.createComponent(Component);
