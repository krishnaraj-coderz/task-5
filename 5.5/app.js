// reading user given file using fs modules
// this task doesn't include anyother thing so refer task 5.3
const express  = require("express");
const route = require("./src/routes")
const app = express();

app.use(express.urlencoded({extended:true}),express.json())
app.use("/",routes)
app.listen(3000,()=>{
    console.log("listening")
})