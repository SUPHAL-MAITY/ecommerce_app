
import './App.css';

import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import About  from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminRoute from './components/Routes/AdminRoutes';
import AdminDashboard from './pages/Admin/AdminDashboard';


import {
  
  Route,
  Routes      
  
} from "react-router-dom";
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import CreateUsers from './pages/Admin/CreateUsers';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/Admin/Products';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Search from './pages/Search';
import ProducDetails from './pages/ProducDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';




function App() {
  return (
    <>
     
      <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/product/:slug" element={<ProducDetails/>} ></Route>
      <Route path="/categories" element={<Categories/>} ></Route>
      <Route path="/cart" element={<CartPage/>} ></Route>
      <Route path="/category/:slug" element={<CategoryProduct/>} ></Route>
      <Route path="/search" element={<Search/>} ></Route>
      <Route path="/dashboard" element={<PrivateRoute/>} >
        <Route path="user"  element={< Dashboard />} />
        <Route path="user/orders"  element={< Orders/>} />
        <Route path="user/profile"  element={<Profile />} />
      </Route>

      <Route path="/dashboard" element={<AdminRoute/>} >
        <Route path="admin"  element={< AdminDashboard/>} />
        <Route path="admin/create-category"  element={< CreateCategory/>} />
        <Route path="admin/create-product"  element={< CreateProduct />} />
        <Route path="admin/get-singleproduct/:slug"  element={< UpdateProduct />} />
        <Route path="admin/products"  element={< Products />} />
        <Route path="admin/create-users"  element={< CreateUsers />} />

      </Route>

      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/policy" element={<Policy />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/forgot-password" element={<ForgotPassword />} ></Route>
      

      <Route path="*" element={<PageNotFound />} ></Route>
        

      </Routes>

    
      
    </>
  );
}

export default App;
