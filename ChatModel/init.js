// this file is for insert data
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then((res) => {
        console.log("conection sucessful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}


let allchats = [
    {
        from: "neha",
        to: "priya",
        message: "Good Morning, have a great day!",
        createdAt: Date()
    },

    {
        from: "neha",
        to: "priya",
        message: "Good Morning, have a great day!",
        createdAt: Date()
    },
    {
        from: "rahul",
        to: "amit",
        message: "Hey, let's catch up later!",
        createdAt: Date()
    },
    {
        from: "seha",
        to: "tina",
        message: "Don't forget about the meeting at 2 PM.",
        createdAt: Date()
    }
];

Chat.insertMany(allchats).then((data) => {
    console.log(data);
})

