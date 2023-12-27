import User from "../models/userModel.js"
import {hashPassword} from "../helpers/authHelper.js"




export const registerController= async(req,res)=>{
    try {
        const {name,email,password,phone,address,role}= req.body
        ///validation
       
        if(!(name && email && password && phone && address && role)){
            return res.status(400).send({error:"All field is compulsory"})
        }

       

        ////check if the user exists

        const existingUser= await User.findOne({email})

        if(existingUser){
            res.status(401).send({error:"The User already exists"})
        }

        ///encrypt the password
        const encryptedPassword= await hashPassword(password)

        ////save in the db with encrypted db
        const user=await User.create({name,email, password:encryptedPassword, phone ,address , role})
        
        res.status(201).send({
            success:true,
            message:"User registered successfully",
            user
        })



        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"There are some error in registration",
            error

        })
        
    }

}


