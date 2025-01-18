
let output=document.getElementById('output');
let buttons=document.getElementsByClassName('tool-btn');
for (let btn of buttons){
    btn.addEventListener('click', ()=>{
        let cmd=btn.dataset['command'];
        document.execCommand(cmd, false, null);

    })
}
const blog=document.querySelector(".publish")
localStorage.setItem('my_blog', my_blog);







