const express = require("express")

const router = express.Router()
const {homeAdd ,homeList,homeDelete,homeView,homeDetails,homeUpdated} = require('../controller/homeController')
const { protectRoutes } = require('../middlewares/authTokenMiddleware');


router.post("/home/homeAdd",protectRoutes,homeAdd)
router.post("/home/homeUpdated",homeUpdated)
router.get("/home/homeList",protectRoutes,homeList)
router.get("/home/homeView",homeView)
router.get("/home/homeDetails/:id",homeDetails)
router.delete("/home/homeDelete/:id",homeDelete)

module.exports = router