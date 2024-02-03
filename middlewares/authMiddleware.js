import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const requireSignIn=(req,res,next)=>{
    try {
        const decode=jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        next()
        
    } catch (error) {
        console.log(error)
        
    }
    

}


/////admin access

export const isAdmin = async(req,res,next)=>{
    try {
        console.log(req.user._id)
        const user= await User.findById(req.user._id)
        
        if(user.role !==1 ){
            return res.status(401).send({
                success:false,
                message:"unauthorized Access"
            })
        }else {
            next();
          }
        
        
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success:false,
            error,
            message:"error in admin middleware"
        })
        
    }

}