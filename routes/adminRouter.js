const express = require("express")
const router =express.Router()
const adminController = require("../controllers/adminController")
const auth = require("../controllers/authController")


router.get("/",auth,adminController)


module.exports= router