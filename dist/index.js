'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_lodash=require('lodash'),_lodash2=_interopRequireDefault(_lodash),_core=require('@babel/core'),_presetReact=require('@babel/preset-react'),_presetReact2=_interopRequireDefault(_presetReact),_sandboxer=require('./lib/sandboxer'),_sandboxer2=_interopRequireDefault(_sandboxer),_render=require('./lib/render'),_render2=_interopRequireDefault(_render);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}exports.default=function(a){var b=a.children,c=a.imports,d=(0,_core.transform)(b,{presets:[_presetReact2.default],plugins:[_sandboxer2.default]}),e=d.code,f=_extends({},c,{render:_render2.default});return new(Function.prototype.bind.apply(Function,[null].concat(_toConsumableArray(_lodash2.default.keys(f)),[e])))().apply(void 0,_toConsumableArray(_lodash2.default.values(f)))};