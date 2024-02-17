import express from "express"
import {isAdmin,requireSignIn} from "../middlewares/authMiddleware.js"
import { brainTreeTokenController, braintreePaymentController, createProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productDeleteController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from "../controllers/productController.js"
import formidable from "express-formidable"


const router=express.Router()

///routes

router.post("/create-product",requireSignIn,isAdmin,formidable(),createProductController)


///update product
router.put("/update-product/:pid",requireSignIn,isAdmin,formidable(),updateProductController)

////get-products
router.get("/get-product",getProductController)


////single product

router.get("/get-singleproduct/:slug",getSingleProductController)


//// get photo
router.get("/product-photo/:pid",productPhotoController)


//// delete product
router.delete("/product-delete/:pid",productDeleteController)


/// filter product 
router.post("/product-filters",productFiltersController)


////product count
router.get("/product-count",productCountController)

///product per page
router.get("/product-list/:page",productListController)



///search 
router.get("/search/:keyword",searchProductController)

router.get("/related-product/:pid/:cid",relatedProductController)


///category wise product
router.get("/product-category/:slug",productCategoryController)


//////payment routes
///token
router.get("/braintree/token",brainTreeTokenController)

///payments
router.post("/braintree/payment",requireSignIn,braintreePaymentController)


export default router