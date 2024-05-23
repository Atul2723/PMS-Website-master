import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

const PmsHome = ({heading , subHeading ,img , buttonText}) => {
    return (
        <>
            <div className='container'>
                <div className='home-row row '>
                    <div className='col-lg-6 home-col'>
                        <h3 data-aos='fade-up'>
                            {heading}
                        </h3>
                        <h1 data-aos='fade-up'>
                            {subHeading}
                        </h1>
                        <NavLink data-aos='fade-up'  data-aos-delay="300" to={buttonText==='Explore More'?'/fund-details':'/contact-us'}>
                            {buttonText}
                        </NavLink>
                    </div>
                    <div className='col-lg-6 home-img  '>
                        <img data-aos='fade-up'  src={img} alt="NNM Securities Pvt Ltd" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PmsHome