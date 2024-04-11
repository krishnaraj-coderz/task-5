const { addProject,showAllProject,showOneProject,updateProject,deleteProject} = require("../controllers/projectController");
const express = require("express");
const route = express.Router()
route.post('/addProject',addProject)
route.get('/showAllProject',showAllProject)
route.get('/showOneProject/:id',showOneProject)
route.put('/updateProject/:id',updateProject)
route.delete('/deleteProject/:id',deleteProject)


module.exports = route;
