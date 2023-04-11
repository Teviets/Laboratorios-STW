"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = void 0;
var styleSheet = function styleSheet(direccion) {
  var estilo = document.createElement('link');
  estilo.setAttribute('rel', 'stylesheet');
  estilo.setAttribute('type', 'text/css');
  estilo.setAttribute('href', direccion);
  return estilo;
};
exports.styleSheet = styleSheet;