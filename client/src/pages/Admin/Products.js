import React ,{useState,useEffect} from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import axios from "axios"
import toast from "react-hot-toast"
import { Link } from 'react-router-dom'




const Products = () => {
    const [products,setProducts]=useState([])

    //// get all products
     
    const getAllProducts= async()=>{
        try {
            const {data} =await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`)
            setProducts(data.products)
            
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong in getting products")
            
        }
    }
//// life cycle method
useEffect(()=>{
    getAllProducts()
},[])


  return (
    <Layout>
        <div className="container-fluid m-3 p-3">
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1 className="text-center">All Products List</h1>

                <div className="d-flex">
                {products?.map((p)=>(
                    <Link to={`/dashboard/admin/get-singleproduct/${p.slug}`} className="product-link">
                        <div className="card m-2 "  style={{width: '18rem'}} key={p._id}>
                            <img  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} style={{height: '250px'}}  className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description.substring(0,10)}</p>
                        
                    </div>
                    </div>

                    </Link>
                    


                ))}

                </div>
               
            </div>
        </div>
        </div>
      
    </Layout>
  )
}

export default Products
