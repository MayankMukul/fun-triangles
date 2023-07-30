
var answer = ['90','right'];
var btn = document.querySelector("#btn");
var qform = document.querySelector(".quizform");

function display(){
   
   var score = 0;
   var index =0;
    const qdata = new FormData(qform);
    console.log(qdata);
    for (let value of qdata.values() ){
        if (value ===answer[index]){
            score++;
        }
        index++;
    }
    console.log("your score "+ score);
}

btn.addEventListener("click",display);