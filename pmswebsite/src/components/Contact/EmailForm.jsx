import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdRampRight } from 'react-icons/md';
// import SMTPClient from 'smtp.js';
// import SMTPClient from 'smtp-client';
import { TiTick } from "react-icons/ti";

const EmailForm = ({isEmail , setEmail , setWrongDetails}) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const config = {
            // SecureToken : "aea53419-6e79-4525-af97-4861b21ed474",
            Username: 'it1@cokaco.com',
            Password: 'BC74FD465FA0AB60022BB65211F97E411684',
            Host: "smtp.elasticemail.com",
            Port: 2525,
            From: 'it1@cokaco.com',
            To: 'it1@cokaco.com',
            Subject: `Message from ${formData.name} ${formData.email}`,
            Body: `
            <html>
      <body>
        <h1>Contact Information</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>City:</strong> ${formData.city}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      </body>
    </html>
     
            `
        }


        if (window.Email) {
            // console.log(window.Email)
            window.Email.send(config)
                .then((message) => {
                    console.log("Email sent successfully:", message);
                    setEmail(true)
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        address: '',
                        city: '',
                        message: ''
                    });
                })
                .catch((error) => {
                    console.error("Error sending email:", error);
                    // alert("Failed to send email. Please try again later.");
                    setWrongDetails(true)
                });
        }
    }




    return (
        <>
            <div className='form-container'>
                <form className='form' onSubmit={submitHandler} autoComplete='off'>
                    <div className='form-header'>
                        <h1>Contact Us</h1>
                    </div>
                    <div className='form-para'>
                        <p>For any queries or questions, feel free to reach out to us.</p>
                    </div>
                    <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange} required />
                    <input type='tel' placeholder='Phone' name='phone' value={formData.phone} onChange={handleChange} required />
                    <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
                    <input type='text' placeholder='Address' name='address' value={formData.address} onChange={handleChange} required />
                    <input type='text' placeholder='City' name='city' value={formData.city} onChange={handleChange} required />
                    <input placeholder='Message' name='message' value={formData.message} onChange={handleChange} required />
                    <input className='input-button' type='submit' value='Send Message' />
                    {/* <span className='success-email'>Email Sent SuccessFully</span> */}


                </form>

                {/* <div className='popup-email-box'>
                    <div className='popup-close-icon'>
                        <button><IoClose /></button>
                    </div>
                    <TiTick className='popup-icon' />
                    <p>Email Sent SuccessFully !!</p>
                </div> */}
            </div>

        </>

    );
};

export default EmailForm;
