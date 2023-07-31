var btn = document.querySelector("#btn");
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var message = document.querySelector(".output");

function calculate(){
    var h;
    h = Math.sqrt((base.value * base.value) + (height.value * height.value));
    message.innerText = "The length of the hypotenuse is " + h ;
}
btn.addEventListener("click",calculate);