import React, { useEffect } from 'react'
import "../Styles/OurHistory.css"

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, Row, Col } from "react-bootstrap";

import OwlCarousel from 'react-owl-carousel';
import Aos from 'aos';
import 'aos/dist/aos.css';


const OurHistory = () => {

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          400: {
            items: 1,
          },
          600: {
            items: 2,
          },
          700: {
            items: 2,
          },
          1000: {
            items: 4,
    
          }
        },
      };
    
      useEffect(() =>{
         Aos.init();
        window.scroll(0,0)
      })


  return (

    <div className='about-maindiv'>

    {/* Banner */}

    <section className='about-bannerimg' 
        style={{
          backgroundImage:`url("/Assets/banner.jpg")`,
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          height:"200px",
          width:"100%"
        }}
    >

        <div className="container ">

          <div className='breadcrumbt'>

              <div>
                <h1 className='abtus-heading'>Our History</h1>             
              </div>

              {/* <div className='mbl-responsive-breadcrumbs'>
                <Breadcrumb >
                <FontAwesomeIcon icon={faHouse} className='home-icon' style={{ fontSize: '14px', marginTop: '0px', color: "rgb(0,105,176)", padding:"5px" }} />
                  <Breadcrumb.Item href="/" className='home-small-heading'>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active className='abtus-small-heading' style={{color:"blue"}}>Our History</Breadcrumb.Item>
                </Breadcrumb>
              </div> */}

          </div>

        </div>

    </section>

  <Container>

  <div className='row mt-5 mb-3 about-box1'>

      <div className='col-md-6' data-aos="fade-up-right" data-aos-duration="3000">
          <img src="../Assets/banner11.jpg" alt="" className='ourhistory-img1'/>
      </div>

      <div className='col-md-6 mt-3 pe-5'>
        <h1 className='fs-1' data-aos="fade-down" data-aos-duration="3000">History</h1>
        <p className='mt-3' data-aos="fade-up" data-aos-duration="3000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, ullam, molestiae quos quam eius exercitationem velit necessitatibus adipisci nihil distinctio non temporibus culpa cumque accusamus perspiciatis doloribus, harum quia ratione sit iste. Placeat natus nam, maxime aliquam fugiat alias ea maiores tenetur soluta iusto, atque odio asperiores est modi voluptates.</p>
     </div>

  </div>

  {/* <div className='row mt-5 mb-3 about-box2'>
      <div className='col-md-6' >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur veniam repellat cumque atque illo cum impedit nesciunt, architecto optio perspiciatis, sunt, modi animi earum corporis laborum nihil necessitatibus? Est nostrum ab voluptas accusantium explicabo, quia odit, ipsa veniam, laborum natus ea distinctio nam. Necessitatibus veniam autem reprehenderit at nemo iste molestiae, cum assumenda. Illo consectetur laboriosam deleniti quam magnam error iure illum qui eius dolores perferendis numquam amet, facilis dignissimos iste. Esse quod a laboriosam reprehenderit necessitatibus. Voluptatum et, optio tempore adipisci hic, quidem impedit voluptates voluptatibus ut officia maxime maiores nobis magnam eveniet accusamus dignissimos ullam corrupti obcaecati totam.
      </div>

      <div className='col-md-6' >
          <img src="../Assets/home-c1.jpg" alt="" className='abt-content-img2'/>
      </div>
  </div> */}

  </Container>


{/* Mission and Vision */}

 <p className='text-center mission-vision-heading mt-3' data-aos="fade-right" data-aos-duration="3000">Mission and Vision</p>

  <Container>

    <Row className='mt-5 mb-5'>

      <Col md={6} >
        {/* <div className='main-heading mb-3'>
          
          <Card className="text-center">
            <Card.Header className="custom-card-header">
              <b className='mission-vision text-white'>Mission</b>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quaerat necessitatibus aperiam id magni beatae cupiditate sequi. Deleniti, dolorem. Eum quisquam sequi nobis voluptas, consequuntur ratione molestias ipsam deleniti neque possimus, sint repudiandae mollitia.
              </Card.Text>
            </Card.Body>
          </Card>
        </div> */}

          <div >
                <Card >
                  {/* <Card.Header>
        <img src="../Assets/testimonial1.jpg" alt="" className='testimonial-img'/>
        </Card.Header> */}
                  <Card.Body className='entiree-cardbody' data-aos="zoom-in" data-aos-duration="3000">
                    <div>
                      <a href="/testimonial"><img src="../Assets/mission.png" alt="" className='testimonial-img' />
                      </a>
                    </div>

                    <div>
                      <a href="/testimonial" className='testimonial-name'  data-aos="slide-left" data-aos-duration="3000"><div className='name mt-3'><b>Mission</b></div> </a>
                     
                      {/* <div className='content-card'>
                        9th Std
                      </div> */}
                      <div className='testDesc mt-2'  data-aos="zoom-in" data-aos-duration="3000">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate quos consequuntur velit nostrum deleniti. Minus quas voluptatem dolorum! Quos.
                      </div>
                      {/* <Link to="/ourtean-1"><button>Know More</button></Link> */}
                    </div>
                  </Card.Body>
                </Card>
              </div>


            
      </Col>

      <Col md={6}>

      <div >
                <Card >
                  {/* <Card.Header>
        <img src="../Assets/testimonial1.jpg" alt="" className='testimonial-img'/>
        </Card.Header> */}
                  <Card.Body className='entiree-cardbody' data-aos="zoom-in" data-aos-duration="3000">
                    <div>
                      <a href="/testimonial"><img src="../Assets/visionary.png" alt="" className='testimonial-img' />
                      </a>
                    </div>

                    <div>
                      <a href="/testimonial" className='testimonial-name'  data-aos="slide-left" data-aos-duration="3000"><div className='name mt-3'><b>Vision</b></div> </a>
                     
                      {/* <div className='content-card'>
                        9th Std
                      </div> */}
                      <div className='testDesc mt-2'  data-aos="zoom-in" data-aos-duration="3000">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate quos consequuntur velit nostrum deleniti. Minus quas voluptatem dolorum! Quos.
                      </div>
                      {/* <Link to="/ourtean-1"><button>Know More</button></Link> */}
                    </div>
                  </Card.Body>
                </Card>
              </div>
         
      </Col>
     
    </Row>

  </Container>


  {/* <Container>

        <div id='background' className='mt-3'>
          <div className='row mt-2 mb-3' >
            <div className='col-md-3 mb-2'>
              <div  className='border' data-aos="zoom-in" data-aos-duration="3000">
                <h1>300</h1>
                <h2 className='text-center'>Project Working</h2>
              </div>
            </div>

            <div className='col-md-3 mb-2'>
             <div  className='border' data-aos="zoom-in" data-aos-duration="3000">
                <h1>400</h1>
                <h2 className='text-center'>Project Done</h2>
             </div>
            </div>

            <div className='col-md-3 mb-2'>
              <div className='border' data-aos="zoom-in" data-aos-duration="3000">
                <h1>1000</h1>
                <h2 className='text-center'>Happy Clients</h2>
              </div>
            </div>

            <div className='col-md-3 mb-2'>
              <div className='border' data-aos="zoom-in" data-aos-duration="3000">
                <h1 className=''>280</h1>
                <h2 className='text-center'>Awards</h2>
              </div>
            </div>
          </div>
        </div>
        
      </Container> */}


{/* Gallery */}

<h1 className='ourpartner-heading mt-4 mb-3 text-center'>Gallery</h1>

<div className='ourpartners-box' >

  <Container>

    <div className='row mt-2 mb-3'>

      <div className='col-md-12'>

        <OwlCarousel className='owl-theme' loop margin={10} {...options}>

          <div class='item'>
            <div>
              <img class="card-img-top" src="../Assets/img1.jpg" alt="Card image cap" className='partener-icons' />
            </div>
          </div>

          <div class='item'>
            <div>
              <img class="card-img-top" src="../Assets/img2.jpg" alt="Card image cap" className='partener-icons'  />
            </div>
          </div>

          <div class='item'>
            <div>
              <img class="card-img-top" src="../Assets/img3.webp" alt="Card image cap" className='partener-icons'  />
            </div>
          </div>

        </OwlCarousel>

      </div>

      <button className='gallery-viewmore-btn'><a href='/gallery' className='gallery-viewmore'>View More</a></button>
   
    </div>

  </Container>

</div> 


{/* Video */}

{/* <Container>

<div>

<a  href={"http://localhost:3000/../Assets/video.mp4"} target='_blank'>
    <video controls autoPlay muted loop className="video mt-3">
        <source src="../Assets/video.mp4" type="video/mp4" className='mt-3'/>
   </video>
</a>

  <div  className='dhfihsef'>
    <p className='video-text'><b>Watch Our Video</b></p>
    <button className='video-view-btnn' >View</button>
  </div>
</div>

</Container> */}

</div>
 )
}

export default OurHistory