const note = JSON.parse(localStorage.getItem('note'));

note.forEach((elem,index) => {
const h2=document.createElement('h2')
const p=document.createElement('p')
let box=document.createElement("div");
box.appendChild(h2);
box.appendChild(p);

let container=document.querySelector(".container")
container.appendChild(box);

h2.textContent=`Sticky Note ${index+1}`
p.textContent=elem

});
