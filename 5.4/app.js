// showing data that doesn't exits in database
//this doesn't include anyother refer task 5.3
const express = require("express");
require("dotenv").config();
const routes = require("./src/routes/productRoute")
const app = express();

app.use(express.urlencoded({extended:true}),express.json())
app.use("/",routes);
console.log(process.env.port)
app.listen(process.env.port,()=>{
    console.log("listening to" + "8080");
})
