const div=document.querySelector('.div-color');
div.addEventListener('mouseover',(event)=>{
    let absis=event.x,odone=event.y;
    if(absis>255){
        absis=100;
    }
    if(odone>255){
        odone=100;
    }
    div.style.backgroundColor=`rgb(${absis},${odone},${(absis+odone)/2})`;
});
div.addEventListener('mouseleave',(event)=>{
    div.style.backgroundColor='#000';
});
