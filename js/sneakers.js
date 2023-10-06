let mainImg = document.getElementById("mainImg");
let iconLeft = document.getElementById("iconLeft")
let iconRight = document.getElementById("iconRight")
let mainImgFixed1 = document.getElementById("mainImgFixed1")
let mainImgFixed2 = document.getElementById("mainImgFixed2")
let mainImgFixed3 = document.getElementById("mainImgFixed3")
let mainImgFixed4 = document.getElementById("mainImgFixed4")

iconRight.addEventListener("click", function() {
    if (!mainImgFixed1.classList.contains("img-hidden")) {
        mainImgFixed1.classList.add("img-hidden");
        mainImgFixed2.classList.remove("img-hidden");
    }
    else if (!mainImgFixed2.classList.contains("img-hidden")) {
        mainImgFixed2.classList.add("img-hidden");
        mainImgFixed3.classList.remove("img-hidden");
    }
    else if (!mainImgFixed3.classList.contains("img-hidden")) {
        mainImgFixed3.classList.add("img-hidden");
        mainImgFixed4.classList.remove("img-hidden");
    }
    else if (!mainImgFixed4.classList.contains("img-hidden")) {
        mainImgFixed4.classList.add("img-hidden");
        mainImgFixed1.classList.remove("img-hidden");
    }
});

iconLeft.addEventListener("click", function() {
    if (!mainImgFixed4.classList.contains("img-hidden")) {
        mainImgFixed4.classList.add("img-hidden");
        mainImgFixed3.classList.remove("img-hidden");
    }
    else if (!mainImgFixed3.classList.contains("img-hidden")) {
        mainImgFixed3.classList.add("img-hidden");
        mainImgFixed2.classList.remove("img-hidden");
    }
    else if (!mainImgFixed2.classList.contains("img-hidden")) {
        mainImgFixed2.classList.add("img-hidden");
        mainImgFixed1.classList.remove("img-hidden");
    }
    else if (!mainImgFixed1.classList.contains("img-hidden")) {
        mainImgFixed1.classList.add("img-hidden");
        mainImgFixed4.classList.remove("img-hidden");
    }
});

