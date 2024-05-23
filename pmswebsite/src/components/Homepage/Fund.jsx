import React from 'react'
import { BiRupee } from 'react-icons/bi';
import { IoMdTime } from 'react-icons/io';
import { TbMoneybag } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt } from "react-icons/fa";

const Fund = () => {
    return (
        <div className='fund-details'>
            <div className='container'>
                <div className='section-heading'>
                    <h1  data-aos='fade-up'  data-aos-delay="100">Fund Details</h1>
                    <p  data-aos='fade-up'  data-aos-delay="100"> At NNM Amritkaal Emerging Fund, we offer an unparalleled investment opportunity designed to maximize returns and foster long-term growth</p>
                </div>
                <div className='row fund-row '>
                    <div className='col-lg-12 fund-col '>
                        <FundLeftCol icon={<BiRupee className='fund-icons' />} heading='Minimum Investment' paragraph='INR 0.50  Cr (as per SEBI guidelines)' />
                        <FundLeftCol icon={<TbMoneybag className='fund-icons' />} heading='Fund Size' paragraph='INR 1,000 Cr (INR 200 Cr + INR 800 Cr)' />
                        <FundLeftCol icon={<IoMdTime className='fund-icons' />} heading='Tenor' paragraph='The tenor of the fund is for 3 years' />
                        <FundLeftCol icon={<FaTachometerAlt className='fund-icons' />} heading='Benchmark' paragraph='BSE SME / NSE Emerge' />
                    </div>
                    <NavLink  data-aos='fade-up'  data-aos-delay="100" className='fund-btn' to='/fund-details'>Read More</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Fund

function FundLeftCol({ icon, heading, paragraph }) {
    return (<>
        <div className='fund-left'  data-aos='fade-up'  data-aos-delay="100">
            {icon}
            <h1>{heading}</h1>
            <p>{paragraph}</p>
        </div>
    </>)
}

