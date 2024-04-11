const express = require("express")
const app = express()
app.get("/", (req,res)=>{
    res.send("<h1>hello world</h1>")
    console.log(req)
})

app.listen(3000,()=>{
    console.log("lsitening")
})