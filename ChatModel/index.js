const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("conection sucessful");
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("listing on port 8080");
});

app.get("/", (req, res) => {
  res.send("working well");
});


app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  console.log(chats);
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
})

app.get("*", (req, res) => {
  res.send("Error 404");
})

app.post("/chats", async (req, res) => {
  let { from, to, message } = req.body;

  let newChat = new Chat({
    from: from,
    to: to,
    message: message,
    createdAt: new Date()
  });

  try {

    await newChat.save();
    console.log("Chat saved successfully");
    res.redirect("/chats");
  } catch (err) {
    console.log(err);
    res.send("Error saving chat");
  }
});

app.get("/chats/edit",(req,res)=>{
  res.send("done");
})

