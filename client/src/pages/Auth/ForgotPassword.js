import React ,{useState}  from 'react'
import Layout from '../../components/Layout/Layout'
import axios from "axios"
import {useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';




const ForgotPassword = () => {
 
  const [email,setEmail]=useState("")
  const [newPassword,setNewPassword]=useState("")
  const [answer,setAnswer]=useState("")
  const navigate = useNavigate()
 



const handleSubmit= async (e)=>{
  e.preventDefault()
  try {
    const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,answer,newPassword})
    if( res && res.data.success){
    toast.success(res && res.data.message)
    navigate( "/login")

    }
  } catch (error) {
    console.log(error)
    
  }
 
 
}



  return (
    <Layout>

<div className="register">
        
        <form onSubmit={handleSubmit}>
          <div className="title">Reset NewPassword</div>
           
            <div className="mb-3">
              <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="exampleInputEmail" placeholder='Enter your Email' aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer"  placeholder='Who is your favourite player ?'  required />
            </div>
            <div className="mb-3">
              <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter new  Password'  required />
            </div>
           
            
            <div className="mb-3" >
            <button type="submit" style={{width:"317px"}} className="btn btn-primary">Reset </button>

            </div>
            
           
            
        </form>


  </div>

      




    </Layout>
  )
}

export default ForgotPassword

