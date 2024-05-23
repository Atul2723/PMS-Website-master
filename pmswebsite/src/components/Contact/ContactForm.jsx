import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_armxf9f', 'template_lv8h76d', form.current, {
        publicKey: '2JjG6x_E06MEO8rwZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>

      <form className='form' ref={form} onSubmit={sendEmail}>
        {/* <h2>Contact Us</h2> */}
        <div className='form-header'>
          <h1>Contact Us</h1>

        </div>
        <div className='form-para'>
          <p>For any queries or questions, feel free to reach out to us.</p>
        </div>
        <input type='text' placeholder='Name' name='from_name' />
        <input type='number' placeholder='Phone' name='phone_number'/>
        <input type='emmail' placeholder='Email' name='email_address'/>
        <input type='text' placeholder='Address' name='address'/>
        <input type='text' placeholder='City' name='city'/>
        <input type='text' placeholder='Message' name='message' />
        <input type="submit" value="Send" />
      </form>

    </>
  )
}

export default ContactForm