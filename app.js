var angles = document.querySelectorAll(".angle");
var btn = document.querySelector(".btn");
var message = document.querySelector("#message");

function istriangle() {

    if (angles[0].value !=='' && angles[1].value !=='' && angles[2].value !==''){
        var sum = sumoftriangle();
        if (sum === 180){
            message.innerHTML = `<span style="color:green">Yes! It is a Triangle. </span>`;
        } else {
            message.innerHTML = `<span style="color:red">Nope! It is not a Triangle. </span>`;
        }
    }else {
        message.innerText="*Enter the angles first!";
    }
   
}

function sumoftriangle(){
    for(var i=0, sum=0 ;i<angles.length;i++){
        sum = sum + angles[i].value*1 ;
    }
    return sum;
}

btn.addEventListener("click",istriangle)