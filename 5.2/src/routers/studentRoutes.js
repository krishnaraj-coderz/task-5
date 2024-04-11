const {addStudent,showAllStudents,showOneStudent,updateStudent,deleteStudent} = require("../controllers/studentController")
const express = require("express");
const routes = express.Router();

routes.post('/addStudent',addStudent);
routes.get('/showAllStudent',showAllStudents);
routes.get('/showOneStudent/:id',showOneStudent);
routes.put('/updateStudent/',updateStudent);
routes.delete('/deleteStudent/:id',deleteStudent);


module.exports = routes;
