import User from "../models/userModel.js"
import {hashPassword,comparePassword} from "../helpers/authHelper.js"
import  jwt  from 'jsonwebtoken'




export const registerController= async(req,res)=>{
    try {
        const {name,email,password,phone,address,role}= req.body
        ///validation
       
        if(!(name && email && password && phone && address )){
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


export const loginController = async(req,res)=>{
    try {
        const {email,password}=req.body
        ////validation
        if(!(email && password)){
            return res.status(404).send({
                success:false,
                message:"Please enter all credentials"
            })
        }

        /////check user

        const user= await User.findOne({email})

        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
        }
        
        ///// match the password 

        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password"
                
            })   
        }

        const token=jwt.sign({
            id: user._id
          }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(200).send({
            success:true,
            message:"logged in successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address

            },
            token
        })







        
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in login ",
            error

        })
      
    }

}


export const testController = async(req,res)=>{
    res.send("protected routes")

}

