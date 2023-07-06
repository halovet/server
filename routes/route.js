const express = require("express");
const StaffController = require("../controllers/staffController");
const { authenticationUser } = require("../middleware/auth");
const router = express.Router();

// -- USER --
router.post("/userRegister", StaffController.userRegister);
router.post("/userLogin", StaffController.userLogin);

// -- MEDICINE --
router.post("/medicine", authenticationUser, StaffController.createMedicine);
router.get("/medicine", StaffController.allMedicine);
router.get("/medicine/:id", StaffController.medicineById);
router.patch("/medicine/:id", authenticationUser, StaffController.editMedicine);
router.delete(
  "/medicine/:id",
  authenticationUser,
  StaffController.deleteMedicine
);
module.exports = router;
