import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast'




const Header = () => {

  const [auth,setAuth]=useAuth()


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





                <li className="nav-item">
                <Link to="/category" className="nav-link "  >Category</Link >
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
                <Link to="/cart" className="nav-link "  >Cart(0)</Link >
                </li>
                
            </ul>
            
            </div>
        </div>
</nav>
      
    </>
  )
}

export default Header
