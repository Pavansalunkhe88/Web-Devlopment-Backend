const mongoose = require('mongoose');

main()
.then(()=>{console.log("Connection Sucessful...");})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mongo');
}

// Schema 
const userSchema = new mongoose.Schema({
    name:String,
    age : Number,
  
});

// Model
const User =mongoose.model("User",userSchema);


const user1 = new User (
    {
        name:"Pavan",
        age:21,
    
    }
);

const user2 = new User (
    {
        name:"sumit",
        age:21,
    
    }
);



user1.save()


user2.save()


User.insertMany([{
    name:"sam",
        age:22,
},{
    name:"shruti",
        age:25,
}])

User.updateMany({name:"shruti"},{age:21})
.then((data)=>{
    console.log(data);
})

User.find().
then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

User.deleteMany({age:{$gt:20}}).then((data)=>{
    console.log(data)
})