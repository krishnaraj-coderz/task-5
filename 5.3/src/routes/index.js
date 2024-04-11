const express = require("express");
const employeeRoute = require("./employeeRoute")
route = express.Router();

route.use("/employee",employeeRoute);

module.exports = route;