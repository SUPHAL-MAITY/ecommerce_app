import express from "express"
import {registerController,loginController, testController,forgotPasswordController, updateProfileController, getOrdersController, getAllordersController, orderStatusController} from "../controllers/authController.js"
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

//// protected route for User

router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

/////protected route for Admin


router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

///update profile
router.put("/profile",requireSignIn,updateProfileController)


///orders
router.get("/orders",requireSignIn,getOrdersController)

///all orders
router.get("/all-orders",requireSignIn,isAdmin,getAllordersController)


/////// order status update
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController)


export default router