import React from 'react'
import "../Styles/Footer.css"
import { Container } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {

  return (
    
    <>

       <div className="container-fluid footer-main-div-gg mt-2">

        <div className="row">

          <div className="col-md-5">
            <div className="footermain footer1">

                <div className="footer-header">
                  <h3 className="mt-3 mb-3 text-start text-white">Our History</h3>
                </div>

                <p className="text-wrap text-wrap-height text-white">
                    The greatest want of the world is the want of men-men who will not be bought or sold; men who in their inmost souls are true and honest; men who do not fear to call sin by its right name; men whose conscience is as true to duty as the needle to the pole; men who will stand for the right though the heavens fall.
                </p>

            </div>
          </div>

        
            <div className="col-md-3">
                <div className="footermain footer2">
                  <div className="footer-header">

                    <h3 className="mt-3 mb-3 text-start text-white">Quick Links</h3>

                    <ul className="list-unstyled">
                      
                      <div className='d-flex gap-3'>
                        <FaLongArrowAltRight className='pt-1' style={{fontSize:"25px",color:"white"}}/>
                        <a href="/" className="quicklinks">
                          <li className="quicklinkmain text-left text-white text-start">HOME</li>
                        </a>
                      </div>

                      <div className='d-flex gap-3'>
                        <FaLongArrowAltRight className='pt-1' style={{fontSize:"25px",color:"white"}}/>
                        <a href="/ourhistory" className="quicklinks">
                          <li className="quicklinkmain text-left text-white text-start">OUR HISTORY</li>
                        </a>
                      </div>

                      <div className='d-flex gap-3'>
                        <FaLongArrowAltRight className='pt-1' style={{fontSize:"25px",color:"white"}}/>
                        <a href="/childrenhome" className="quicklinks">
                          <li className="quicklinkmain text-left text-white text-start">OUR SERVICE</li>
                        </a>
                      </div>

                      <div className='d-flex gap-3'>
                        <FaLongArrowAltRight className='pt-1' style={{fontSize:"25px",color:"white"}}/>
                        <a href="/gallery" className="quicklinks">
                          <li className="quicklinkmain text-left text-white text-start">GALLERY</li>
                        </a>
                      </div>

                      <div className='d-flex gap-3'>
                        <FaLongArrowAltRight className='pt-1' style={{fontSize:"25px",color:"white"}}/>
                        <a href="/testimonial" className="quicklinks">
                          <li className="quicklinkmain text-left text-white text-start">TESTIMONIAL</li>
                        </a>
                      </div>

                      <div className='d-flex gap-3'>
                        <FaLongArrowAltRight className='pt-1' style={{fontSize:"25px",color:"white"}}/>
                        <a href="/contact" className="quicklinks">
                          <li className="quicklinkmain text-left text-white text-start">CONTACT</li>
                        </a>
                      </div>
                      
                    </ul>

                  </div>
                </div>
              </div>

          <div className="col-md-4">

            <div className="footermain footer3">
              <div className="footer-header">
                <h3 className="mt-3 mb-3 text-start text-white">Address</h3>

                   <div>
                  
                        <p className="fs-6 text-white contact-description">
                             Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <div className='text-white text-start footer-contactno'>
                            
                          <div className='d-flex'>
                          {/* <MdCall /> */}
                            <p>7975109645</p>
                          </div>
                          
                          <div className='d-flex footer-email'>
                            {/* <MdEmail /> */}
                            <p>xyz@gmail.com</p>
                          </div>

                        </div>

                  </div>

              </div>
            </div>
          </div>


          <div className='col-md-12'>

                  <div className='d-flex align-items-center justify-content-center gap-5 mt-2'>

                      <p className='text-white pt-2 follow-uson'>Follow Us On</p>

                      <div className='d-flex gap-5 align-items-center'>

                        <a href='https://www.facebook.com/' target='_blank'><img src="../Assets/facebook.png" alt="" className='footer-media-icons'/></a>
                        <a href='https://x.com/?lang=en' target='_blank'><img src="../Assets/twitter.png" alt="" className='footer-media-icons'/></a>
                        <a href='https://www.instagram.com/' target='_blank'><img src="../Assets/instagram .png" alt="" className='footer-media-icons'/></a>

                      </div>

                  </div>

              </div>

      </div>
    </div> 
     

    </>

  )
}

export default Footer