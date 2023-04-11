"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newAudio = void 0;
var newAudio = function newAudio(src) {
  var audio = document.createElement("audio");
  audio.setAttribute('controls', '');
  var source = document.createElement("source");
  source.setAttribute('src', src);
  source.setAttribute('type', 'audio/wav');
  audio.appendChild(source);
  return audio;
};
exports.newAudio = newAudio;