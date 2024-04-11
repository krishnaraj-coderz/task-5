const generalRoute = require("./generalRoutes");
const studentRoutes = require("./studentRoutes");
const projectRoutes = require("./projectRoutes");
const express = require("express");
const route = express.Router()
route.use("/",generalRoute);
route.use("/students",studentRoutes);
route.use("/projects",projectRoutes)

module.exports = route;
