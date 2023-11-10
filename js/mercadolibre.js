let mainContent = document.getElementById("mainContent");
let boxProducto = document.createElement("div");

mainContent.appendChild(boxProducto);
boxProducto.setAttribute("class", "box-producto");

let boxImgProducto = document.createElement("div");
boxProducto.appendChild(boxImgProducto);
boxImgProducto.setAttribute("class", "box-img-producto")

let imgProducto = document.createElement("img");
boxImgProducto.appendChild(imgProducto);
imgProducto.setAttribute("src", "img/D_NQ_NP_693318-MCO72166496087_102023-O (1).png");

let boxInfoProducto = document.createElement("div");
boxProducto.appendChild(boxImgProducto);
imgProducto.setAttribute("class", "img-producto");