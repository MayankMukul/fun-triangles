var btn = document.querySelector("#btn");
var base = document.querySelector("#base");
var height = document.querySelector("#height");
var message = document.querySelector("#message");

function calculate(){
    if (base.value !=='' && height.value !==''){
        var h;
        h = Math.sqrt((base.value * base.value) + (height.value * height.value));
        message.innerHTML = `<span style="color : green">The length of Hypotenuse is ${h.toFixed(2)} </span>`;
    } else if (base.value == '' && height.value == ''){
        message.innerText = `*Enter lenght of base and height first`;
    }
   
}
btn.addEventListener("click",calculate);