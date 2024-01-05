
import './App.css';

import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import About  from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';



 


import {
  
  Route,
  Routes      
  
} from "react-router-dom";




function App() {
  return (
    <>
     
      <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/dashboard" element={<PrivateRoute/>} >
        <Route path=""  element={< Dashboard/>} />
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
