"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const tabs = [{
  id: "basics",
  name: "基础组件",
  data: [{
    icon: "color",
    name: "Color 色彩",
    vip: false,
    page: "color"
  }, {
    icon: "card",
    name: "Text 文本",
    vip: false,
    page: "text"
  }, {
    icon: "digitalroller",
    name: "Number 数字",
    vip: false,
    page: "numbers"
  }, {
    icon: "icon",
    name: "Icon 图标",
    vip: false,
    page: "icon"
  }, {
    icon: "button",
    name: "Button 按钮",
    vip: false,
    page: "button"
  }, {
    icon: "footer",
    name: "Footer 页脚",
    vip: false,
    page: "footer"
  }, {
    icon: "animation",
    name: "Animation 动画",
    vip: false,
    page: "animation"
  }, {
    icon: "color",
    name: "CSS 常用样式",
    vip: false,
    page: "css"
  }]
}, {
  id: "layout",
  name: "布局组件",
  data: [{
    icon: "layout",
    name: "Layout 栅格布局",
    vip: false,
    page: "layout"
  }, {
    icon: "grid",
    name: "Grid 宫格",
    vip: false,
    page: "grid"
  }, {
    icon: "list",
    name: "List 列表",
    vip: false,
    page: "list"
  }, {
    icon: "card",
    name: "Card 卡片",
    vip: false,
    page: "card"
  }, {
    icon: "label",
    name: "Section 标题栏",
    vip: false,
    page: "section"
  }, {
    icon: "textarea",
    name: "WhiteSpace 上下间距",
    vip: false,
    page: "whiteSpace"
  }, {
    icon: "checkbox",
    name: "WingBlank 左右间距",
    vip: false,
    page: "wingBlank"
  }]
}, {
  id: "form",
  name: "表单组件",
  data: [{
    icon: "input",
    name: "Input 输入框",
    vip: false,
    page: "input"
  }, {
    icon: "inputnumber",
    name: "InputNumber 数字输入框",
    vip: false,
    page: "inputNumber"
  }, {
    icon: "label",
    name: "Label 标签",
    vip: false,
    page: "label"
  }, {
    icon: "radio",
    name: "Radio 单选框",
    vip: false,
    page: "radio"
  }, {
    icon: "checkbox",
    name: "Checkbox 复选框",
    vip: false,
    page: "checkbox"
  }, {
    icon: "switch",
    name: "Switch 开关",
    vip: false,
    page: "switch"
  }, {
    icon: "textarea",
    name: "Textarea 多行输入框",
    vip: false,
    page: "textarea"
  }]
}, {
  id: "operate",
  name: "操作反馈",
  data: [{
    icon: "actionsheet",
    name: "ActionSheet 上拉菜单",
    vip: false,
    page: "actionsheet"
  }, {
    icon: "toast",
    name: "Toast 轻提示",
    vip: false,
    page: "toast"
  }, {
    icon: "backdrop",
    name: "Backdrop 遮罩层",
    vip: false,
    page: "backdrop"
  }, {
    icon: "dialog",
    name: "Dialog 对话框",
    vip: false,
    page: "dialog"
  }, {
    icon: "dropdownmenu",
    name: "DropdownMenu 下拉菜单",
    vip: false,
    page: "dropdownMenu"
  }, {
    icon: "dropdownmenu",
    name: "DropdownList 下拉菜单",
    vip: false,
    page: "dropdownList"
  }, {
    icon: "loading",
    name: "Loading 加载",
    vip: false,
    page: "loading"
  }, {
    icon: "swipeaction",
    name: "SwipeAction 滑动菜单",
    vip: false,
    page: "swipeAction"
  }]
}, {
  id: "nav",
  name: "导航组件",
  data: [{
    icon: "pagination",
    name: "Pagination 分页器",
    vip: false,
    page: "pagination"
  }, {
    icon: "segmentedcontrol",
    name: "SegmentedControl 分段器",
    vip: false,
    page: "segmentedControl"
  }, {
    icon: "tabs",
    name: "Tabs 标签页",
    vip: false,
    page: "tabs"
  }, {
    icon: "drawer",
    name: "Drawer 抽屉",
    vip: false,
    page: "drawer"
  }, {
    icon: "bottompopup",
    name: "BottomPopup 底部弹出层",
    vip: false,
    page: "bottomPopup"
  }, {
    icon: "toppopup",
    name: "TopPopup 顶部弹出层",
    vip: false,
    page: "topPopup"
  }]
}, {
  id: "data",
  name: "数据组件",
  data: [{
    icon: "badge",
    name: "Badge 徽章",
    vip: false,
    page: "badge"
  }, {
    icon: "alert",
    name: "Alert 警告框",
    vip: false,
    page: "alert"
  }, {
    icon: "avatar",
    name: "Avatar 头像",
    vip: false,
    page: "avatar"
  }, {
    icon: "tag",
    name: "Tag 标签",
    vip: false,
    page: "tag"
  }, {
    icon: "collapse",
    name: "Collapse 折叠面板",
    vip: false,
    page: "collapse"
  }, {
    icon: "divider",
    name: "Divider 分割线",
    vip: false,
    page: "divider"
  }, {
    icon: "loadmore",
    name: "LoadMore 加载更多",
    vip: false,
    page: "loadmore"
  }, {
    icon: "empty",
    name: "Empty 缺省页",
    vip: false,
    page: "empty"
  }]
}, {
  id: "js",
  name: "JS组件",
  data: [{
    icon: "utils",
    name: "Utils 工具类",
    vip: false,
    page: "utils"
  }]
}];
const _sfc_main = {
  data() {
    return {
      tabs,
      scrollInto: "",
      tabIndex: 0,
      height: 0
    };
  },
  onLoad() {
    setTimeout(() => {
      this.height = common_vendor.index.getSystemInfoSync().windowHeight - common_vendor.index.upx2px(538);
      this.getStatus().then((res) => {
      });
    }, 50);
  },
  methods: {
    ...common_vendor.mapActions(["getStatus"]),
    tabClick(index) {
      this.switchTab(index);
    },
    tabChange(e) {
      if (e.detail.source == "touch") {
        let index = e.target.current || e.detail.current;
        this.switchTab(index);
      }
    },
    switchTab(index) {
      if (this.tabIndex === index)
        return;
      this.tabIndex = index;
      let scrollIndex = index - 1 < 0 ? 0 : index - 1;
      this.scrollInto = this.tabs[scrollIndex].id;
    },
    href(type, page) {
      if (page) {
        this.fui.href(`/pages/component/${type}/${page}/${page}`);
      } else {
        this.fui.href("/pages/common/coding/coding");
      }
    }
  },
  onShareAppMessage() {
    return {
      title: "First UI组件库"
    };
  }
};
if (!Array) {
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  _easycom_fui_list_cell2();
}
const _easycom_fui_list_cell = () => "../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  _easycom_fui_list_cell();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_vendor.f($data.tabs, (tab, index, i0) => {
      return {
        a: common_vendor.t(tab.name),
        b: $data.tabIndex === index ? 1 : "",
        c: index,
        d: $data.tabIndex === index ? 1 : "",
        e: tab.id,
        f: common_vendor.o(($event) => $options.tabClick(index), index)
      };
    }),
    d: $data.scrollInto,
    e: common_vendor.f($data.tabs, (tab, index, i0) => {
      return {
        a: common_vendor.f(tab.data, (item, idx, i1) => {
          return common_vendor.e({
            a: `/static/images/index/light/icon_${item.icon}_3x.png`,
            b: common_vendor.t(item.name),
            c: item.vip
          }, item.vip ? {
            d: common_assets._imports_0$1
          } : {}, {
            e: idx,
            f: common_vendor.o(($event) => $options.href(tab.id, item.page), idx),
            g: "2e2ff614-0-" + i0 + "-" + i1
          });
        }),
        b: tab.id
      };
    }),
    f: common_vendor.p({
      arrow: true,
      padding: [0, "32rpx"],
      bottomBorder: false,
      radius: "16rpx",
      marginTop: "24"
    }),
    g: $data.height + "px",
    h: $data.tabIndex,
    i: common_vendor.o((...args) => $options.tabChange && $options.tabChange(...args)),
    j: $data.height + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
