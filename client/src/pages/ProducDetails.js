
import React ,{useState,useEffect}  from 'react'
import Layout from '../components/Layout/Layout'
import axios from "axios"
import { useParams } from 'react-router-dom'
import {useCart} from "../context/Cart"
import toast from 'react-hot-toast';

const ProducDetails = () => {
  const [cart,setCart]=useCart()
  const params=useParams()
  const [product,setProduct]=useState({})
  const[relatedProducts,setRelatedProducts]=useState([])


  ///initiate details
  useEffect(()=>{
    if(params?.slug)getProduct()
  },[params?.slug])


  ///get single  product
  const getProduct=async()=>{
    try {
      const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-singleproduct/${params.slug}`)
      // console.log("hello",params)
      // console.log(data)
      setProduct(data?.product);
      getSimilarProducts(data?.product._id,data?.product.category._id)
      
    } catch (error) {
      console.log(error)
      

    }
  };
  ///get similar products
  const getSimilarProducts=async(pid,cid)=>{
    try {
      const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/related-product/${pid}/${cid}`)
      console.log(data)
      

      setRelatedProducts(data?.products)
      
    } catch (error) {
      console.log(error)
      
    }

  }
  return (
    <Layout>
      <div className="row container">
        <div className="col-md-6">
                   
        <img  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`} className="card-img-top " alt={product.name} height="250px" width="250px" />
          </div>
        <div className="col-md-6">
          <h1 className="text-center" >Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Price: ₹{product.price}</h6>
          <h6>Category :{product?.category?.name} </h6>
          <button  className="btn btn-dark ms-1" 
                        onClick={()=>{
                          setCart([...cart,product])
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart,product])
      
                          )
                          toast.success("Item added to cart")
                        }}
          >Add to Cart</button>
          
        </div>
      </div>
      <hr/>
      {relatedProducts.length<1 && <p className='text-center'>No Similar Products Found</p>}
       
      <div className="row container"> 
      <h4 className='text-center'>Similar Products</h4>
      {/* <h6>{JSON.stringify(relatedProducts,null,4)}</h6> */}
      <div className="col-md-9">
            
           
          <div className="d-flex flex-wrap">
              {relatedProducts?.map((p)=>(
                        
                <div className="card m-2 "  style={{width: '18rem'}} key={p._id}>
                    <img  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top " alt="..." />
                  <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description.substring(0,30)}</p>
                        <p className="card-text">₹{p.price}</p>
                        <button  className="btn btn-dark ms-1" 
                        onClick={()=>{
                          setCart([...cart,p])
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart,p])
      
                          )
                          toast.success("Item added to cart")
                        }} >Add to Cart</button>
                  
                  </div>
                </div>
          ))}
          </div>


         
      </div>
      </div>
    </Layout>
  )
}

export default ProducDetails
