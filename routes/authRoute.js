import express from "express"
import {registerController,loginController} from "../controllers/authController.js"



//router object
const router=express.Router()


///routing end points

//Register method ||| method Post

router.post("/register",registerController)

///login || POST method

router.post("/login",loginController)



export default router