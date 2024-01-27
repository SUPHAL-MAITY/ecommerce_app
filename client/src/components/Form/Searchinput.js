import React from 'react'
import {useSearch} from  "../../context/search.js"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Searchinput = () => {
    const[values,setValues]=useSearch()
    const navigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`)
            setValues({...values,results:data})
            navigate("/search")
            
        } catch (error) {
            console.log(error)
            
        }
    }
  return (
    <div>
    <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" value={values.keyword} onChange={(e)=>setValues({...values,keyword:e.target.value})} aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
    </form>

      
    </div>
  )
}

export default Searchinput
