"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newProgress = void 0;
var constantes = _interopRequireWildcard(require("../assets/constantes/constantes.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var newProgress = function newProgress(porcent) {
  var div = document.createElement('div');
  div.setAttribute('class', 'progress');
  var br = document.createElement('br');
  var span = document.createElement('span');
  span.setAttribute('class', 'porcent');
  span.innerHTML = 'Progreso del sitio';
  span.style.color = constantes.textColor;
  var spanPercent = document.createElement('span');
  spanPercent.setAttribute('class', 'porcent');
  var progress = document.createElement('progress');
  if (porcent != null) {
    progress.setAttribute('value', porcent);
    progress.setAttribute('max', '100');
    spanPercent.innerHTML = porcent + '%';
  } else {
    spanPercent.innerHTML = '?%';
  }
  spanPercent.style.color = constantes.textColor;
  div.appendChild(br);
  div.appendChild(span);
  div.appendChild(br);
  div.appendChild(progress);
  div.appendChild(br);
  div.appendChild(spanPercent);
  return div;
};
exports.newProgress = newProgress;