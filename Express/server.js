const express= require("express");
const app=express();
const port=8080;

app.listen(port,()=>{
   console.log("Listing on port 8080");
});

app.get("/",(req,res)=>{
    res.send("You on root path");
})

app.get("/search",(req,res)=>{
    res.send("You on search path");
})

app.get("/home",(req,res)=>{
    res.send("You on home path");
})

app.get("*",(req,res)=>{
    res.send("path is not exits");
})

app.get("/:username/:id",(req,res)=>{
    res.send("Hii I am root");
})