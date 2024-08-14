var input=document.getElementsByClassName("inputtxt")
const btn=document.querySelector(".addbtn")
const list=document.querySelector(".task")
btn.addEventListener('click',()=>{

    list.innerHTML=input.value + "<button>Delete</button>";
})