import * as constantes from "../assets/constantes/constantes.jss";

export const newArticle = (titulo,subtitulo,img,alt,texto) => {
    var article = document.createElement("article");

    var h1 = document.createElement("h1");
    h1.setAttribute("id", "titulo");
    h1.innerHTML = titulo;
    h1.style.color = constantes.colorTitulo;

    var h4 = document.createElement("h4");
    h4.setAttribute("id", "titulo2");
    h4.innerHTML = subtitulo;
    h4.style.color = constantes.colorTitulo;

    var img = document.createElement("img");
    img.setAttribute("src", img);
    img.setAttribute("alt", alt);
    img.setAttribute("height", constantes.imgHeight);
    img.setAttribute("width", constantes.imgWidth);

    var br = document.createElement("br");

    var p = document.createElement("p");
    p.setAttribute("id", "parrafo");
    p.innerHTML = texto;
    p.style.color = constantes.textColor;

    article.appendChild(h1);
    article.appendChild(h4);
    article.appendChild(img);
    article.appendChild(br);
    article.appendChild(br);
    article.appendChild(p);

    return article;
};