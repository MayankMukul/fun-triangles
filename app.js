var angles = document.querySelectorAll(".angle");
var btn = document.querySelector(".btn");
var message = document.querySelector("#message");

function istriangle() {
    var sum = sumoftriangle();
    if (sum === 180){
        message.innerText = ("This is a triangle");
    } else {
        message.innerText = ("This is not a triangle");
    }
}

function sumoftriangle(){
    for(var i=0, sum=0 ;i<angles.length;i++){
        sum = sum + angles[i].value*1 ;
    }
    return sum;
}

btn.addEventListener("click",istriangle)