const mongoose = require("mongoose");
const {Schema}=mongoose;

main()
.then(()=>{
    console.log("connection sucessful..");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const  orderSchema = new Schema({
  item:String,
  price:Number,});

  
const  customerSchema = new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});
  

const Order= mongoose.model('Order',orderSchema);
const Customer=mongoose.model("Customer",customerSchema);

// function for inserting data

const addorder= async()=>{
    let result=await Order.insertMany([
        {item:"Pen",price:10},
        {item:"Pencil",price:50},
    ],
);
console.log(result);
}

const addcustomer= async()=>{
//    let cust1=new Customer({
//     name:"Shubham"
//    });
    
//    let order1=await Order.findOne({item:"Pen"});
//    let order2=await Order.findOne({item:"Pencil"});

//    cust1.orders.push(order1);
//    cust1.orders.push(order2);
   
   let result=await Customer.find({});
   console.log(result);
}

addcustomer();

//addorder();
