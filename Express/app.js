const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    console.log('server is running');
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("listing on port 3000");
    
})