
import './App.css';

import PageNotFound from './pages/PageNotFound';
import Home from './pages/Home';
import About  from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';

 


import {
  
  Route,
  Routes      
  
} from "react-router-dom";

function App() {
  return (
    <>
     
      <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/policy" element={<Policy />} ></Route>
      <Route path="*" element={<PageNotFound />} ></Route>
        

      </Routes>

    
      
    </>
  );
}

export default App;
