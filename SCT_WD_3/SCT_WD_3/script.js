
const data=[
{q:'HTML stands for?',a:'Hyper Text Markup Language',b:'High Text',c:'Home Tool',d:'None',cans:'a'},
{q:'CSS is used for?',a:'Styling',b:'Database',c:'Server',d:'OS',cans:'a'},
{q:'JavaScript is?',a:'Programming Language',b:'Browser',c:'DBMS',d:'Editor',cans:'a'}
];
let i=0,s=0;
function load(){
question.innerText=data[i].q;
a.innerText=data[i].a;
b.innerText=data[i].b;
c.innerText=data[i].c;
d.innerText=data[i].d;
}
load();
btn.onclick=()=>{
let x=document.querySelector('input[name=ans]:checked');
if(!x){alert('Select answer');return;}
if(x.value===data[i].cans)s++;
i++;
document.querySelectorAll('input[name=ans]').forEach(e=>e.checked=false);
if(i<data.length)load();
else quiz.innerHTML='<h2>Score: '+s+'/'+data.length+'</h2><button onclick="location.reload()">Play Again</button>';
};
