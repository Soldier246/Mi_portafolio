let boxStyle3 = document.getElementById("boxStyle3");

boxStyle3.addEventListener("click", function () {
    if (boxStyle3.classList.contains("transition-box-3")) {
        boxStyle3.classList.remove("transition-box-3")
    } else {
        boxStyle3.classList.add("transition-box-3")
    }
    /* boxStyle3.classList.toggle("transition-box-3") */
})