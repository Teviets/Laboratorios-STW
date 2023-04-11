"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newEncabezado = void 0;
var constantes = _interopRequireWildcard(require("../assets/constantes/constantes.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var newEncabezado = function newEncabezado(titulo, menu1, menu2, link1, link2) {
  var encabezado = document.createElement('header');
  encabezado.setAttribute('class', 'encabezado');
  var tituloH = document.createElement('h1');
  tituloH.setAttribute('class', 'titulo');
  tituloH.innerHTML = titulo;
  tituloH.style.color = constantes.textColor;
  encabezado.appendChild(tituloH);
  if (menu1 != null) {
    var menuLink1 = document.createElement('a');
    menuLink1.setAttribute('class', 'menu');
    menuLink1.setAttribute('href', link1);
    menuLink1.innerHTML = menu1;
    menuLink1.style.color = constantes.linksColor;
    menuLink1.addEventListener('mouseover', function () {
      menuLink1.style.color = constantes.linksHoverColor;
    });
    menuLink1.addEventListener('mouseout', function () {
      menuLink1.style.color = constantes.linksColor;
    });
    encabezado.appendChild(menuLink1);
  }
  if (menu2 != null) {
    var span = document.createElement('span');
    span.innerHTML = ' | ';
    var menuLink2 = document.createElement('a');
    menuLink2.setAttribute('class', 'menu');
    menuLink2.setAttribute('href', link2);
    menuLink2.textContent = menu2;
    menuLink2.style.color = constantes.linksColor;
    menuLink2.addEventListener('mouseover', function () {
      menuLink2.style.color = constantes.linksHoverColor;
    });
    menuLink2.addEventListener('mouseout', function () {
      menuLink2.style.color = constantes.linksColor;
    });
    encabezado.appendChild(span);
    encabezado.appendChild(menuLink2);
  }
  return encabezado;
};
exports.newEncabezado = newEncabezado;