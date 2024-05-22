const express = require("express")

const router = express.Router()
const {skillAdd,skillList,skillView,skillDelete} = require('../controller/skillController')

router.post("/skill/add",skillAdd)
router.get("/skill/skillList",skillList)
router.get("/skill/skillView",skillView)
router.delete("/skill/skillDelete/:id",skillDelete)

module.exports = router