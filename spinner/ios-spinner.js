"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_spinner=require("polythene/spinner/spinner"),_spinner2=_interopRequireDefault(_spinner);require("polythene/spinner/theme/ios/theme");var CSS_CLASSES={block:"pe-spinner--ios"},component={view:function(ctrl){for(var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],blades=[],i=0;12>i;i+=1)blades.push(({ tag: "div", attrs: {  }, children: [] }));return opts.content=blades,opts["class"]=[CSS_CLASSES.block,opts["class"]].join(" "),_mithril2["default"].component(_spinner2["default"],opts)}};exports["default"]=component,module.exports=exports["default"];
//# sourceMappingURL=ios-spinner.js.map