var input=document.getElementById("intxt")
const btn=document.querySelector(".addbtn")
const list=document.querySelector(".task")
const state =document.getElementById("taskno")
const dels=document.querySelectorAll("#trash")
btn.addEventListener('click',()=>{
    list.innerHTML="<div class='addtask'><h2 class='inval'>"+input.value+"</h2><i class='bx bxs-trash-alt' id='trash'></i></div>";

    state.textContent=count+" Task to be done!";

})
var count=count("");
// dels.addEventListener('click',()=>{
//     dels.forEach(del=>{div.remove;})
// })