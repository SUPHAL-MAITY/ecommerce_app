import React from 'react'
import Layout from "../components/Layout/Layout"
import {Link} from "react-router-dom"
import useCategory from '../hooks/useCategory'




const Categories = () => {
    const categories=useCategory()
  return (
    <Layout>
         <img
        src="../../images/banner2.jpg"
        className="banner-img"
        alt="bannerimage"
        style={{height:"180px",width:"100%"}}
      />
        <div className="container" style={{ marginTop: "2px" ,backgroundColor:"#dcc3c3",width:"100%"}}>
            <div className="row container">
                {categories.map((c)=>(
                    <div className="col-md-4 mt-5 mb-5 gx-3 gy-3" key={c._id}>
                        <div >
                        <Link  to={`/category/${c.slug}`} >
                            <img src={`../../../images/${c.slug}.jpg` } style={{width:"70%"}} alt="" />
                            </Link>

                        </div>
                        
                           
                        
                    </div>

                ))}
            </div>
        </div>
      
    </Layout>
  )
}

export default Categories
