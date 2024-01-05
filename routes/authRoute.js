import express from "express"
import {registerController,loginController, testController,forgotPasswordController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js"


//router object
const router=express.Router()


///routing end points

//Register method ||| method Post

router.post("/register",registerController)

///login || POST method

router.post("/login",loginController)


////test route

router.get("/test",requireSignIn, isAdmin, testController)


///////  forgot-password route

router.post("/forgot-password",forgotPasswordController)

//// protected route

router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})



export default router