var base1 = document.querySelector("#base1");
var height1 = document.querySelector("#height1");
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var output = document.querySelectorAll(".message");
var lengths = document.querySelectorAll(".length");

function area1() {
    var area = 0.5 * (base1.value *height1.value) ;
    output[0].innerText = "The area of the triangle whose base "+base1.value+" and height "+height1.value+" is "+area;
}

function area2 ( ){
    var s = (lengths[0].value + lengths[1].value + lengths[2].value)/2;
    var area = Math.sqrt(s*(s-lengths[0].value)*(s-lengths[1].value)*(s-lengths[2].value));
    output[1].innerText = `The area of the triangle with sides ${lengths[0].value}, ${lengths[1].value}, ${lengths[2].value} is ${area}`;

}

btn1.addEventListener("click",area1);
btn2.addEventListener("click",area2);