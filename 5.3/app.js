// signup, login, authorization, join, custom-fetching, default-route, global and aync function 
// and custom error and handling
const express = require("express");
const globalErrorHandling = require("./src/middleware/errorHandlingWare")
const routes = require("./src/routes");
const customError = require("./src/utils/customError");
const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: true }), express.json())

app.use("/", routes);

app.all("*", (req, res,next) => {
    error = new customError(`page "${req.originalUrl}" not founnd`,404);
    next(error)
})

app.use(globalErrorHandling)

app.listen(process.env.port, () => {
    console.log("listening to local host");
})