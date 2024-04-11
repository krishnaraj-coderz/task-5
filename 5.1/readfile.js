const fs =require("fs");
const student = fs.readFile("student.json",'utf8',(err,data)=>{
    console.log(JSON.parse(data))
})
