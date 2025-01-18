const fs=require("fs");

console.log("Starting");

fs.writeFile("pavan.txt","Pavan is Good Boy",()=>{
    console.log("done");
})

console.log("ending")