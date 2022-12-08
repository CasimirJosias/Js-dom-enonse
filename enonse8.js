const input=document.querySelectorAll('input')
const body=document.body;
let i=0;
body.onload = function(event){
    input[0].focus();
    input[0].style.outline='3px solid #0275d8'
    i=1;
}

let bouton=input[5]
bouton.onclick= function(event){
    if(i==1){
        input[0].blur();
        input[1].focus();
        input[0].style.outline='2px solid #777'
        input[1].style.outline='2px solid #0275d8'
        i=2
    }else 
    if(i==2){
        input[1].blur();
        input[2].focus();
        input[1].style.outline='2px solid #777'
        input[2].style.outline='2px solid #0275d8'
        i=3
    }else if(i==3){
        input[2].blur();
        input[3].focus();
        input[2].style.outline='2px solid #777'
        input[3].style.outline='2px solid #0275d8'
        i=4;
    }else if(i==4){
        input[3].blur();
        input[4].focus();
        input[3].style.outline='2px solid #777'
        input[4].style.outline='2px solid #0275d8'
        i=5
    }else{
        if(i==5){
            input[4].blur()
            input[0].focus();
            input[0].style.outline='2px solid #0275d8'
            input[4].style.outline='2px solid #777'
            i=1;
        }
    }
}
