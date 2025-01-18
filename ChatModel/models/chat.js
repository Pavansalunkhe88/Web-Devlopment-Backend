// Contains schema of different collections 
const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    message: {
        type: String

    },
    createdAt: {
        type: Date,
        require: true
    }
});


const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;