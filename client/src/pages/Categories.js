import React from 'react'
import Layout from "../components/Layout/Layout"
import {Link} from "react-router-dom"
import useCategory from '../hooks/useCategory'




const Categories = () => {
    const categories=useCategory()
  return (
    <Layout>
        <div className="container">
            <div className="row">
                {categories.map((c)=>(
                    <div className="col-md-6 mt-5 mb-5 gx-3 gy-3">
                        
                            <Link className='btn btn-primary' to={`/category/${c.slug}`} >{c.name}</Link>
                        
                    </div>

                ))}
            </div>
        </div>
      
    </Layout>
  )
}

export default Categories
