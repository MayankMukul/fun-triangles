var btn = document.querySelector("#btn");
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var message = document.querySelector("#message");

function calculate(){
    var h;
    h = Math.sqrt((base.value * base.value) + (height.value * height.value));
    message.innerText = "The length of Hypotenuse is " + h ;
}
btn.addEventListener("click",calculate);