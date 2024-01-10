import CategoryModel from "../models/categoryModel.js"
import slugify from "slugify"





export const createCategoryController=async(req,res)=>{
    try {
        const {name}= req.body
        if(!name){
            return res.status(401).send({Message:"Name is required"})
        }
        const existingCategory= await  CategoryModel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:"Category Already Exists",

            })
        }

        const category = await new CategoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
                message:"New category created",
                category

        })


        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error in category"
        })
        
    }
}


///update category
export const updateCategoryController=async(req,res)=>{
    try {
        const {name}=req.body
        const {id}=req.params

        const category= await CategoryModel.findByIdAndUpdate(
            id,{name,slug:slugify(name)},{new:true}
        )
        res.status(200).send({
            success:true,
            message:"Category Updated Successfully",
            category
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while updating category"
        })
        
    }
}


///get all category

export  const categoryController=async(req,res)=>{
    try {
        const category= await CategoryModel.find({})
            res.status(200).send({
                success:true,
                message:"All category list obtained",
                category

            })
        

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting all categories",

        })
        
    }

}



export const singleCategoryController= async(req,res)=>{
    try {
        const {slug}=req.params
        const category = await CategoryModel.findOne({slug})
        res.status(200).send({
            success:true,
            message:" single category obtained successfully",
            category


        })
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting the single category"


        })
        
    }

}


export const deleteCategoryController=async(req,res)=>{
    try {
        const {id}=req.params
        const category = await CategoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"The category has been deleted"
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"The category has been deleted",
            error
        })
        
    }

}

