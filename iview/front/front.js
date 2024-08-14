const tgbtn=document.querySelector(".toogle")
const bdy=document.querySelector("body")
tgbtn.addEventListener("click",()=>bdy.classList.toggle("toogleact"))

const path=document.querySelectorAll("section")
const nav=document.querySelectorAll("header nav a")



const lay=document.querySelector(".overlay")
const close=document.querySelector("#close")
const pop=document.querySelector(".popup1")

var readpop=document.querySelectorAll(".readbtn")
readpop.forEach(button => {
  button.addEventListener("click",()=>{
    lay.style.display="block";
    pop.style.display="block";
  })
});

close.addEventListener("click",()=>{
    lay.style.display="none";
    pop.style.display="none";
})


const navb = document.querySelector('.navbar');
const list = document.querySelector('.list');
const links = document.querySelectorAll('.list a');


links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });

    links.forEach((l) => l.classList.remove('active')); 
    e.target.classList.add('active'); 

  });
});


// const img=document.querySelector(".profileset")
// window.addEventListener("scroll",()=>{
//     let value=window.scrollY;
//     //img.style.marginLeft=value-100+'px';
//     //img.style.marginTop=value+80+'px';
//     console.log(value)
// })

