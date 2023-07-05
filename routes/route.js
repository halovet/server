const express = require("express");
const StaffController = require("../controllers/staffController");
const router = express.Router();

// -- USER --
router.post("/userRegister", StaffController.userRegister);
router.post("/userLogin", StaffController.userLogin);

module.exports = router;
