import React,{useState} from 'react'
import "../Styles/Whatsapp.css"
import { PiArrowUp } from "react-icons/pi";
import { FaCircleArrowUp } from "react-icons/fa6";

const Whatsapp = () => {

  const phoneNumber = 9876543210
  const whatsappMessage = encodeURIComponent('Hello, I am interested in your services.');

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

// Scrool Up window icon 

// const [visible, setVisible] = useState(false) 
  
// const toggleVisible = () => { 
//   const scrolled = document.documentElement.scrollTop; 
//   if (scrolled > 300){ 
//     setVisible(true) 
//   }  
//   else if (scrolled <= 300){ 
//     setVisible(false) 
//   } 
// }; 

// const scrollToTop = () =>{ 
//   window.scrollTo({ 
//     top: 0,  
//     behavior: 'smooth'
//   }); 
// }; 

// window.addEventListener('scroll', toggleVisible);

  return (
    <div>

   {/* Scroll up icon  */}

   {/* <div>
        <div className="scrool-up-icon"  style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}>
          <div className="scrool">
            <PiArrowUp style={{ fontSize: '20px' }} />
          </div>
        </div>   
    </div>    */}


    {/* Whtasapp icon */}

   <button className="whatsapp-button" onClick={handleClick}>
      <img src="../Assets/whatsapp.png" className="whatsapp-icon" />
  </button>

    </div>
  )
}

export default Whatsapp