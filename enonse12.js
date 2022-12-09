const div=document.getElementById('timer');
let sec=div.getAttribute('value');
div.innerHTML=sec;

let tim=setInterval(
function(){
    sec--;
    div.innerHTML=sec;
    if(sec<0){
        div.innerHTML='time out';
        clearInterval(tim);
    }
},1000);
