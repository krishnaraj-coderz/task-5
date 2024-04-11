const express = require('express');
const routes = require("./routes");

const app = express();

app.get("/",(req,res)=>{
    console.log("home page called");
    res.send(`<h2>this is home page</h2>`);
});

app.get("/contact",(req,res)=>{
    console.log("home page called");
    res.send(`<h2>this is contact page</h2>`);
});

app.get("/about",(req,res)=>{
    console.log("home page called");
    res.send(`<h2>this is about page</h2>`);
});

app.use("/",routes);

app.listen(8080,()=>{
    console.log("listenting to 8080 of localhost");
})