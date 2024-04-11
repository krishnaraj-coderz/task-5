routes = require("express").Router();
const {JsonFileReader} = require("../controller/")
const upload = require("../middleware/multerWare")

routes.post("/read",upload.single('file'),JsonFileReader)