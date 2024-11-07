"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      vals: ["1"],
      checkboxItems: [
        {
          name: "篮球",
          value: "1",
          checked: true
        },
        {
          name: "羽毛球",
          value: "2",
          checked: false
        },
        {
          name: "乒乓球",
          value: "3",
          checked: false
        }
      ]
    };
  },
  methods: {
    change(e) {
      console.log("change:" + JSON.stringify(e.detail.value));
    }
  }
};
if (!Array) {
  const _easycom_fui_checkbox2 = common_vendor.resolveComponent("fui-checkbox");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  const _easycom_fui_checkbox_group2 = common_vendor.resolveComponent("fui-checkbox-group");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  (_easycom_fui_checkbox2 + _easycom_fui_label2 + _easycom_fui_checkbox_group2 + _easycom_fui_list_cell2)();
}
const _easycom_fui_checkbox = () => "../../../../components/firstui/fui-checkbox/fui-checkbox.js";
const _easycom_fui_label = () => "../../../../components/firstui/fui-label/fui-label.js";
const _easycom_fui_checkbox_group = () => "../../../../components/firstui/fui-checkbox-group/fui-checkbox-group.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
if (!Math) {
  (_easycom_fui_checkbox + _easycom_fui_label + _easycom_fui_checkbox_group + _easycom_fui_list_cell)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: "1"
    }),
    b: common_vendor.p({
      value: "2"
    }),
    c: common_vendor.p({
      margin: ["0", "0", "0", "40rpx"]
    }),
    d: common_vendor.o($options.change),
    e: common_vendor.o(($event) => $data.vals = $event),
    f: common_vendor.p({
      name: "checkbox",
      modelValue: $data.vals
    }),
    g: common_vendor.f($data.checkboxItems, (item, index, i0) => {
      return {
        a: "487af2a8-8-" + i0 + "," + ("487af2a8-7-" + i0),
        b: common_vendor.p({
          checked: item.checked,
          value: item.value,
          color: "#FFB703",
          borderColor: "#B2B2B2"
        }),
        c: common_vendor.t(item.name),
        d: "487af2a8-7-" + i0 + "," + ("487af2a8-6-" + i0),
        e: index,
        f: "487af2a8-6-" + i0 + ",487af2a8-5"
      };
    }),
    h: common_vendor.f($data.checkboxItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: "487af2a8-12-" + i0 + "," + ("487af2a8-11-" + i0),
        c: common_vendor.p({
          checked: item.checked,
          value: item.value
        }),
        d: "487af2a8-11-" + i0 + "," + ("487af2a8-10-" + i0),
        e: index,
        f: "487af2a8-10-" + i0 + ",487af2a8-9"
      };
    }),
    i: common_vendor.f($data.checkboxItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: "487af2a8-16-" + i0 + "," + ("487af2a8-15-" + i0),
        c: common_vendor.p({
          isCheckMark: true,
          checkMarkColor: "#FF2B2B",
          scaleRatio: 1.3,
          checked: item.checked,
          value: item.value
        }),
        d: "487af2a8-15-" + i0 + "," + ("487af2a8-14-" + i0),
        e: index,
        f: "487af2a8-14-" + i0 + ",487af2a8-13"
      };
    }),
    j: common_vendor.f($data.checkboxItems, (item, index, i0) => {
      return {
        a: "487af2a8-20-" + i0 + "," + ("487af2a8-19-" + i0),
        b: common_vendor.p({
          checked: item.checked,
          value: item.value,
          color: "#FFB703",
          borderColor: "#B2B2B2",
          borderRadius: "8rpx"
        }),
        c: common_vendor.t(item.name),
        d: "487af2a8-19-" + i0 + "," + ("487af2a8-18-" + i0),
        e: index,
        f: "487af2a8-18-" + i0 + ",487af2a8-17"
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
