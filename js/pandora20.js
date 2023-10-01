let imgSlider = document.querySelectorAll(".div-img-slider");
let chevronRight = document.getElementById("chevronRight");

let margin = -100;
let data = [];
for (let x = 0; x < imgSlider.length; x++) {
    margin = margin + 100;
    data[x] = margin;
    imgSlider[x].style.marginLeft = margin + "%";
}

let intervalId;
chevronRight.addEventListener("click", function () {

    for (let x = 0; x < imgSlider.length; x++) {
        data[x] = data[x] - 100;
    }
    ir(data);
    clearInterval(intervalId);
    interval()
})

function ir(data) {
    for (let x = 0; x < data.length; x++) {
        if (data[x] == -200) {
            data[x] = 100;
            imgSlider[x].style.transition = "margin 0s";
            console.log(data[x])
            imgSlider[x].style.marginLeft = 100 + "%";
        } else {
            imgSlider[x].style.transition = "margin 0.5s";
            imgSlider[x].style.marginLeft = data[x] + "%";

        }
    }
}
function interval() {
    intervalId = setInterval(() => {
        for (let x = 0; x < imgSlider.length; x++) {
            data[x] = data[x] - 100;
        }
        ir(data);
    }, 2000);
}
interval();