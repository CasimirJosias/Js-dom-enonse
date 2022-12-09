const bouton=document.querySelector('#copy');
const h1=document.querySelector('h1');
const p=document.querySelector('p');

h1.addEventListener('selectstart',(e)=>{
    e.preventDefault();
});
p.addEventListener('selectstart',(e)=>{
    e.preventDefault();
});
h1.addEventListener('copy',(e)=>{
    e.preventDefault();
});
p.addEventListener('copy',(e)=>{
    e.preventDefault();
});

bouton.onclick=()=>{
    let range=new Range();
    range.setStart(h1.firstChild, 0) ;
  range.setEnd(p.firstChild, p.textContent.length);
    
  let seleksyon=document.getSelection();
  seleksyon.removeAllRanges();
  seleksyon.addRange(range);
  navigator.clipboard.writeText(seleksyon.toString());
}
