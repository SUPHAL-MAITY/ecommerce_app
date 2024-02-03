import React ,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';
import  "../../styles/AuthStyle.css";


const Register = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")
  const [answer,setAnswer]=useState("")
  const navigate = useNavigate()


const handleSubmit= async (e)=>{
  e.preventDefault()
  try {
    const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer})
    if( res && res.data.success){
    toast.success(res && res.data.message)
    navigate("/login")
    }
  } catch (error) {
    console.log(error)
    toast.error("Something went wrong")
    
  }
 
}



  return (
   <Layout>
    <div className="register">
        
          <form onSubmit={handleSubmit}>
            <div className="title">Registration Form</div>
              <div className="mb-3">
                <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter your name' aria-describedby="emailHelp"  required/>
              </div>
              <div className="mb-3">
                <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="exampleInputEmail" placeholder='Enter your Email' aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password'  required />
              </div>
              <div className="mb-3">
                <input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder='Enter your phone number' aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <input type="text"  value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Enter your Address' aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <input type="text"  value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer" placeholder='who is your favourite player' aria-describedby="emailHelp" required />
              </div>

             
              
              <button type="submit" className="btn btn-primary">Register Now</button>
          </form>


    </div>
 

   </Layout>
  )
}

export default Register
