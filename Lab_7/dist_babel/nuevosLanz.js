(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t="#eae2b7",n="#f77f00",r="#fcbf49";e.p,e.p;const i=e.p+"img/NuevLanz.png",a=(e.p,e.p,e.p+"sonidos/NuevosLanzamientos.wav");var l;document.getElementById("audio").appendChild(function(e){var t=document.createElement("audio");t.setAttribute("controls","");var n=document.createElement("source");return n.setAttribute("src",e),n.setAttribute("type","audio/wav"),t.appendChild(n),t}([a])),document.getElementById("header").appendChild(function(e,n,r,i,a){var l=document.createElement("header");l.setAttribute("class","encabezado");var o=document.createElement("h1");return o.setAttribute("class","titulo"),o.innerHTML="Nuevos lanzamientos",o.style.color=t,l.appendChild(o),l}()),document.getElementById("list").appendChild(function(e,i,a){var l;(l=document.createElement("ol")).setAttribute("id","lista");for(var o=0;o<e.length;o++){var s=document.createElement("li");if(s.setAttribute("class","elemento"),s.innerHTML=e[o],s.style.color=t,null!=i[o]){var c=document.createElement("br"),d=document.createElement("a");d.setAttribute("class","descripcion"),d.setAttribute("href",i[o]),d.innerHTML="Ver más",d.style.color=n,d.addEventListener("mouseover",(function(){d.style.color=r})),d.addEventListener("mouseout",(function(){d.style.color=n})),s.appendChild(c),s.appendChild(d)}l.appendChild(s)}return l}(["Dune, Frank Herbert","Diario de greg, Jeff Kinney","Juego de tronos, George R. R. Martin","El hobbit, J. R. R. Tolkien","El gran gatsby, F. Scott Fitzgerald","Comentario de articulo, Sebastian Estrada","Mi historia, Sebastian Estrada"],[null,null,null,null,null,null,null])),document.getElementById("img").appendChild(function(e,t){var n=document.createElement("div");n.setAttribute("class","img");var r=document.createElement("img");return r.setAttribute("src",e),r.setAttribute("alt","Mi libreria"),r.setAttribute("height","300px"),r.setAttribute("width","300px"),n.appendChild(r),n}([i])),document.getElementById("progress").appendChild(function(e){var n=document.createElement("div");n.setAttribute("class","progress");var r=document.createElement("br"),i=document.createElement("span");i.setAttribute("class","porcent"),i.innerHTML="Progreso del sitio",i.style.color=t;var a=document.createElement("span");a.setAttribute("class","porcent");var l=document.createElement("progress");return a.innerHTML="?%",a.style.color=t,n.appendChild(r),n.appendChild(i),n.appendChild(r),n.appendChild(l),n.appendChild(r),n.appendChild(a),n}()),document.head.appendChild(("./nuevos-lanzamientos.css",(l=document.createElement("link")).setAttribute("rel","stylesheet"),l.setAttribute("type","text/css"),l.setAttribute("href","./nuevos-lanzamientos.css"),l))})();