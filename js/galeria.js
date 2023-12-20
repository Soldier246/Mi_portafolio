let columnsGaleria = document.querySelectorAll(".column-galeria")
let galeriaImgs = document.getElementById("galeriaImgs")
let cloneColumnGaleria = columnsGaleria[0].cloneNode(true)
let countColumnGaleria = columnsGaleria.length
let countColumn = 0;
let quitColumn = true;
let columnsQuit = 0;
function resizeImg() {
    if (document.body.scrollWidth <= "750") {
        if (quitColumn == true) {
            quitColumn = false;
            if (columnsGaleria[countColumnGaleria - 1] && columnsGaleria[countColumnGaleria - 2]) {
                columnsGaleria[countColumnGaleria - 1].remove()
                columnsGaleria[countColumnGaleria - 2].remove()
                columnsQuit = 2;
            }
        }
        countColumnGaleria = document.querySelectorAll(".column-galeria").length
    } else {
        quitColumn = true;
        for(let x = 0; x < columnsQuit ; x++){
            let clone = cloneColumnGaleria.cloneNode(true)
            galeriaImgs.appendChild(clone)
        }
        countColumnGaleria = document.querySelectorAll(".column-galeria").length
        columnsGaleria = document.querySelectorAll(".column-galeria")
        columnsQuit = 0;
    }
}

resizeImg()
window.addEventListener("resize", function () {
    countColumn = 0;
    resizeImg()
    insetImg()
})

let imgs = [
    "IMG-GALERIA (1).jpg",
    "IMG-GALERIA (3).jpeg",
    "IMG-GALERIA (1).jpeg",
    "IMG-GALERIA (5).PNG",
    "IMG-GALERIA (4).PNG",
    "IMG-GALERIA (1).png",
    "IMG-GALERIA (2).PNG",
    "IMG-GALERIA (6).PNG",
    "IMG-GALERIA (2).jpeg",
    "IMG-GALERIA (3).PNG",
]
function insetImg() {
    for (let x = 0; x < countColumnGaleria; x++) {
        columnsGaleria[x].innerHTML = ""
    }
    for (let x = 0; x < imgs.length; x++) {
        let img = document.createElement("img")
        img.setAttribute("src", "img/Imagenes.trabajos/"+imgs[x])
        columnsGaleria[countColumn].appendChild(img)
        countColumn = countColumn + 1
        if (countColumn > (countColumnGaleria - 1)) {
            countColumn = 0;
        }
    }
}
insetImg()
