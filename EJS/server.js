const express=require("express");

const app=express();

const port=8080;

app.set("viewengine","ejs");

app.get("/",(req,res)=>{
  res.render("home.ejs");
});

app.get("/rolldice",(req,res)=>{
  res.render("rolldice.ejs");
})

app.listen(port,()=>{
    console.log(`listing on port ${port}`);
});
