
var answer = ['90','right'];
var btn = document.querySelector("#btn");
var qform = document.querySelector(".quizform");
var message = document.querySelector(".message");
function display(){
   
   var score = 0;
   var index =0;
    const qdata = new FormData(qform);
    for (let value of qdata.values() ){
        if (value ===answer[index]){
            score++;
        }
        index++;
    }

    message.innerText="your score is : "+score;
}

btn.addEventListener("click",display);