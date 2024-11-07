"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const common_fuiApp = require("./common/fui-app.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/tabbar/index/index.js";
  "./pages/tabbar/layout/layout.js";
  "./pages/tabbar/template/template.js";
  "./pages/tabbar/my/my.js";
  "./pages/common/coding/coding.js";
  "./pages/component/basics/color/color.js";
  "./pages/component/basics/text/text.js";
  "./pages/component/basics/numbers/numbers.js";
  "./pages/component/basics/icon/icon.js";
  "./pages/component/basics/button/button.js";
  "./pages/component/basics/footer/footer.js";
  "./pages/component/basics/animation/animation.js";
  "./pages/component/basics/css/css.js";
  "./pages/component/layout/layout/layout.js";
  "./pages/component/layout/grid/grid.js";
  "./pages/component/layout/list/list.js";
  "./pages/component/layout/card/card.js";
  "./pages/component/form/input/input.js";
  "./pages/component/form/inputNumber/inputNumber.js";
  "./pages/component/form/label/label.js";
  "./pages/component/form/radio/radio.js";
  "./pages/component/form/checkbox/checkbox.js";
  "./pages/component/form/switch/switch.js";
  "./pages/component/form/textarea/textarea.js";
  "./pages/component/operate/actionsheet/actionsheet.js";
  "./pages/component/operate/toast/toast.js";
  "./pages/component/operate/backdrop/backdrop.js";
  "./pages/component/operate/dialog/dialog.js";
  "./pages/component/operate/dropdownMenu/dropdownMenu.js";
  "./pages/component/operate/dropdownList/dropdownList.js";
  "./pages/component/operate/loading/loading.js";
  "./pages/component/operate/swipeAction/swipeAction.js";
  "./pages/component/nav/pagination/pagination.js";
  "./pages/component/nav/segmentedControl/segmentedControl.js";
  "./pages/component/nav/tabs/tabs.js";
  "./pages/component/nav/drawer/drawer.js";
  "./pages/component/nav/bottomPopup/bottomPopup.js";
  "./pages/component/nav/topPopup/topPopup.js";
  "./pages/component/data/badge/badge.js";
  "./pages/component/data/alert/alert.js";
  "./pages/component/data/avatar/avatar.js";
  "./pages/component/data/tag/tag.js";
  "./pages/component/data/collapse/collapse.js";
  "./pages/component/data/divider/divider.js";
  "./pages/component/data/loadmore/loadmore.js";
  "./pages/component/data/empty/empty.js";
  "./pages/component/js/utils/utils.js";
  "./pages/component/layout/section/section.js";
  "./pages/component/layout/whiteSpace/whiteSpace.js";
  "./pages/component/layout/wingBlank/wingBlank.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(store_index.store);
  app.config.globalProperties.fui = common_fuiApp.fui;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
