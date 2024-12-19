import React, { useState, useEffect } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

  const ScrollButtons = () => {

  const [showScrollUp, setShowScrollUp] = useState(false);

  // Function to handle scroll position changes

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    setShowScrollUp(scrollPosition > 0);
  };

  // Add scroll event listener

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //===== Function to scroll up =====

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  //===== Function to scroll down =====

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


  return (

    <div style={styles.container}  >

      {showScrollUp ? (

        <FaRegArrowAltCircleUp style={{color:'black',fontSize:'30px',color:"rgb(116,192,193)"}} className="arrow-icon" onClick={scrollUp}/>   
     
      ) : (
     
		    <FaRegArrowAltCircleDown style={{color:'black',fontSize:'30px',color:"rgb(116,192,193)"}} onClick={scrollDown} className="arrow-icon"/>
   
      )}

    </div>
   );
  };

  const styles = {
  container: {
    position: 'fixed',
    bottom: '70px',
    right: '27px',
  },
  button: {
    padding: '5px 10px',
    backgroundColor: 'transparent',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
	border:'1px solid black',
	fontSize:'20px'
    },
  };

export default ScrollButtons;