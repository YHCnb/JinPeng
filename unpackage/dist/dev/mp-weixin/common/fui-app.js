"use strict";
const common_vendor = require("./vendor.js");
const fui = {
  toast: function(text) {
    text && common_vendor.index.showToast({
      title: text,
      icon: "none",
      duration: 2e3
    });
  },
  modal: function(title, content, callback, showCancel, confirmColor, confirmText) {
    common_vendor.index.showModal({
      title,
      content,
      showCancel: showCancel || false,
      cancelColor: "#7F7F7F",
      confirmColor: confirmColor || "#465CFF",
      confirmText: confirmText || "确定",
      success(res) {
        if (res.confirm) {
          callback && callback(true);
        } else {
          callback && callback(false);
        }
      },
      fail(err) {
        console.log(err);
      }
    });
  },
  href(url, isMain) {
    if (isMain) {
      common_vendor.index.switchTab({
        url
      });
    } else {
      common_vendor.index.navigateTo({
        url
      });
    }
  },
  jsonp: function(url, callback, callbackname) {
  },
  resUrl: function() {
    return "https://res.firstui.cn/static/images";
  }
};
exports.fui = fui;
