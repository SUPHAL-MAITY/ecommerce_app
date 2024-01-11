import express from "express"
import {isAdmin,requireSignIn} from "../middlewares/authMiddleware.js"
import { createProductController, getProductController, getSingleProductController, productDeleteController, productPhotoController, updateProductController } from "../controllers/productController.js"
import formidable from "express-formidable"


const router=express.Router()

///routes

router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController)


///update product
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController)

////get-products
router.get("/get-product",getProductController)


////single products

router.get("/get-singleproduct/:slug",getSingleProductController)


//// get photo
router.get("/product-photo/:pid",productPhotoController)


//// delete product
router.delete("/product-delete/:pid",productDeleteController)






export default router