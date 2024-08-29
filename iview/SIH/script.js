document.addEventListener('DOMContentLoaded', () => {
    const register=document.querySelector(".regbtn")

    // register.addEventListener('click',()=>{
    //     alert("Comming soon!...");
    // });
    const show=document.querySelector("#show");

    const regpage=document.querySelector('.regset');
    const loginpage=document.querySelector(".loginset")
    const login=document.querySelector(".logbtn")

    show.addEventListener("click",()=>{
        var x=document.querySelector('#password')
        if(x.type =="password"){
            x.type="text";
        }
        else{
            x.type="password";
        }
    });

    register.addEventListener("click",()=>{
        register.style.display="none";
        regpage.style.display="block";
        loginpage.style.display="none";
        login.style.display="block";

    })
 
    login.addEventListener('click',()=>{
        register.style.display="block";
        regpage.style.display="none";
        loginpage.style.display="block";
        login.style.display="none";
    })
})