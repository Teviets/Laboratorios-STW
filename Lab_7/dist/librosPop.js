(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{pR:()=>s,VG:()=>l,oi:()=>o,Z$:()=>n,zP:()=>r});const r="#eae2b7",o="#f77f00",n="#fcbf49",s="300px",l="300px";document.getElementById("audio").appendChild((e=>{var t=document.createElement("audio");t.setAttribute("controls","");var r=document.createElement("source");return r.setAttribute("src","../assets/sonidos/LibrosPop.wav"),r.setAttribute("type","audio/wav"),t.appendChild(r),t})()),document.getElementById("header").appendChild(((e,r,o,n,s)=>{var l=document.createElement("header");l.setAttribute("class","encabezado");var a=document.createElement("h1");return a.setAttribute("class","titulo"),a.innerHTML="Libros Populares",a.style.color=t.colorTitulo,l.appendChild(a),l})()),document.getElementById("list").appendChild(((e,t,s)=>{var l;(l=document.createElement("ul")).setAttribute("id","lista");for(let s=0;s<e.length;s++){var a=document.createElement("li");if(a.setAttribute("class","elemento"),a.innerHTML=e[s],a.style.color=r,null!=t[s]){var i=document.createElement("br"),d=document.createElement("a");d.setAttribute("class","descripcion"),d.setAttribute("href",t[s]),d.innerHTML="Ver más",d.style.color=o,d.addEventListener("mouseover",(()=>{d.style.color=n})),d.addEventListener("mouseout",(()=>{d.style.color=o})),a.appendChild(i),a.appendChild(d)}l.appendChild(a)}return l})(["Harry Potter: el pricionero de Azcaban, J.K. Rowling","The witcher: el ultimo deseo, Andrzej Sapkowski","Los juegos del hambre: Sinsajo, Suzanne Collins","Divergente, Veronica Roth"],["https://quelibroleo.com/harry-potter-y-el-prisionero-de-azkaban-edicion-ilustrada","https://www.goodreads.com/book/show/11661389-el-ltimo-deseo-la-espada-del-destino","https://quelibroleo.com/sinsajo-los-juegos-del-hambre-3","https://quelibroleo.com/divergente"])),document.getElementById("img").appendChild(((e,t)=>{var r=document.createElement("div");r.setAttribute("class","img");var o=document.createElement("img");return o.setAttribute("src","../assets/img/LibrosPop.png"),o.setAttribute("alt","Mi libreria"),o.setAttribute("height",s),o.setAttribute("width",l),r.appendChild(o),r})()),document.getElementById("progress").appendChild((e=>{var t=document.createElement("div");t.setAttribute("class","progress");var o=document.createElement("br"),n=document.createElement("span");n.setAttribute("class","porcent"),n.innerHTML="Progreso del sitio",n.style.color=r;var s=document.createElement("span");s.setAttribute("class","porcent");var l=document.createElement("progress");return l.setAttribute("value",e),l.setAttribute("max","100"),s.innerHTML="50%",s.style.color=r,t.appendChild(o),t.appendChild(n),t.appendChild(o),t.appendChild(l),t.appendChild(o),t.appendChild(s),t})("50")),document.head.appendChild((e=>{let t=document.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href","../assets/css/libros-populares.css"),t})())})();