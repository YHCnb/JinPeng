"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      radioItems: [
        {
          name: "小于18岁",
          value: "1",
          checked: true
        },
        {
          name: "18~28岁",
          value: "2",
          checked: false
        },
        {
          name: "29~40岁",
          value: "3",
          checked: false
        }
      ],
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
  methods: {}
};
if (!Array) {
  const _easycom_fui_radio2 = common_vendor.resolveComponent("fui-radio");
  const _easycom_fui_list_cell2 = common_vendor.resolveComponent("fui-list-cell");
  const _easycom_fui_label2 = common_vendor.resolveComponent("fui-label");
  const _easycom_fui_radio_group2 = common_vendor.resolveComponent("fui-radio-group");
  const _easycom_fui_checkbox2 = common_vendor.resolveComponent("fui-checkbox");
  const _easycom_fui_checkbox_group2 = common_vendor.resolveComponent("fui-checkbox-group");
  const _easycom_fui_switch2 = common_vendor.resolveComponent("fui-switch");
  (_easycom_fui_radio2 + _easycom_fui_list_cell2 + _easycom_fui_label2 + _easycom_fui_radio_group2 + _easycom_fui_checkbox2 + _easycom_fui_checkbox_group2 + _easycom_fui_switch2)();
}
const _easycom_fui_radio = () => "../../../../components/firstui/fui-radio/fui-radio.js";
const _easycom_fui_list_cell = () => "../../../../components/firstui/fui-list-cell/fui-list-cell.js";
const _easycom_fui_label = () => "../../../../components/firstui/fui-label/fui-label.js";
const _easycom_fui_radio_group = () => "../../../../components/firstui/fui-radio-group/fui-radio-group.js";
const _easycom_fui_checkbox = () => "../../../../components/firstui/fui-checkbox/fui-checkbox.js";
const _easycom_fui_checkbox_group = () => "../../../../components/firstui/fui-checkbox-group/fui-checkbox-group.js";
const _easycom_fui_switch = () => "../../../../components/firstui/fui-switch/fui-switch.js";
if (!Math) {
  (_easycom_fui_radio + _easycom_fui_list_cell + _easycom_fui_label + _easycom_fui_radio_group + _easycom_fui_checkbox + _easycom_fui_checkbox_group + _easycom_fui_switch)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.radioItems, (item, index, i0) => {
      return {
        a: "07a0fc1c-3-" + i0 + "," + ("07a0fc1c-2-" + i0),
        b: common_vendor.p({
          checked: item.checked,
          value: item.value
        }),
        c: common_vendor.t(item.name),
        d: "07a0fc1c-2-" + i0 + "," + ("07a0fc1c-1-" + i0),
        e: index,
        f: "07a0fc1c-1-" + i0 + ",07a0fc1c-0"
      };
    }),
    b: common_vendor.f($data.checkboxItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: "07a0fc1c-7-" + i0 + "," + ("07a0fc1c-6-" + i0),
        c: common_vendor.p({
          isCheckMark: true,
          checkMarkColor: "#FFB703",
          scaleRatio: 1.3,
          checked: item.checked,
          value: item.value
        }),
        d: "07a0fc1c-6-" + i0 + "," + ("07a0fc1c-5-" + i0),
        e: index,
        f: "07a0fc1c-5-" + i0 + ",07a0fc1c-4"
      };
    }),
    c: common_vendor.p({
      scaleRatio: 0.8,
      color: "#FFB703"
    }),
    d: common_vendor.p({
      type: "checkbox",
      color: "#09BE4F",
      scaleRatio: 1.1
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
