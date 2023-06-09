const express=require("express");
const router=express.Router();
const {createUserController,signInUser}=require('../controllers/MUserController');
const encryptPasswordMiddlewar = require("../middlewares/encryptPassword");
const checkPasswordMiddleware=require("../middlewares/checkPassword")


router.post("/create",encryptPasswordMiddlewar,createUserController);

router.post("/login",checkPasswordMiddleware,signInUser);

module.exports=router