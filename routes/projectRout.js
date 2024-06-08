const express = require("express");
const router = express.Router();
const { uploads } = require("../middlewares/upload");
const { projectAdd, projectDelete, projectList, projectView, projectDetails, projectUpdated } = require('../controller/projectController');

router.post("/project/add", uploads.single('about_file'), projectAdd);
router.get("/project/projectView", projectView);
router.get("/project/projectList", projectList);
router.delete("/project/projectDelete/:id", projectDelete);
router.get("/project/projectDetails/:id", projectDetails);
router.put("/project/updated/:id", uploads.single('about_file'), projectUpdated);

module.exports = router;
