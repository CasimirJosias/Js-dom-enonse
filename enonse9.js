const input=document.querySelector('input[name=event-name]')
const action=document.getElementById('action')
action.addEventListener('josias',(ev)=>{
    alert('aksyon pam');
});
let tabloEvent=['click','dblclick','josias'];
const dblEvent= new Event('dblclick');
const persEvent= new Event('josias');
input.addEventListener('keydown',(event)=>{
 if(event.key=="Enter"){
    if(!tabloEvent.includes(input.value)){
        input.blur();
        alert('evenman sa pa valid');
    }else if(input.value=="click"){
        action.click();
    }else if(input.value=="dblclick"){
        action.dispatchEvent(dblEvent);
    }else{
        action.dispatchEvent(persEvent)
    }
 }
    
});

tabloEvent.forEach(function(ev){
    action.addEventListener(ev, (eve)=>{
        alert(`evenman sa valid, se ${eve.type}`)
    });
});

