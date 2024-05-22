const express = require("express")

const router = express.Router()
const { contactUsAdd, contactUsList, contactUsDelete} = require('../controller/contactUsController')

router.post("/contactUs/contactUsAdd",contactUsAdd)
router.get("/contactUs/contactUsList",contactUsList)
// router.get("/home/homeView",homeView)
router.delete("/contactUs/contactUsDelete/:id",contactUsDelete)

module.exports = router