const express = require('express');
const router = express.Router();
const {experiencesAdd ,experiencesList,experiencesDelete,experiencesView,experiencesDetails,experiencesUpdate} = require('../controller/experiencesController')

router.post("/experiences/experiencesAdd",experiencesAdd)
router.get("/experiences/experiencesList/:userId",experiencesList)
router.get("/experiences/experiencesDetails/:id",experiencesDetails)
router.get("/experiences/experiencesView",experiencesView)
router.delete("/experiences/experiencesDelete/:id",experiencesDelete)
// router.put("/skill/skillUpdated/:id",skillUpdated)
router.put("/experiences/experiencesUpdate/:id",experiencesUpdate)


module.exports = router