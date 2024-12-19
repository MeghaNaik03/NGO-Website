import React, { useEffect } from 'react'
import { Button, Card, Carousel, Container } from 'react-bootstrap'
import "../Styles/Home.css"
import OwlCarousel from 'react-owl-carousel'

import Aos from 'aos';
import 'aos/dist/aos.css';

    const Home = () => {
      
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

      useEffect(() => {
        Aos.init();
        window.scroll(0, 0);
      }, []);
    
  return (

    <div className='whole-div' data-aos="fade-up">


       {/*===== Fade Carousel =====*/}

       {/* <Container> */}

            <div>

            <Carousel fade>

                <Carousel.Item>
                    <img src="../Assets/home-carousel1.jpg" className="carousel-img-main" />
                    <Carousel.Caption>
                      <div  className='carousel-contents'>
                        <h3 className='carousel-text ps-3' data-aos="flip-down" data-aos-duration="3000">Donate For Shelter</h3>
                        <p className='carosel-desc ps-3' data-aos="fade-left" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellat.</p>     
                      <a href='/contact'><button className='donate ps-3' data-aos="zoom-in" data-aos-duration="3000">Donate</button></a>
                        {/* <p className='carousel-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corrupti.</p> */}
                      </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="../Assets/home-carousel2.jpg" className="carousel-img-main" />
                    <Carousel.Caption>
                      <div  className='carousel-contents'>
                        <h3 className='carousel-text ps-3' data-aos="flip-down" data-aos-duration="3000">Donate For Food</h3>
                        <p className='carosel-desc ps-3' data-aos="fade-left" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellat.</p>
                       <a href='/contact'><button className='donate ps-3' data-aos="zoom-in" data-aos-duration="3000">Donate</button></a>
                        {/* <p className='carousel-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corrupti.</p>             */}
                       </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src="../Assets/home-carousel3.jpg" className="carousel-img-main" />
                    <Carousel.Caption>
                      <div  className='carousel-contents'>
                        <h3 className='carousel-text ps-3' data-aos="flip-down" data-aos-duration="3000">Donate For Poor</h3>
                        <p className='carosel-desc ps-3' data-aos="fade-left" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellat.</p>
                        <a href='/contact'><button className='donate ps-3' data-aos="zoom-in" data-aos-duration="3000">Donate</button></a>
                        {/* <p className='carousel-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, corrupti.</p> */}
                      </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            </div>


        {/* </Container> */}

         {/*===== Our History =====*/}


      <div className='container'>

        <div className='row mt-5 mb-3'>

            <div className='col-md-7 mt-5 mb-3'>
                <p className='fs-1 text-center'><b>Our History</b></p>
                <p data-aos="fade-right" data-aos-duration="3000">&nbsp;&nbsp;&nbsp;&nbsp;One of the world's premier academic and research institutions, the Jonathan Carroll University has driven new ways of thinking since our 1876 founding. Today, JCU is an intellectual destination that draws inspired scholars to our Hyde Park and international campuses, keeping JCU at the nexus of ideas that challenge and change the world.</p>
                <button className='ourhistory-btnn'><a href='/ourhistory' className='ourhistory-link'>Learn More</a></button>
            </div> 

             <div className='col-md-5 mt-3 mb-3 back-img' >

              {/* <section className='about-bannerimg' 
                    style={{
                      backgroundImage:`url("/Assets/history-backgroundimg.png")`,
                      backgroundPosition:"center",
                      backgroundRepeat:"no-repeat",
                      backgroundSize:"cover",
                      height:"500px",
                      width:"100%"
                    }}
                >
                            <div className='d-flex gap-3' data-aos="zoom-in" data-aos-duration="3000">
                            <img src="../Assets/banner3.jpg" alt="" className='ourhistory-img pt-2' data-aos="zoom-in" data-aos-duration="3000"/>
                              <img src="../Assets/carousel-image1.jpg" alt="" className='ourhistory-img3 ps-2' data-aos="zoom-in" data-aos-duration="3000"/>
                            </div>  

                            <div className='d-flex gap-3' data-aos="zoom-in" data-aos-duration="3000">
                              <img src="../Assets/carousel-image2.jpg" alt="" className='ourhistory-img3 pt-4' data-aos="zoom-in" data-aos-duration="3000"/>
                              <img src="../Assets/carousel-image3.jpg" alt="" className='ourhistory-img pt-5 ps-2' data-aos="zoom-in" data-aos-duration="3000"/>            
                            </div>

              </section> */
              }

              
                <img src="../Assets/banner3.jpg" alt="ourhistory-img" className='ourhistory-img pt-2' data-aos="zoom-in" data-aos-duration="3000"/>
           

            </div> 

        </div>

      </div>
  
  
     {/*===== Services =====*/}

     <p className='text-center fs-1 mt-2 mb-2'><b>Our Services</b></p>

   <div className='service-fullbox '>
      
   <Container className='mt-5'>

    <div className='row justify-content-center align-center m-auto mt-3 mb-5'>

    <div className='col-md-12'>
    
    <OwlCarousel className="owl-theme" loop={false} margin={5} nav {...options}>

      <div className='item mt-5'>

      <Card >

        <Card.Img variant="top" src="../Assets/img1.jpg" className='header-image'/>

        <Card.Body className='entire-cardbody'>
          <Card.Title><a href='/childrenhome' className='service-link'>Children Home</a></Card.Title>
          <Card.Text className='serviceDesc'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className='service-view-btn'><a href="/childrenhome" className='ourhistory-link'>View More</a></Button>
        </Card.Body>

      </Card>

      </div>
      

      <div className='item mt-5'>

      <Card >

      <Card.Img variant="top" src="../Assets/img2.jpg" className='header-image'/>

      <Card.Body className='entire-cardbody'>
          <Card.Title><a href='/elderlyteaching' className='service-link'>Elderly Teaching</a></Card.Title>
          <Card.Text className='serviceDesc'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className='service-view-btn'><a href="/elderlyteaching" className='ourhistory-link'>View More</a></Button>
      </Card.Body>

      </Card>

      </div>

      
      <div className='item mt-5'>

      <Card >

      <Card.Img variant="top" src="../Assets/img3.webp" className='header-image'/>

      <Card.Body className='entire-cardbody'>
          <Card.Title><a href='/foodvictims' className='service-link'>Food Victims</a></Card.Title>
          <Card.Text className='serviceDesc'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className='service-view-btn'><a href="/foodvictims" className='ourhistory-link'>View More</a></Button>
      </Card.Body>

      </Card>

      </div>

   <div className='item mt-5'>

  <Card >

  <Card.Img variant="top" src="../Assets/img4.jpg" className='header-image'/>

  <Card.Body className='entire-cardbody'>
      <Card.Title><a href='/homerepairs' className='service-link'>Home Repairs</a></Card.Title>
      <Card.Text className='serviceDesc'>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary"><a href="/homerepairs" className='ourhistory-link'>View More</a></Button>
  </Card.Body>

  </Card>

  </div>

  

    </OwlCarousel>

    </div>

    </div>

    </Container>

    </div>

        {/* Donate Now */}
   
        {/* <div>
            
            <img src="../Assets/background-image.jpg" alt="background-image" className='background-image'/>

            <div  className='dhfihsef'>
                <p className='video-text'>Donate Now</p>
                <button className='video-view-btnn'>Read More</button>
            </div>


        </div> */}

        {/*===== Donate Now =====*/}

        {/* <div 
        className='mb-3 background-image'
        style={{
              backgroundImage: `url('../Assets/background-image.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '60vh',
              display:'flex',
              justifyContent:"center",
              alignItems:'center'
        }}>

            <p className='back-img-para'>Donate Now</p>
            <button className='btn-back-img'><a href='/contact' className='contact-us'>Contact Us</a></button>

        </div> */}
          

   {/* Testimonial */}

    {/* <Container>

    <div>
    <p className='fs-1 text-center mt-5 mb-3'><b>Testimonials</b></p>
    </div>

    <div className="containt">
    <OwlCarousel
    className="owl-theme"
    loop
    margin={100}
    nav
    items={1}
    autoplay
    autoplayTimeout={10000}
    >

    <div className="item">
    <div className="contact-bxx">
    
        <h3 className="sect-title-3 text-white">Daneal</h3>
        <div className="star-quotes-group d-flex justify-content-between">
        <div className="star-group">
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
        </div>
        <div className="quotes">
            <ImQuotesRight />
        </div>
        </div>
        <p className='text-white mt-3'>
        I have completed theological education and it has been a great experience. The educator was quite experienced and had a deep knowledge of the subject.
        </p>
    </div>
    </div>

    <div className="item" >
    <div className="contact-bxx">
        
        <h3 className="sect-title-3 text-white">Maria</h3>
        <div className="star-quotes-group d-flex justify-content-between">
        <div className="star-group">
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
        </div>
        <div className="quotes">
            <ImQuotesRight />
        </div>
        </div>
        <p className='text-white mt-3'>
        The course content is knowledgeable & great for learning. Thanks to University of Trinity.
        </p>
    </div>
    </div>

    <div className="item" >
    <div className="contact-bxx">
        
        <h3 className="sect-title-3 text-white">John</h3>
        <div className="star-quotes-group d-flex justify-content-between">
        <div className="star-group">
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
            <FaStar className="str" />
        </div>
        <div className="quotes">
            <ImQuotesRight />
        </div>
        </div>
        <p className='text-white mt-3'>
        This Education is very informative & covered almost all the topics in depth. I have gained enough knowledge and confidence from this course.
        </p>
    </div>
    </div>

    </OwlCarousel>
    </div>
    </Container>   */}


  {/*===== Testimonial =====*/}
   
    <Container>

        <p className='fs-1 text-center mt-3 mb-2'><b>Testimonial</b></p>

        <div className='row mt-5 mb-5'>

          <div className='col-md-12'> 
            
            <OwlCarousel className='owl-theme' loop margin={8} {...options}>

              <div >
                <Card >
                  {/* <Card.Header>
        <img src="../Assets/testimonial1.jpg" alt="" className='testimonial-img'/>
        </Card.Header> */}
                  <Card.Body className='entiree-cardbody'>
                    <div>
                      <a href="/testimonial"><img src="../Assets/test1.jpg" alt="" className='testimonial-img1' />
                      </a>
                    </div>

                    <div>
                      <a href="/testimonial" className='testimonial-name'><div className='name mt-3'><b>Elena</b></div> </a>
                     
                      {/* <div className='content-card'>
                        9th Std
                      </div> */}
                      <div className='testDesc mt-2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate quos consequuntur velit nostrum deleniti. Minus quas voluptatem dolorum! Quos.
                      </div>
                      {/* <Link to="/ourtean-1"><button>Know More</button></Link> */}
                    </div>
                  </Card.Body>
                </Card>
              </div>


              <div >
                <Card >
                  {/* <Card.Header>
        <img src="../Assets/testimonial1.jpg" alt="" className='testimonial-img'/>
        </Card.Header> */}
                  <Card.Body className='entiree-cardbody'>
                    <div>
                      <a href="/testimonial"><img src="../Assets/test2.jpg" alt="" className='testimonial-img1' />
                      </a>
                    </div>

                    <div>
                      <a href="/testimonial" className='testimonial-name'><div className='name mt-3'><b>John</b></div> </a>
                     
                      {/* <div className='content-card'>
                        9th Std
                      </div> */}
                      <div className='testDesc mt-2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate quos consequuntur velit nostrum deleniti. Minus quas voluptatem dolorum! Quos.
                      </div>
                      {/* <Link to="/ourtean-1"><button>Know More</button></Link> */}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            

              <div >
                <Card>
                  {/* <Card.Header>
        <img src="" alt="" className='testimonial-img'/>
        </Card.Header> */}
                  <Card.Body className='entiree-cardbody'>
                    <div>
                      <a href="/testimonial">
                      <img src="../Assets/test3.jpg" alt="" className='testimonial-img1' />
                      </a>
                    </div>

                    <div>
                      <a href="/testimonial" className='testimonial-name'><div className='name mt-3'><b>Lata</b></div>
                      </a>
                      {/* <div className='content-card'>
                        6th Std
                      </div> */}
                      <div className='testDesc mt-2'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate quos consequuntur velit nostrum deleniti. Minus quas voluptatem dolorum! Quos.
                      </div>
                      {/* <Link to="/ourtean-1"><button>Know More</button></Link> */}
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div >
                <Card>
                  {/* <Card.Header>
        <img src="" alt="" className='testimonial-img'/>
        </Card.Header> */}
                  <Card.Body className='entiree-cardbody'>
                    <div>
                      <a href="/testimonial"><img src="../Assets/test4.jpg" alt="" className='testimonial-img1' />
                      </a>
                    </div>

                    <div>
                      <a href="/testimonial" className='testimonial-name'><div className='name mt-3'><b>Leena</b></div>
                      </a>
                      {/* <div className='content-card'>
                        12th Std
                      </div> */}
                      <div className='testDesc mt-2'>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi cupiditate quos consequuntur velit nostrum deleniti. Minus quas voluptatem dolorum! Quos.
                      </div>
                      {/* <Link to="/ourtean-1"><button>Know More</button></Link> */}
                    </div>
                  </Card.Body>
                </Card>
              </div>
  
            </OwlCarousel>
          </div>
      
        </div>
      </Container>

      <button className='test-btn'><a href='/testimonial' className='test-link'>View More</a></button>


      <Container>

{/* <p className='text-center fs-1'><b>Our Courses</b></p> */}

  <div className='row mt-3 mb-3' >

   
    <div className='col-md-8 mt-3 mb-3'>

      <div className=' gap-2 service-mainbox w-100 ps-5'>
        {/* <p className='cardd-mainheading text-start fs-2 text-white'><b>Course Name</b></p> */}
        <h2 className='' data-aos="flip-down" data-aos-duration="3000">Donate</h2>
        <p className='fs-5 mt-3 donate-text' data-aos="zoom-in" data-aos-duration="3000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum odio, consectetur ipsum itaque fugiat obcaecati voluptatum alias consequuntur dolores hic quod maxime perferendis enim delectus illo quidem iste porro ab possimus aliquid reiciendis amet expedita dicta. Illum autem obcaecati aut voluptatibus nisi quia voluptate.</p>

        <div className=''>


          <div className='row service-contents-card mt-3 mb-3' >
{/* 
            <div className='col-md-4 mb-3' >
              <img src="../Assets/logo.jpg" alt="" className='couse-img' />
            </div> */}



            {/* <div className='col-md-8 mb-3'>

             
              <h5 className="card-title mt-2 mb-2 ">POST GRADUATE COURSES:</h5>

              <p className="card-text mb-3  serviceDesc">
                <ul>
                  <li>Master of Divinity(M.Div)</li>
                  <li>Master of Theology (New Testment) M.Th (NT)</li>
                  <li>Master of Theology (Old Testment) M.Th (OT)</li>
                </ul>                      
              </p>

            </div>  */}

          </div>

        </div>


      </div>

    </div>

    <div className='col-md-4 mt-3 mb-3'>
      <img src="../Assets/carousel-image2.jpg" alt="" className='img-fluid pe-3' />
    </div>


  </div>

</Container>

    </div>

  )
}

export default Home