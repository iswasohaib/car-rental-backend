var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/common/authController");
router.get("/", authController.authenticateToken, userController.getUsers);

router.post("/users", userController.createUsers);
router.post("/login", authController.login);
module.exports = router;
