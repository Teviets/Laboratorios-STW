"use strict";

export const newAudio = src => {
  var audio = document.createElement("audio");
  audio.setAttribute('controls', '');
  var source = document.createElement("source");
  source.setAttribute('src', src);
  source.setAttribute('type', 'audio/wav');
  audio.appendChild(source);
  return audio;
};