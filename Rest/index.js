const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log("Listening on port 8080");
});

let posts = [
    {
        id: uuidv4(),
        username: "Pavan Salunkhe",
        content: "I Love Coding "
    },
    {
        id: uuidv4(),
        username: "Pravin Salunkhe",
        content: "I Love Coding "
    },
    {
        id: uuidv4(),
        username: "Shreyash Salunkhe",
        content: "I Love Coding "
    }
];

// retrived information
app.get("/posts", (req, res) => {
    res.render('index.ejs', { posts });
});

// show new route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// for creating new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4(); 
    posts.push({ id, username, content });
    res.redirect("/posts");
});

// finding particular posts
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);

    if (post) {
        res.render("show.ejs", { post }); 
    } else {
        res.status(404).send("Post not found");
    }
});

//update route
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newcontent=req.body.content;
    console.log(newcontent);
    let post = posts.find((p) => id === p.id);
    post.content=newcontent;

    res.send("working well...");
});

// edit
app.get("/posts/:id/edit",(req,res)=>{
    let {id } =req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs");
    res.redirect("/posts");
})