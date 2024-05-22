

const express = require("express");
const router = express.Router();
const { uploads } = require("../middlewares/upload");
const {projectAdd,projectDelete,projectList,projectView} = require('../controller/projectController');

router.post("/project/add", uploads.single('about_file'), projectAdd);
router.get("/project/projectView",projectView);
router.get("/project/projectList",projectList);
router.delete("/project/projectDelete/:id", projectDelete);

module.exports = router;
