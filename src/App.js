
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Abt from './about'
import Srv from './service'
import Fru from './future'
import Att from './attraction'
import He from './homee'
import Hom from './homee1'
import React, { useEffect, useRef } from "react";
import './home.css'

function BasicExample() {
  return (
    <div>
 <Navbar expand="lg" style={{backgroundColor:"#d4f9fc"}}>
      <Container >
        <Navbar.Brand href="#home"><h1>Travelista</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home"><h4>Home</h4></Nav.Link>
            <Nav.Link href="#about"><h4>About</h4></Nav.Link>
            <Nav.Link href="#service"><h4>Service</h4></Nav.Link>
            <Nav.Link href="#future"><h4>Feature</h4></Nav.Link>
            <Nav.Link href="#attraction"><h4>Attractions</h4></Nav.Link>
            
            <Nav.Link href="#search" style={{marginLeft:500}} >
                <input placeholder="Search..." type="text"  style={{width:180,height:40,borderRadius:10,backgroundColor:"#ff9747",borderColor:"#ff9747"}}></input></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
  
    <div className="App" >
      
    <section>
     <div className='hero-container' style={{color:'white'}}>
      <h1 >Your Adventure Begins Here!</h1>
      <h2>Discover The Great Outdoors</h2>
     </div>

    </section>
      
    </div>
     
   

    <div>
    <He/>
    </div>
    
    <div >
    <h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',letterSpacing:'5px',paddingTop:80,color:'#26D1C4' }}>ABOUT US</h1>

    </div>
    <div id="about" >
      <Abt/>
    </div>
    

     <div>
    <h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',letterSpacing:'5px',paddingTop:80 }}>OUR<span style={{color:'#26D1C4',fontWeight:'bold',fontSize:'40px',letterSpacing:'5px'}}> SERVICE</span></h1>

    </div>
    <div id="service">
    <Srv/>
    </div>

    <div>
    <h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',letterSpacing:'5px',paddingTop:80 }}>Future<span style={{color:'#26D1C4',fontWeight:'bold',fontSize:'40px',letterSpacing:'5px'}}> Tours</span></h1>

    </div>
    <div id="future">
    <Fru/>
    </div>

    <div>
    <h1 style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',letterSpacing:'5px',paddingTop:50,color:'#26D1C4' }}>Attarctions</h1>
    

    </div>
    <div id="attraction">
    <Att/>
    </div>

    <div>
      <Hom/>
    </div>

    <footer className="mt-4" style={{height:"200px",width:"100%",background:"white",color:"black",textAlign:"center",position:"absolute"}}>
    

      <p style={{position:"relative",top:"50%"}}>
        &copy;<span id="date"></span>. 2024 New Experience with Travelista
      </p>
    </footer>
   
    

    </div>
  
  );
}

export default BasicExample; 
/*
import React from 'react'
import BasicExample from './adminHome'

function App(){
  return (
    <div>
      <BasicExample/>
    </div>
  )
}

export default BasicExample
*/
