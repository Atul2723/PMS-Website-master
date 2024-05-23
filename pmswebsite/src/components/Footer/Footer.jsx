
import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { BiMobileAlt, BiSolidMobile } from 'react-icons/bi';

const Footer = () => {
  return (
    <>
    <div className='disclaimer'>
          <div className='disclaimer-details'>
          <h4>Disclaimer</h4>
          <p>This analysis has been done using publicly available data wherever possible. The information presented is only informative and does not promote any product or company. This Presentation may not be all inclusive and may not contain all of the information that you may consider material. Any liability in respect of the contents of, or any omission from, this Presentation is expressly excluded.</p>
          <p>The information contained herein is of a general nature and is not intended to address the circumstances of any particular individual or entity. Although we endeavor to provide accurate and timely information, there can be no guarantee that such information is accurate as of the date it is received or that it will continue to be accurate in the future. No one should act on such information without appropriate professional advice and only act on after a thorough examination of the particular situation.</p>
          </div>
          
        </div>
    <footer className="footer">
      
      <div className="footer-container">
        
        <div className="column logo-column">
          {/* <h4>Disclaimer</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada faucibus ex nec ultricies.</p> */}
          <img src='/images/nnmlogo.png'/>
          <p> At NNM, we believe in fostering long-term relationships built on trust, transparency, and mutual success. <em>Discover the difference with NNM today !!</em></p>
        </div>
        <div className="column">
          <h4>Navigation Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/fund-details">Fund Details</NavLink></li>
            <li><NavLink to="/how-we-do-it">How We Do It</NavLink></li>
            <li><NavLink to="/sme">What is SME</NavLink></li>
            <li><NavLink to="/case-studies">Case Studies</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="column">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <div>
              <MdLocationOn className="icon" /> B - 6 & 7, Plot No. 31, Shri Siddhivinayak Plaza, 2nd Floor,C.T. No. 602, Village Oshiwara, Off Link Road,  Andheri (West), Mumbai – 400058

            </div>
            <div>
              <FaPhone className="icon" /> 022 4079 0011/48
            </div>
            <div>
              <BiSolidMobile className="icon" /> +91 97688006000
            </div>
            <div>
              <FaEnvelope className="icon" /> nikunj@nnmsecurties.com
            </div>
          </div>
        </div>
      </div>
      <div className="copyright d-flex">
        <p>&copy; {new Date().getFullYear()} nnmsecurties. All rights reserved. </p>
        <p>Designed & Developed By <NavLink to='https://cokaco.com'>Cokaco</NavLink> </p>
      </div>
    </footer>
    
    </>
  );
};

export default Footer;
