import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
   <div className="text-center">
        <div class="list-group">
            <h4> Dashboard</h4>
            <Link  to="/dashboard/user/profile" className="list-group-item " aria-current="true">Profile</Link>
            <Link  to="/dashboard/user/orders" className="list-group-item">Orders</Link>
            
        </div>

   </div>
   

   
   </>
  )
}

export default UserMenu
