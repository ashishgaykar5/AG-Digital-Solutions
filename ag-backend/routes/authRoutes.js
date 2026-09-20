const express = require("express");

const router = express.Router();

const {
    register,
    login,
    getMe,
    updateProfile
} = require("../controllers/authcontrollers");

const authMiddleware = require("../middleware/authmiddleware");


router.post("/register", register);

router.post("/login", login);

router.get("/me", authMiddleware, getMe);

router.put("/profile", authMiddleware, updateProfile);


module.exports = router;