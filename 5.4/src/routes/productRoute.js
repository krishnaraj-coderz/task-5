const route = require("express").Router();
const {addNewProduct,getAllProductsWithCurrent} = require("../controller/productController")
route.post("/add",addNewProduct);
route.get("/getAll",getAllProductsWithCurrent)
module.exports = route;