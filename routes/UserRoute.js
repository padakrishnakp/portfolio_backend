const express = require("express");
const router = express.Router();
const { userRegistration, userLogin, userUpdated, userView, userToken } = require("../controller/UserController");
const { uploads } = require("../middlewares/upload");
const { protectRoutes } = require('../middlewares/authTokenMiddleware');

// Handle POST request to upload file
router.post("/user/registration", userRegistration);
router.post("/user/updated", uploads.single('about_file'), userUpdated);
router.get("/user/userView/:id", userView);
router.post("/user/login", userLogin);
router.get("/user/userToken",protectRoutes, userToken);

module.exports = router;
