import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/About.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const About = () => {
  const handleDragStart = (e) => e.preventDefault();




  const items = [
    <img src="../../images/banner1.jpg" style={{height:"180px",width:"100%"}} onDragStart={handleDragStart} role="presentation" />,
    <img src="../../images/banner2.jpg" style={{height:"180px",width:"100%"}} onDragStart={handleDragStart} role="presentation" />,
    <img src="../../images/banner3.jpg" style={{height:"180px",width:"100%"}} onDragStart={handleDragStart} role="presentation" />,
    
  ];



  return (
    <Layout>
      
       <AliceCarousel mouseTracking items={items} />
 <div>
  <div className="about-section">
    <h2>About Us </h2>
    <p>Welcome to our e-commerce platform!</p>
    <p>We're here to redefine your online shopping experience, offering a seamless blend of convenience, quality, and affordability.</p>
  </div>
  <h2 style={{textAlign: 'center'}}>Our Team</h2>
  <div className="row">
   
    <div className="column">
      <div className="card" style={{display:"flex",justifyContent:"center", alignItems: "center"}} >
        <img src="../../images/about2.jpg" alt="Mike" style={{width: '80%',height:"330px"}} />
        
        <div className="container" style={{display:"flex",justifyContent:"center", alignItems: "center"}} >
          <h4>Mark </h4>     
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card" style={{display:"flex",justifyContent:"center", alignItems: "center"}} >
        <img src="../../images/suphal.jpg" alt="Mike" style={{width: '60%',height:"330px"}} />
        
        <div className="container" style={{display:"flex",justifyContent:"center", alignItems: "center"}} >
          <h4>Suphal </h4>     
        </div>
      </div>
    </div>
    <div className="column">
      <div className="card" style={{display:"flex",justifyContent:"center", alignItems: "center"}} >
        <img src="../../images/about3.jpg" alt="Mike" style={{width: '80%',height:"330px"}} />
        
        <div className="container" style={{display:"flex",justifyContent:"center", alignItems: "center"}} >
          <h4>Joe</h4>     
        </div>
      </div>
    </div>
    
    
  </div>
</div>

      
    </Layout>
  )
}

export default About
