import  bcrypt  from 'bcryptjs'



export const hashPassword = async(password)=>{
    try{
        const encryptedPassword= await bcrypt.hash(password, 10);
        return encryptedPassword

    }catch(error){
        console.log(error)

    }
}


export const comparePassword= async (password,encryptedPassword)=>{
    return await bcrypt.compare(password ,encryptedPassword)
}