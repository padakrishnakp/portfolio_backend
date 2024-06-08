const express = require("express")

const router = express.Router()
const {skillAdd,skillList,skillView,skillDelete,skillUpdated,skillHomeView} = require('../controller/skillController')

router.post("/skill/add",skillAdd)
router.get("/skill/skillList/:user_id",skillList)
router.get("/skill/skillView/:id",skillView)
router.delete("/skill/skillDelete/:id",skillDelete)
router.put("/skill/skillUpdated/:id",skillUpdated)
router.get("/skill/skillHomeView/:user_id",skillHomeView)


module.exports = router