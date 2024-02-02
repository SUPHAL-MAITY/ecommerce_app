import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'
import Searchinput from '../Form/Searchinput'
import useCategory from '../../hooks/useCategory'
import { useCart } from '../../context/Cart'
import {Badge }  from "antd"



const Header = () => {

  const [auth,setAuth]=useAuth()
  const [cart]=useCart()
  const categories=useCategory()


   const handleLogOut=()=>{
    setAuth({
      ...auth,user:null ,token:""
    })
    localStorage.removeItem("auth")
    toast.success("Logged out successfully")

   }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" >🛒 Ecommerce App</Link >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Searchinput/>
                <li className="nav-item">
                <Link to="/" className="nav-link "  >Home</Link >
                </li>
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {auth?.user?.name}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link  className="dropdown-item" to={`/dashboard/${auth?.user?.role===1 ?"admin":"user"}`}>Dashboard</Link></li>
                    <li ><Link  onClick={handleLogOut} to="/login" className="dropdown-item"  >Log out</Link ></li>
                    
                  </ul>
              </li>

              <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/categories" id="navbarDropdown"  data-bs-toggle="dropdown" >
                     Categories
                    </Link>
                    <ul className="dropdown-menu" >
                    <li ><Link className="dropdown-item" to="/categories" >All Categories</Link></li>
                        {categories?.map((c)=>(
                          
                          <li key={c._id}><Link className="dropdown-item" to={`/categories/${c.slug}`} >{c.name}</Link></li>
                        
                          ))}
                    </ul>

                   
                    
              </li>






                
                {
                  !auth.user ? (<>
                  <li className="nav-item">
                <Link to="/register" className="nav-link "  >SignUP</Link >
                </li>
                <li className="nav-item">
                <Link to="/login" className="nav-link "  >LogIn</Link >
                </li>
                  </>):(
                    <>
                    
                    
                    </>
                  )
                }
                
                <li className="nav-item">
                  <Badge count={cart?.length} showZero>
                  <Link to="/cart" className="nav-link "  >Cart</Link >

                  </Badge>
                
                </li>
                
            </ul>
            
            </div>
        </div>
</nav>
      
    </>
  )
}

export default Header
