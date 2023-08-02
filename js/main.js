let menuBar = document.getElementById("menuBar");
let menuDesplegable = document.getElementById("menuDesplegable");
let padreSubmenu = document.getElementById("padreSubmenu");
let submenu = document.getElementById("submenu");
let i = document.getElementById("i");

menuBar.addEventListener("click", function () {
    if (menuDesplegable.classList.contains("ul-transition-replegar")) {
        menuDesplegable.classList.remove("ul-transition-replegar");
        menuDesplegable.classList.add("ul-transition-desplegar")
    } else {
        menuDesplegable.classList.add("ul-transition-replegar")
        menuDesplegable.classList.remove("ul-transition-desplegar")
        submenu.classList.remove("submenu-transition");
        submenu.classList.add("submenu-invisible");
        i.classList.remove("i-transition");
    }
})
padreSubmenu.addEventListener("click", function () {
    if (submenu.classList.contains("submenu-transition")) {
        submenu.classList.remove("submenu-transition");
        submenu.classList.add("submenu-invisible");
        i.classList.remove("i-transition");
    } else {
        submenu.classList.add("submenu-transition")
        submenu.classList.remove("submenu-invisible");
        i.classList.add("i-transition");
    }
})
hijoSubmenu.addEventListener("click", function () {
    if (hijomenu.classList.contains("submenu-transition")) {
        hijomenu.classList.remove("submenu-transition");
        hijomenu.classList.add("submenu-invisible");
        o.classList.remove("o-transition");
    } else {
        hijomenu.classList.add("submenu-transition")
        hijomenu.classList.remove("submenu-invisible");
        o.classList.add("o-transition");
    }
})