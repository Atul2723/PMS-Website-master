import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaXTwitter } from 'react-icons/fa6'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom'


const Team = () => {
    return (
        <>
            <div className='pms-team'>
                <div className='section-heading' style={{margin:0}}>
                    <h1  data-aos='fade-up'  data-aos-delay="100">Our Value Creators</h1>
                    <p  data-aos='fade-up'  data-aos-delay="100">Our team comprises dedicated professionals with diverse backgrounds and expertise. From financial analysts to marketing strategists, each member <br />brings unique skills and perspectives to the table.</p>
                </div>

                <div className='container'>
                    <div className='row team-row'>

                        <Swiper
                            breakpoints={{
                                1400: {
                                    // width: 576,
                                    slidesPerView: 1,
                                },
                                768: {
                                    // width: 768,
                                    slidesPerView: 1,
                                },
                            }}
                            style={{
                                paddingBottom: "80px", "--swiper-pagination-color": "#921E31",
                                "--swiper-pagination-bullet-inactive-color": "#999999",
                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                "--swiper-pagination-bullet-size": "15px",
                                "--swiper-pagination-bullet-horizontal-gap": "6px"
                            }}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={40}
                            autoplay={{ delay: 5000 }}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide className='swiper-slides '>
                                <TeamCard img='/images/Nikunj_Mittal.jpg' heading='Nikunj Mittal' position='MD & CEO – NNM Group (Promoter of NNM Group) ' id='my-tooltip-1' content='Mr. Nikunj Mittal (Promoter of NNM Group) has a widespread and in-depth experience in the field of equity, derivatives and commodities advisory with proven credentials in the field of wealth creation. With over two decades of rich experience in financial markets, he has played a pivotal role in laying the foundation of the wealth management arm of the group and established himself as known figure in the field of equity and commodity broking. This experience of the Industry has prompted him for developing and setting a Wing for making the SME & MSME grow through the IPO’s.' linkedIn='https://linkedin.com/in/nikunj-mittal-19054a15' />
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slides '>
                                <TeamCard img='/images/Apurva_Mittal.jpg' heading='Apurva Mittal' position='Head of Research and Operations – NNM Securities Pvt. Ltd. (PMS) ' content='Mr. Apurva Mittal holds a Masters degree in Marketing from Narsee Monjee Institute of Management Studies and has done his engineering from K.J Somaiya Institute. He has worked in various MNC’s before joining NNM Group. Since then, he has been a prominent figure leading PMS and advisory services. He has great experience in the sector of Equities, Mutual funds, Commodities, Derivatives and Currency Derivatives for more than 15 years. He also has an excellent understanding of the industry which helped NNM to grow further and achieve new heights.' linkedIn='https://linkedin.com/in/apurva-mittal-757bba3'/>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slides '>
                                <TeamCard img='/images/prakash_aggarwal.png' heading='Mr. Prakash Agarwal' position={`Founder of ValueAxis Advisor (FCA , LLB)`} content='Mr Prakash Agarwal has more than two decades of experience in Finance & Consulting and have held senior positions in PWC,KPMG, ArcelorMittal & JSW Steel. Being the founder and Managing Partner of ValueAxis Advisors, Mumbai, he is actively involved in IPOs g for many SME Companies. He will be involved in the day to day operations of the funds in the various decision making process of the activities and would play a key role. His is also a  Co-founder of Endeavour Family office and has thorough understanding of transactions in Capital Markets' linkedIn='https://linkedin.com/in/connect2prakash' />
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slides '>
                                <TeamCard img='/images/bikram_saraf.png' heading='Mr. Bikram Kumar Saraff' position={`Founder of Endeavour Family Office (FCA )`} content='Mr Bikram Kumar Saraf is a FCA with more than two decades of experience in Financial Services, Capital Markets and Real Estate Business. He has deep interest in funding of start ups and is a part of Faad Network, a leading Angel AIF in India with 300 Crores deployed in more than 85 Companies. His is also a founder of Endeavour Family office and has thorough understanding of transactions in Capital Markets.  His past experience will help the fund to deep dive into the various aspects of company selection and take timely calls for the entry and exit of the stocks as and when required. ' linkedIn='https://linkedin.com/in/ca-bikram-kumar-saraff-887552a4' />
                            </SwiperSlide>

                        </Swiper>








                    </div>
                </div>
            </div>
        </>
    )
}

const TeamCard = ({ img, heading, position, id, content ,linkedIn}) => {
    return (<>
        <div className='col-lg-12 team-card'  data-aos='fade-up'  data-aos-delay="100">
            <img src={img} />
            <div className='team-details'>
                <h3>{heading}</h3>
                <h5>{position} </h5>
                <p>{content} </p>
                {/* <button data-tooltip-id={id}>Read More..</button> */}
                <div className='team-icons'>
                    <NavLink to={linkedIn}><FaLinkedin className='icons' /></NavLink>
                    {/* <FaXTwitter className='icons' />
                    <FaInstagram className='icons' /> */}
                </div>
            </div>
            <ReactTooltip
                id={id}
                place="bottom"
                content={content}
                style={{ width: '30%' }}
            />
        </div>
    </>)
}

export default Team