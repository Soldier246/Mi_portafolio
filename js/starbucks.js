
let miniGreen = document.getElementById("miniGreen")
let miniLightPink = document.getElementById("miniLightPink")
let miniDarkPink = document.getElementById("miniDarkPink")
let mainCircle = document.getElementById("mainCircle")
let iceStarbucks = document.getElementById("icestarbucks")

miniGreen.addEventListener("mouseover", function(){
    mainCircle.classList.add("main-circle-green")
    mainCircle.classList.remove("main-circle-light-pink")
    mainCircle.classList.remove("main-circle-dark-pink")
    iceStarbucks.src = "img/img1.png"
}) 
miniLightPink.addEventListener("mouseover", function(){
    mainCircle.classList.remove("main-circle-green");
    mainCircle.classList.add("main-circle-light-pink")
    mainCircle.classList.remove("main-circle-dark-pink")
    iceStarbucks.src = "img/img2.png"
})
miniDarkPink.addEventListener("mouseover", function(){
    mainCircle.classList.remove("main-circle-green");
    mainCircle.classList.remove("main-circle-light-pink")
    mainCircle.classList.add("main-circle-dark-pink")
    iceStarbucks.src = "img/img3.png"
})


