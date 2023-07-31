var angles = document.querySelectorAll(".angle");
var btn = document.querySelector(".btn");
var message = document.querySelector("#message");

function istriangle() {
    var sum = sumoftriangle();
    if (sum === 180){
        message.innerText = ("Yes! It is a Triangle");
    } else {
        message.innerText = ("Nope! It is not a Triangle");
    }
}

function sumoftriangle(){
    for(var i=0, sum=0 ;i<angles.length;i++){
        sum = sum + angles[i].value*1 ;
    }
    return sum;
}

btn.addEventListener("click",istriangle)