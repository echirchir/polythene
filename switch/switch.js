"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_polythene=require("polythene/polythene/polythene"),_polythene2=_interopRequireDefault(_polythene),_selectionControl=require("polythene/selection-control/selection-control"),_selectionControl2=_interopRequireDefault(_selectionControl),_shadow=require("polythene/shadow/shadow"),_shadow2=_interopRequireDefault(_shadow);require("polythene/switch/theme/theme");var CSS_CLASSES={block:"pe-control--switch",track:"pe-control--switch__track",thumb:"pe-control--switch__thumb",knob:"pe-control--switch__knob",hitarea:"pe-control--switch__hitarea",hitareaTransparent:"pe-control--switch__hitarea--transparent"},selectionView=function(checked,opts){var zOff=void 0!==opts.zOff?opts.zOff:1,zOn=void 0!==opts.zOn?opts.zOn:2,z=checked?zOn:zOff,wash=void 0!==opts.wash?opts.wash:!0,raised=opts.disabled?!1:void 0!==opts.raised?opts.raised:!0;return[({ tag: "div", attrs: { "class": CSS_CLASSES.track }, children: [] }),({ tag: "div", attrs: { "class": CSS_CLASSES.thumb }, children: [ ({ tag: "div", attrs: { "class": CSS_CLASSES.knob }, children: [ raised?_mithril2["default"].component(_shadow2["default"],{z:z,animated:!0}):null ] }),opts.disabled?null:({ tag: "div", attrs: { "class": [CSS_CLASSES.hitarea,wash&&_polythene2["default"].isTouch?null:CSS_CLASSES.hitareaTransparent].join(" ") }, children: [] }) ] })]},createView=function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return opts.defaultClass=CSS_CLASSES.block,opts.type="checkbox",opts.selectionView=selectionView,_mithril2["default"].component(_selectionControl2["default"],opts)},component={view:function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component,module.exports=exports["default"];
//# sourceMappingURL=switch.js.map