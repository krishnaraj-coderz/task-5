const express = require("express");
const employeeController = require("../controller/employeeController")
const {addEmployeeReview,getAllEmployeeReviews} = require("../controller/employeeReviewController");
const {jwtAuthorizer} = require("../middleware/employeeWare");
const route = express.Router();

route.post("/signUp",employeeController.signUpEmployee);
route.post("/logIn",employeeController.loginEmployee);
route.get("/showAllEmployee",employeeController.showAllEmployee);

//join
route.post("/addReview",addEmployeeReview)
route.get("/getReview",getAllEmployeeReviews)

//jwt
route.put("/changePassword",jwtAuthorizer,employeeController.changePassword);
route.post("/veryCustomRecord",jwtAuthorizer,employeeController.customRecords)

// normal extra api's
route.get("/dynamicPaging/",employeeController.dynamicPaginateRecords)
route.get("/paginatedRecords",employeeController.paginateRecords)
route.get("/searchEmployee/",employeeController.searchEmployeeRecords)

module.exports = route;