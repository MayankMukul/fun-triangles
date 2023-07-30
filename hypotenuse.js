var btn = document.querySelector("#btn");
var base = document.querySelector("#base");
var height = document.querySelector("#height");

function calculate(){
    console.log(base.value+","+height.value);

}

btn.addEventListener("click",calculate);