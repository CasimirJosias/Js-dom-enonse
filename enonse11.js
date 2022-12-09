const div=document.querySelector('.div-color');

div.onmousemove=(event)=>{
    let absis=event.x,odone=event.y;
    
    if(absis>255){
        absis=255;
    }
    if(odone>255){
        odone=255;
    }
    div.style.backgroundColor=`rgb(${absis},${odone},${(absis+odone)/2})`;

}
div.onmouseleave=(e)=>{
    div.style.backgroundColor='#000';
}
