const express = require("express");
const controller = require("../controllers/controller")
const middleware = require("../middleware/simple-middleware")

const router = express.Router();

router.get("/", controller.homeContent)
router.get("/contact/:number", middleware.checkContact, controller.contactContent);
router.get("/about", controller.homeContent);
router.get("/frontend", controller.frontendContent);
router.get('/backend', controller.backendContent);
router.get('/fullstack', controller.fullStackContent);
router.get('/users',controller.UsersContent);
router.post('/data',controller.dataContent);

module.exports = router;
