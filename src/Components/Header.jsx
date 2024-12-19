import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Offcanvas, NavDropdown } from 'react-bootstrap';
import { HiOutlineHome } from 'react-icons/hi';
import { AiTwotoneMail } from 'react-icons/ai';
import { IoCall } from "react-icons/io5";
import '../Styles/Header.css';

const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

      <div className="head-top">
        <div className="container">
          <div className="row header-row align-items-center justify-content-between">
            <div className="col-auto d-flex gap-3">
              <div className='mb-1'>
                <a href="/"><img src="/Assets/b-logo.jpg" alt="" className='b-logo' /></a>
              </div>
            </div>
            <div className="col-auto d-flex gap-3 home-logo">
              <div className='fs-2 home-icon'><HiOutlineHome /></div>
              <div style={{ textAlign: "start" }}>
                <p className='headerpara pt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-auto email-logo d-flex align-center gap-3">
              <div className='fs-2 mb-2 email-icon'><AiTwotoneMail /></div>
              <div style={{ textAlign: "start" }} className='pt-3 header-mail'>
                <p className='headerpara'>xyz@gmail.com</p>
              </div>
            </div>
            <div className='col-auto number d-flex gap-3' style={{ textAlign: "start" }}>
              <div className='fs-2 mb-2 email-icon pt-2'><IoCall /></div>
              <div className='pt-2 numberdiv'>
                <p className="num-size headerpara pt-3">7975109645</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`headers ${isSticky ? 'sticky-header' : ''}`}>
        {["xl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            style={{
              background: "white",
              position: "sticky",
              top: "0px",
              zIndex: "999",
              backgroundColor: "white",
            }}
          >
            <Container fluid style={{ padding: "0px" }}>

              <div className="d-flex gap-2 bg-logo-color">
                <a href="/" className="tail-text">
                  <img src="/Assets/Logo.png" alt="Logo" className="logoNavMain" />
                </a>
              </div>

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="navbar-dark"
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                  <Nav className="justify-content-evenly flex-grow-1 pe-" style={{ alignItems: "center" }}>
                    <div className='d-flex justify-content-between align-center w-100'>
                      <div></div>
                      <div className='d-flex justify-content-between align-center w-57 navbar'>
                        <Nav.Link href="/" className="tail-text">HOME</Nav.Link>
                        <Nav.Link href="/ourhistory" className="tail-text">OUR HISTORY</Nav.Link>
                        <NavDropdown title="OUR SERVICE" id="basic-nav-dropdown" className="tail-text" style={{ color: "blue" }}>
                          <NavDropdown.Item href="/childrenhome">Children Home</NavDropdown.Item>
                          <NavDropdown.Item href="/elderlyteaching">Elderly Teaching</NavDropdown.Item>
                          <NavDropdown.Item href="/foodvictims">Food Victims</NavDropdown.Item>
                          <NavDropdown.Item href="/homerepairs">Home Repairs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/gallery" className="tail-text">GALLERY</Nav.Link>
                        <Nav.Link href="/testimonial" className="tail-text">TESTIMONIAL</Nav.Link>
                        <Nav.Link href="/contact" className="tail-text">CONTACT US</Nav.Link>
                      </div>
                    </div>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>

    </div>
  );
};

export default Header;





// import React from 'react';
// import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
// import { HiOutlineHome } from 'react-icons/hi';
// import { AiTwotoneMail } from 'react-icons/ai';
// import { IoCall } from "react-icons/io5";
// import { NavDropdown } from 'react-bootstrap';

// import '../Styles/Header.css';

// const Header = () => {
//   return (
//     <div>

//       <div className="head-top">
//         <div className="container">
//           <div className="row header-row align-items-center justify-content-between">
//             <div className="col-auto d-flex gap-3">
//               <div className='mb-1'>
//                 <a href="/"><img src="/Assets/b-logo.jpg" alt="" className='b-logo' /></a>
//               </div>
//             </div>
//             <div className="col-auto d-flex gap-3 home-logo">
//               <div className='fs-2 home-icon'><HiOutlineHome /></div>
//               <div style={{ textAlign: "start" }}>
//                 <p className='headerpara'>Lorem ipsum dolor sit amet., <br />Lorem ipsum dolor sit amet consectetur adipisicing.</p>
//               </div>
//             </div>
//             <div className="col-auto email-logo d-flex align-center gap-3">
//               <div className='fs-2 mb-2 email-icon'><AiTwotoneMail /></div>
//               <div style={{ textAlign: "start" }} className='pt-3 header-mail'>
//                 <p className='headerpara'>xyz@gmail.com</p>
//               </div>
//             </div>

//             <div className='col-auto number d-flex gap-3' style={{ textAlign: "start" }}>
//               <div className='fs-2 mb-2 email-icon pt-2'><IoCall /></div>
//               <div className='pt-2 numberdiv'>
//               <p className="num-size headerpara">9876543210</p>
//               <p className="num-size headerpara">8970564321</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="headers">
//         {["xl"].map((expand) => (
//           <Navbar
//             key={expand}
//             expand={expand}
//             style={{
             
//               background: "white",
//               position: "sticky",
//               top: "0px",
//               zIndex: "999",
//               backgroundColor: "white",
//             }}
//           >
//             <Container fluid style={{ padding: "10px 20px" }}>

//             <div className="d-flex gap-2 bg-logo-color" >
//                             <a href="/" className="tail-text">
//                                 <img src=".../../Assets/Logo.jpeg" alt="Logo" className="logoNavMain" />
//                             </a>
//              </div>

