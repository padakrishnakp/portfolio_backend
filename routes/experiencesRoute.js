const express = require('express');
const router = express.Router();
const {experiencesAdd ,experiencesList,experiencesDelete,experiencesView} = require('../controller/experiencesController')

router.post("/experiences/experiencesAdd",experiencesAdd)
router.get("/experiences/experiencesList",experiencesList)
router.get("/experiences/experiencesView",experiencesView)
router.delete("/experiences/experiencesDelete/:id",experiencesDelete)

module.exports = router