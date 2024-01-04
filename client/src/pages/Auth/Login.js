import React ,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from "axios"
import {useNavigate,useLocation } from "react-router-dom"
import toast from 'react-hot-toast';
import  "../../styles/AuthStyle.css";
import { useAuth } from '../../context/auth';



const Login = () => {
 
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate()
  const [auth,setAuth]=useAuth()
  const location= useLocation()



const handleSubmit= async (e)=>{
  e.preventDefault()
  try {
    const res= await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
    if( res && res.data.success){
    toast.success(res && res.data.message)
    setAuth({
      ...auth,
      user:res.data.user,
      token:res.data.token,
    })
    localStorage.setItem("auth",JSON.stringify(res.data))
    navigate(location.state || "/")
    }
  } catch (error) {
    console.log(error)
    
  }
 
 
}
console.log(process.env.REACT_APP_API)


  return (
   <Layout>
    <div className="register">
        
          <form onSubmit={handleSubmit}>
            <div className="title">LOGIN TO CONTINUE</div>
             
              <div className="mb-3">
                <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}  className="form-control" id="exampleInputEmail" placeholder='Enter your Email' aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password'  required />
              </div>
              
              
              <button type="submit" className="btn btn-primary">LOGIN</button>
          </form>


    </div>
 

   </Layout>
  )
}

export default Login;