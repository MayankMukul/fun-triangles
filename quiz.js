
var answer = ['90','right'];
var btn = document.querySelector("#btn");
var form = document.querySelector(".quizform");

function display(){
   
   var score = 0;
   var index =0;
    const data = new FormData(form);
    console.log(data);
    for (let item in data.entries ){
        console.log(item);
    }

}

btn.addEventListener("click",display);