const express = require("express");
const controller = require("./controller")
const router = express.Router();

router.get("/frontend",controller.frontendContent);
router.get('/backend',controller.backendContent);
router.get('/fullstack',controller.fullStackContent);

module.exports = router;