import React, { useState } from 'react'
import './Contact.css'
import ContactForm from './ContactForm'
import { FaAddressBook, FaAddressCard } from 'react-icons/fa'
import { BsTelephone, BsTelephoneFill } from 'react-icons/bs'
import { BiMobileAlt, BiMobileLandscape, BiSolidMobile } from 'react-icons/bi'
import { MdAttachEmail } from 'react-icons/md'
import Spinner from './Spinner'
import EmailForm from './EmailForm'
import { TiTick, TiWarning } from "react-icons/ti";
import { IoClose } from 'react-icons/io5'

const Contact = () => {
  const [mapLoading, setMapLoading] = useState(true);
  const [isEmail, setEmail] = useState(false)
  const [wrongDetails , setWrongDetails] = useState(false)

  const handleMapLoad = () => {
    setMapLoading(false);
  };
  const handlePopupClose = ()=>{
    setEmail(false)
    wrongDetails(false)
  }
  
  return (
    <>
      {isEmail && <PopupEmail handlePopupClose={handlePopupClose} icon={<TiTick className='popup-icon' />} message='Email Sent Sucessfully !!'/>}

      {wrongDetails && <PopupEmail handlePopupClose={handlePopupClose} icon={<TiWarning className='popup-icon' />} message='Something Went Wrong !!'/>}

      <div className='contact-us'>
        <div className='container'>
          <div className='row contact-row'>
            <div className='col-lg-6 contact-img'>
              <img src='/images/contactsvg.svg' data-aos='fade-up'  data-aos-delay="100"/>
            </div>
            <div className='col-lg-6 contact-details' data-aos='fade-up'  data-aos-delay="100">
              {/* <ContactForm /> */}
              <EmailForm isEmail = {isEmail} setEmail = {setEmail} setWrongDetails={setWrongDetails}/>

            </div>
          </div>
        </div>
      </div>

      <div className='contact-section-details'>
        <div className='section-heading'>
          <h1 data-aos='fade-up'  data-aos-delay="100">Visit Us</h1>
          <p data-aos='fade-up'  data-aos-delay="100">Find us at the following location. Feel free to drop by or contact us for any inquiries</p>
        </div>
        <div className='container'>
          <div className='row contact-branch-map-row'>
            <div className='col-lg-6 contact-branch-col'>
              <ul data-aos='fade-up'  data-aos-delay="100">
                <li>
                  <FaAddressBook className='branch-icon' />
                  <div className='address'>
                    <h3>Address</h3>
                    <p> B - 6 & 7, Plot No. 31, Shri Siddhivinayak Plaza, 2nd Floor,<br />C.T. No. 602, Village Oshiwara, Off Link Road,  Andheri (West), Mumbai – 400058</p>
                  </div>
                </li>
                <div className='branch-image-col'>
                  <ul>
                    <li>
                      <BsTelephoneFill className='branch-icon' />
                      <div>
                        <h3>Tel</h3>
                        <p> 022 4079 0011/48</p>
                      </div>
                    </li>
                    <li className='contact-phone'>
                      <BiSolidMobile className='branch-icon' />
                      <div>
                        <h3>Phone</h3>
                        <p> +91 97688006000</p>
                      </div>
                    </li>
                    <li>
                      <MdAttachEmail className='branch-icon' />
                      <div><h3>Email</h3>
                        <p> nikunj@nnmsecurties.com</p></div>
                    </li>
                  </ul>
                  <img src='/images/map.svg' />
                </div>
              </ul>


            </div>
            <div className='col-lg-6 contact-map-col'>
              <div className='map-container' data-aos='fade-up'  data-aos-delay="100">
                {/* {mapLoading && <Spinner />} */}
                <iframe 
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2723742495473!2d72.83083307466671!3d19.139551049975406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63ca3e6559f%3A0xae90829f0bb61842!2sNNM%20Securities%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1714024143205!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={handleMapLoad}
                />
              </div>

            </div>
          </div>
        </div>

      </div>

    </>
  )
}

function PopupEmail({icon , message , handlePopupClose}){
  return(<>
    <div className='popup-email-box'>
        <div className='popup-close-icon'>
          <button onClick={handlePopupClose}><IoClose /></button>
        </div>
        {icon}
        <p>{message}</p>

      </div>
  
  </>)
}

export default Contact