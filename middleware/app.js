const express=require("express");
const app=express();

app.listen(8080,()=>{
  console.log("server is start...");
});

// middleware
// app.use((req,res,next)=>{
//     console.log("Hey iam middleware ");
   
//     next();
// })

app.use("/api",(req,res,next)=>{
  let {token}=req.query;
  if(token==="givenaccess"){
   next();
  }
  res.send("ACCESED DENIED..");
});






app.get("/",(req,res)=>{
    res.send("Hey I am root");
})

app.get("/random",(req,res)=>{
    res.send("this is random page");
})

 app.use((req,res,next)=>{
    req.time= new Date(Date.now());
    console.log(req.method,req.hostname,req.path,req.time);
    next();
 })


 // Token Passing

 app.get("/api",(req,res)=>{
  res.send("data");
 });


