const express = require("express");
const router = express.Router();
const { uploads } = require("../middlewares/upload");
const {
  aboutAdd,
  aboutList,
  aboutDelete,
  aboutView,
} = require("../controller/aboutController");

// Handle POST request to upload file
router.post("/about/add", uploads.single('about_file'), aboutAdd);

router.get("/about/list", aboutList);
router.get("/about/view", aboutView);
router.delete("/about/delete/:id", aboutDelete);

module.exports = router;
