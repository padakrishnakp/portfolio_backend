const express = require("express");
const router = express.Router();
const { videoUpload } = require("../middlewares/videoUpload");
const { aboutAdd, aboutList, aboutDelete, aboutView ,aboutUpdated,aboutHomeDetails} = require("../controller/aboutController");

router.post("/about/add", videoUpload.single('about_media'), aboutAdd);
router.put("/about/updated/:id", videoUpload.single('about_media'), aboutUpdated);
router.get("/about/list", aboutList);
router.get("/about/view/:id", aboutView); 
router.delete("/about/delete/:id", aboutDelete);
router.get("/about/homeView/:userId", aboutHomeDetails);

module.exports = router;
