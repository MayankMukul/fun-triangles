var base1 = document.querySelector("#base1");
var height1 = document.querySelector("#height1");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var output = document.querySelectorAll(".message");
var lengths = document.querySelectorAll(".length");

function area1() {
    if (base1.value !=='' && height1.value !== ''){
        var area = 0.5 * (base1.value * height1.value) ;
        output[0].innerHTML = `<span style="color : green"> The area of triangle whose base ${base1.value} and height ${height1.value} is "${area} </span>`;    
    }else if (base1.value =='' && height1.value == ''){
        output[0].innerText = "*First enter length of base and height!";
    } else if (base1.value ==''){
        output[0].innerText = "*First enter length of base!";
    } else if (height1.value == '') {
        output[0].innerText = "*First enter length of height!";
    }
   }

function area2 ( ){
    if (lengths[0].value !=='' && lengths[1].value !== '' && lengths[2].value !== ''){
        var s = (lengths[0].value + lengths[1].value + lengths[2].value)/2;
        var area = Math.sqrt(s*(s-lengths[0].value)*(s-lengths[1].value)*(s-lengths[2].value));
        output[1].innerHTML = `<span style="color : green">The area of triangle with sides ${lengths[0].value}, ${lengths[1].value}, ${lengths[2].value} is ${area}</span>`;
    } else if (lengths[0].value =='' && lengths[1].value == '' && lengths[2].value == ''){
        output[1].innerText =`*First enter all the sides!`;
    }else if (lengths[0].value ==''){
        output[1].innerText= `*Enter first side!`;
    }else if (lengths[1].value ==''){
        output[1].innerText=`*Enter second side!`;
    }else if (lengths[2].value ==''){
        output[1].innerText=`*Enter third side!`;
    }
    
}

btn1.addEventListener("click",area1);
btn2.addEventListener("click",area2);