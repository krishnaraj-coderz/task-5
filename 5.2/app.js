// general api with sequelize and raw query in projectModel(first file structure)
// for other please refer task 5.3
require('dotenv').config();
const express = require('express');
const routes = require("./src/routers");

const app = express();

app.use(express.urlencoded(extended=true),express.json())
app.use("/",routes);

app.listen(process.env.port,()=>{
    console.log("listenting to 8080 of localhost");
})