(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();var t="#eae2b7",r="#f77f00",n="#fcbf49";const i=e.p+"img/Milib.png",s=(e.p,e.p,e.p+"sonidos/Bienvenida.wav");var o;e.p,e.p,document.getElementById("audio").appendChild(function(e){var t=document.createElement("audio");t.setAttribute("controls","");var r=document.createElement("source");return r.setAttribute("src",e),r.setAttribute("type","audio/wav"),t.appendChild(r),t}([s])),document.getElementById("header").appendChild(function(e,i,s,o,a){var c=document.createElement("header");c.setAttribute("class","encabezado");var l=document.createElement("h1");l.setAttribute("class","titulo"),l.innerHTML="Menu principal",l.style.color=t,c.appendChild(l);var u=document.createElement("a");u.setAttribute("class","menu"),u.setAttribute("href","./libros-populares.html"),u.innerHTML=i,u.style.color=r,u.addEventListener("mouseover",(function(){u.style.color=n})),u.addEventListener("mouseout",(function(){u.style.color=r})),c.appendChild(u);var d=document.createElement("span");d.innerHTML=" | ";var p=document.createElement("a");return p.setAttribute("class","menu"),p.setAttribute("href","./nuevos-lanzamientos.html"),p.textContent=s,p.style.color=r,p.addEventListener("mouseover",(function(){p.style.color=n})),p.addEventListener("mouseout",(function(){p.style.color=r})),c.appendChild(d),c.appendChild(p),c}(0,"Libros populares","Nuevos libros")),document.getElementById("img").appendChild(function(e,t){var r=document.createElement("div");r.setAttribute("class","img");var n=document.createElement("img");return n.setAttribute("src",e),n.setAttribute("alt","Mi libreria"),n.setAttribute("height","300px"),n.setAttribute("width","300px"),r.appendChild(n),r}([i])),document.getElementById("progress").appendChild(function(e){var r=document.createElement("div");r.setAttribute("class","progress");var n=document.createElement("br"),i=document.createElement("span");i.setAttribute("class","porcent"),i.innerHTML="Progreso del sitio",i.style.color=t;var s=document.createElement("span");s.setAttribute("class","porcent");var o=document.createElement("progress");return o.setAttribute("value","0"),o.setAttribute("max","100"),s.innerHTML="0%",s.style.color=t,r.appendChild(n),r.appendChild(i),r.appendChild(n),r.appendChild(o),r.appendChild(n),r.appendChild(s),r}()),document.head.appendChild(("./index.css",(o=document.createElement("link")).setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href","./index.css"),o))})();