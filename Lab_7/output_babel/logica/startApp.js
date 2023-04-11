"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nuevosLanzamientosApp = exports.librosPopularesApp = exports.indexApp = void 0;
var _audios = require("../modularidad/audios.js");
var _encabezado = require("../modularidad/encabezado.js");
var _img = require("../modularidad/img.js");
var _progress = require("../modularidad/progress.js");
var _lista = require("../modularidad/lista.js");
var _link = require("../Modularidad/link.js");
var _Milib = _interopRequireDefault(require("../assets/img/Milib.png"));
var _LibrosPop = _interopRequireDefault(require("../assets/img/LibrosPop.png"));
var _NuevLanz = _interopRequireDefault(require("../assets/img/NuevLanz.png"));
var _Bienvenida = _interopRequireDefault(require("../assets/sonidos/Bienvenida.wav"));
var _LibrosPop2 = _interopRequireDefault(require("../assets/sonidos/LibrosPop.wav"));
var _NuevosLanzamientos = _interopRequireDefault(require("../assets/sonidos/NuevosLanzamientos.wav"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var indexApp = function indexApp() {
  document.getElementById('audio').appendChild((0, _audios.newAudio)([_Bienvenida["default"]]));
  document.getElementById('header').appendChild((0, _encabezado.newEncabezado)('Menu principal', 'Libros populares', 'Nuevos libros', './libros-populares.html', './nuevos-lanzamientos.html'));
  document.getElementById('img').appendChild((0, _img.newImg)([_Milib["default"]], 'Mi libreria'));
  document.getElementById('progress').appendChild((0, _progress.newProgress)('0'));
  document.head.appendChild((0, _link.styleSheet)('./index.css'));
};
exports.indexApp = indexApp;
var librosPopularesApp = function librosPopularesApp() {
  document.getElementById('audio').appendChild((0, _audios.newAudio)([_LibrosPop2["default"]]));
  document.getElementById('header').appendChild((0, _encabezado.newEncabezado)('Libros Populares', null, null, null, null));
  document.getElementById('list').appendChild((0, _lista.newList)(['Harry Potter: el pricionero de Azcaban, J.K. Rowling', 'The witcher: el ultimo deseo, Andrzej Sapkowski', 'Los juegos del hambre: Sinsajo, Suzanne Collins', 'Divergente, Veronica Roth'], ['https://quelibroleo.com/harry-potter-y-el-prisionero-de-azkaban-edicion-ilustrada', 'https://www.goodreads.com/book/show/11661389-el-ltimo-deseo-la-espada-del-destino', 'https://quelibroleo.com/sinsajo-los-juegos-del-hambre-3', 'https://quelibroleo.com/divergente'], false));
  document.getElementById('img').appendChild((0, _img.newImg)([_LibrosPop["default"]], 'Mi libreria'));
  document.getElementById('progress').appendChild((0, _progress.newProgress)('50'));
  document.head.appendChild((0, _link.styleSheet)('./libros-populares.css'));
};
exports.librosPopularesApp = librosPopularesApp;
var nuevosLanzamientosApp = function nuevosLanzamientosApp() {
  document.getElementById('audio').appendChild((0, _audios.newAudio)([_NuevosLanzamientos["default"]]));
  document.getElementById('header').appendChild((0, _encabezado.newEncabezado)('Nuevos lanzamientos', null, null, null, null));
  document.getElementById('list').appendChild((0, _lista.newList)(['Dune, Frank Herbert', 'Diario de greg, Jeff Kinney', 'Juego de tronos, George R. R. Martin', 'El hobbit, J. R. R. Tolkien', 'El gran gatsby, F. Scott Fitzgerald', 'Comentario de articulo, Sebastian Estrada', 'Mi historia, Sebastian Estrada'], [null, null, null, null, null, null, null], true));
  document.getElementById('img').appendChild((0, _img.newImg)([_NuevLanz["default"]], 'Mi libreria'));
  document.getElementById('progress').appendChild((0, _progress.newProgress)(null));
  document.head.appendChild((0, _link.styleSheet)('./nuevos-lanzamientos.css'));
};
exports.nuevosLanzamientosApp = nuevosLanzamientosApp;