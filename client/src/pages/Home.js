import React ,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import {Checkbox,Radio} from "antd"
import toast from 'react-hot-toast';
import { Prices } from '../components/Prices';
import {useCart} from "../context/Cart"
import "../styles/HomePage.css";
import { AiOutlineReload } from "react-icons/ai"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Home = () => {
  const [cart,setCart]=useCart()
  const navigate=useNavigate()
  const[products,setProducts]=useState([])
  const[categories,setCategories]=useState([])
  const [checked,setChecked]=useState([])
  const[radio,setRadio]=useState([])
  const [total,setTotal]=useState(0)
  const [page,setPage]=useState(1)
  const [loading,setLoading]=useState(false)
  const handleDragStart = (e) => e.preventDefault();



  const items = [
    <img src="../../images/banner1.jpg" style={{height:"180px",width:"100%"}} onDragStart={handleDragStart} role="presentation" />,
    <img src="../../images/banner2.jpg" style={{height:"180px",width:"100%"}} onDragStart={handleDragStart} role="presentation" />,
    <img src="../../images/banner3.jpg" style={{height:"180px",width:"100%"}} onDragStart={handleDragStart} role="presentation" />,
    
  ];




  



  ///get all category
  const getAllCategory=async()=>{
    try {
      const {data}= await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-category`)
      if(data?.success){
        setCategories(data?.category)
        // console.log(data)
      }
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong in getting category")

      
    }
  }

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);


  //get all products

  const getAllProducts=async()=>{
    try {
      setLoading(true)
      const{data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`)
      // console.log(data.products[0]._id)
      // console.log(data)
      setLoading(false)
      setProducts(data.products)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      
    }
  }


     ///get total count

     const getTotal=async()=>{
      try {
        const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-count`)
       setTotal(data?.total)
        
      } catch (error) {
        console.log(error)
        
      }
      
    }




    useEffect(()=>{
      if(page===1)return;
      loadMore()

    },[page])


    ///load more
    const loadMore=async()=>{
      try {
        setLoading(true)
        const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`)
        setLoading(false)
        setProducts([...products,...data?.products])
      } catch (error) {
        console.log(error)
        setLoading(false)
        
      }
    }


  ///get filtered product 
  const filterProduct=async()=>{
    try {
      const {data}=await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`,{checked,radio})
      setProducts(data?.products)
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
   if(!checked.length && !radio.length) getAllProducts()


  },[checked.length,radio.length])

  useEffect(()=>{
   if(checked.length || radio.length) filterProduct()
    

  },[checked,radio])
  useEffect(()=>{
    getTotal()
     

  },[])

  



 
    

  ///filter by catergory

  const handleFilter=(value,id)=>{
    // console.log(id)
    let all=[...checked]
    if(value){
      all.push(id);
    }else{
      all=all.filter((c)=> c!==id)
      
    }
    setChecked(all)

  }
  

  return (
    <Layout>
        {/* <img
        src="../../images/banner1.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      /> */}

     <AliceCarousel mouseTracking items={items} />
      {/* banner image */}
        <div className="container-fluid row mt-3 home-page">
          <div className="col-md-3 filters">
            <h4 className="text-center">Filter By Category</h4>
                <div className="d-flex flex-column">
                {
                  categories?.map((c)=>(
                    <Checkbox  key={c._id} onChange={(e)=>handleFilter(e.target.checked,c._id)}> {c.name} </Checkbox>
                  ))
                }
                </div>

           {/* ///Price Filter /////// */}


            <h4 className="text-center mt-4">Filter By Price</h4>
            <div className="d-flex flex-column">
                <Radio.Group  onChange={(e)=>setRadio(e.target.value)}>
                  {Prices.map(p=>
                  <div key={p._id}>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>              
                    )}
                </Radio.Group>

        </div>
            
            <div className="d-flex flex-column">
                <button className='btn btn-danger' onClick={()=>window.location.reload()}>RESET FILTERS</button>   
            </div>         
        </div>



          
          <div className="col-md-9 ">
            {/* {JSON.stringify(checked,null ,4)}
            {JSON.stringify(radio,null ,4)} */}
            {/* <h1 className="text-center">All Products</h1>  */}
          <div className="d-flex flex-wrap">
          {products?.map((p)=>(
                   
            <div className="card" style={{width:"33%"}} key={p._id}>
                <img  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top " alt={p._id} />
                <div className="card-body">
                <div className="card-name-price">             
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">₹{p.price}</h5>
                </div>
                  <p className="card-text">{p.description.substring(0,30)}</p>
                  
                  <button  className="btn btn-info ms-1" onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
                  <button  className="btn btn-dark ms-1" onClick={()=>{
                    setCart([...cart,p])
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart,p])

                    )
                    toast.success("Item added to cart")
                  }}>Add to Cart</button>
                  
            
          </div>
        </div>
          ))}


           
          </div>
          <div className='m-2 p-3'>
            {products && products.length <total && (
              <button className='btn btn-warning' onClick={(e)=>{
                e.preventDefault();
                setPage(page+1)
              }}>
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
          </div>
         
        </div>
      
    </Layout>
  )
}

export default Home