//               <Navbar.Toggle
//                 aria-controls={`offcanvasNavbar-expand-${expand}`}
//                 className="navbar-dark"
//               />
//               <Navbar.Offcanvas
//                 id={`offcanvasNavbar-expand-${expand}`}
//                 aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//                 placement="end"
//               >
//                 <Offcanvas.Header closeButton />
//                 <Offcanvas.Body>
//                   <Nav
//                     className="justify-content-evenly flex-grow-1 pe-"
//                     style={{ alignItems: "center" }}
//                   >
//                     <div className='d-flex justify-content-between align-center w-100'>
//                       <div></div>
//                       <div className='d-flex justify-content-between align-center w-57  navbar'>
                      
//                       <Nav.Link href="/" className="tail-text">
//                         HOME
//                       </Nav.Link>

//                       <Nav.Link href="/ourhistory" className="tail-text">
//                         OUR HISTORY
//                       </Nav.Link>

//                       <NavDropdown title="OUR SERVICE" id="basic-nav-dropdown" className="tail-text" style={{color:"blue"}}>

//                          <NavDropdown.Item href="/childrenhome">Children Home</NavDropdown.Item>
//                         <NavDropdown.Item href="/elderlyteaching">Elderly Teaching</NavDropdown.Item>
//                          <NavDropdown.Item href="/covidrelief">Covid Relief</NavDropdown.Item>
//                         <NavDropdown.Item href="/foodvictims">Food Victims</NavDropdown.Item>
//                           <NavDropdown.Item href="/homerepairs">Home Repairs</NavDropdown.Item>
                                        
//                           </NavDropdown>

//                       <Nav.Link href="/gallery" className="tail-text">
//                         GALLERY
//                       </Nav.Link>

//                       <Nav.Link href="/testimonial" className="tail-text">
//                         TESTIMONIAL
//                       </Nav.Link>

//                       <Nav.Link href="/contact" className="tail-text">
//                         CONTACT US
//                       </Nav.Link></div>
//                     </div>
//                   </Nav>
//                 </Offcanvas.Body>
//               </Navbar.Offcanvas>
//             </Container>
//           </Navbar>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default Header;






// import React from 'react'
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import offcanvasNavbar from 'react-bootstrap/Offcanvas'
// import offcanvasNavbarLabel from 'react-bootstrap/Offcanvas'

// import "../Styles/Header.css"
// import { NavDropdown } from 'react-bootstrap';

// const Header = () => {
    
//   return (
//     <div
//             className="headers"
//             style={{
//                 position: "sticky",
//                 top: "0px",
//                 zIndex: "9999999",
//                 backgroundColor: "rgb(229,52,55)",
//             }}
//         >
            
//             {["xl"].map((expand) => (

//                 <Navbar
//                     key={expand}
//                     expand={expand}
//                     style={{ padding: "0px", background: "rgb(229,52,55)"}}
//                 >

//                     <Container fluid style={{ padding: "5px 20px" }}>

//                         <div className="d-flex gap-2 bg-logo-color" >
//                             <a href="/" className="tail-text">
//                                 <img src=".../../Assets/Logo.webp" alt="Logo" className="logoNavMain" />
//                             </a>
//                         </div>

//                         <Navbar.Toggle
//                             aria-controls={offcanvasNavbar - expand - `${expand}`}
//                         />

//                         <Navbar.Offcanvas
//                             id={offcanvasNavbar - expand - `${expand}`}
//                             aria-labelledby={offcanvasNavbarLabel - expand - `${expand}`}
//                             placement="end"
//                         >

//                         <Offcanvas.Header closeButton></Offcanvas.Header>

//                             <Offcanvas.Body>

//                                 <Nav
//                                     className="justify-content-end flex-grow-1 pe-3"
//                                     style={{ alignItems: "center" }}
//                                 >

//                                     <Nav.Link href="/" className="tail-text-ss md-2 ">
//                                         <div className="underline-hover">HOME</div>
//                                     </Nav.Link>

//                                     <Nav.Link href="/ourhistory" className="tail-text-ss">                                      
//                                         <div className="underline-hover">OUR HISTORY</div>
//                                     </Nav.Link>

                                
//                                     <NavDropdown title="OUR SERVICE" id="basic-nav-dropdown" className="tail-text-ss" style={{color:"blue"}}>

//                                         <NavDropdown.Item href="/childrenhome">Children Home</NavDropdown.Item>
//                                         <NavDropdown.Item href="/elderlyteaching">Elderly Teaching</NavDropdown.Item>
//                                         <NavDropdown.Item href="/covidrelief">Covid Relief</NavDropdown.Item>
//                                         <NavDropdown.Item href="/foodvictims">Food Victims</NavDropdown.Item>
//                                         <NavDropdown.Item href="/homerepairs">Home Repairs</NavDropdown.Item>
                                        
//                                     </NavDropdown>
                                   
//                                     <Nav.Link href="/gallery" className="tail-text-ss">
//                                         <div className="underline-hover">GALLERY</div>                                       
//                                     </Nav.Link> 

//                                     <Nav.Link href="/testimonial" className="tail-text-ss">
//                                         <div className="underline-hover">TESTIMONIAL</div>                                       
//                                     </Nav.Link> 

//                                     <Nav.Link href="/contact" className="tail-text-ss">
//                                          <div className="underline-hover">CONTACT</div>
//                                      </Nav.Link> 
                                   
//                                 </Nav>
//                             </Offcanvas.Body>
//                         </Navbar.Offcanvas>

//                     </Container>

//                 </Navbar>
//             ))}
//         </div>
//   )
// }

// export default Header