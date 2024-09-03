const express = require("express")
const app=express()
const hbs=require("hbs")
const path=require("path")

const tempPath=path.join(__dirname,"../templates")
app.use(express.static(path.join(__dirname ,"../public")))
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempPath)

app.listen("3000",()=>{
    console.log("port 3000")
})
app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("Signup")
})
