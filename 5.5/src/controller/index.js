const JsonFileReader = async (req,res)=>{
    const fs = require("fs");
    const data =fs.readFileSync(req.file.path, 'utf8');
    res.json(JSON.parse(data))
}
module.exports = {JsonFileReader}