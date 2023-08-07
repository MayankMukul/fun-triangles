
var answer = ['90','right','one'];
var btn = document.querySelector("#btn");
var qform = document.querySelector(".quizform");
var message = document.querySelector("#message");
function display(){
   
   var score = 0;
   var index =0;

   if (qform !== ''){
    const qdata = new FormData(qform);
    for (let value of qdata.values() ){
        if (value ===answer[index]){
            score++;
        }
        index++;
    } 
    message.innerText="You scored "+score + " points.";
   }else {
    message.innerText = ('Please fill the form');
}
   
}

btn.addEventListener("click",display);