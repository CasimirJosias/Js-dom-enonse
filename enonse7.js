const input=document.querySelector('input[name=input]')
const span=document.querySelector('span')
let numero=["0","1","2","3","4","5","6","7","8","9"]
const bac=['Backspace','ArrowLeft','ArrowRight'];
input.addEventListener('keydown',function(event){
    let kle = event.target.value;
    let evenCode=event.code;
    if(!numero.includes(event.key) && !bac.includes(evenCode) ){
        event.preventDefault();
    }
   
    if(kle.length==8  && !bac.includes(evenCode)){
        event.preventDefault();
    }

});

input.oninput=function(event){
    let input=event.target.value;
    if(input.length!=8){
        span.innerText="ou gen limit 8 karate";
    }else{
        span.innerHTML=""
    }
}
