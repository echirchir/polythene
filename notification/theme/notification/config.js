"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _config=require("polythene/config/config");var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var buttonPaddingH=8;exports.default={width:274,minHeight:100,border_radius:_config2.default.unit_block_border_radius,title_padding_h:buttonPaddingH,title_single_padding_v:14,title_multi_padding_v:20,side_padding:24-buttonPaddingH,font_size:14,line_height:20,color_light_background:_config2.default.rgba(_config2.default.color_dark_background,.85),color_light_text:_config2.default.rgba(_config2.default.color_dark_foreground,_config2.default.blend_light_dark_primary),color_dark_background:_config2.default.rgba(_config2.default.color_light_background),color_dark_text:_config2.default.rgba(_config2.default.color_light_foreground,_config2.default.blend_light_text_primary)};module.exports=exports["default"];