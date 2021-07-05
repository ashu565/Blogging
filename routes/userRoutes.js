const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const multer = require("../utils/multer");

const router = express.Router();

router.patch("/updateMe", authController.protect, userController.updateMe);
router.patch("/deleteMe", authController.protect, userController.deleteMe);
router.post(
  "/updateProfilePhoto",
  authController.protect,
  multer.single("image"),
  userController.updateProfilePhoto
);

module.exports = router;
