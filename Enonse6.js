const countryArray = ["Haiti", "France", "United States", "Belgium", "Canada", 
"Jamaica", "Mexico", "Brazil", "Nigeria"];


countryArray.map(
function pays(country){
    const body=document.body;
    const ul=document.createElement('ul')
    const li=document.createElement('li');
    const input=document.createElement('input')
    const nodeText=document.createTextNode(country)
    input.setAttribute('type','checkbox');
    input.setAttribute('name','country');
    input.setAttribute('value',country);
    li.append(input);
    li.append(nodeText)
    ul.append(li);
    body.append(ul)
});

const checkbox=document.querySelectorAll('input[name=country]')
const bouton=document.getElementById('btn')
let tablo=[]
checkbox.forEach((el)=>{
    el.onchange= function(event){
        let index;
        if(tablo.includes(event.target.value)){
            index=tablo.indexOf(event.target.value);
            tablo.splice(index,1);
        }else{
            tablo.push(event.target.value)
        }
    }
});

bouton.onclick= function(event){
    event.preventDefault();
   const span=document.querySelector('span')
   span.innerHTML="pays ki seleksyone yo: "+tablo;
}
