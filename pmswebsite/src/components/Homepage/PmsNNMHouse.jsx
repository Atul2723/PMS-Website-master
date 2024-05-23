import React from 'react'
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { GiMoneyStack } from 'react-icons/gi';

const PmsNNMHouse = () => {
    return (
        <div className='pms-about-section'>
            <div className='container'>
                <div className='section-heading'>
                    <h1 data-aos='fade-up'  data-aos-delay="100">The NNM House</h1>
                    <p data-aos='fade-up'  data-aos-delay="100">NNM Group is a well-established financial powerhouse with over 70 years of experience in the industry. We offer a comprehensive range of financial services through our flagship companies, catering to various needs such as banking, investment, insurance, and more.
                    </p>
                </div>
                <div className='pms-about-company'>
                    <div className='row company-row' data-aos='fade-up'  data-aos-delay="100">
                        <div className='col-lg-4 company-col'>
                            {/* <GiMoneyStack className='company-icon' /> */}
                            <img src='/images/nnm_tab_logo.png'/>
                            <h3>NNM Securities Private
                                <br />Limited</h3>
                            <p>This is our flagship company
                                incorporated in 1997, which has
                                operation in the field of Equities,
                                Derivatives, Commodities, Currencies
                                and also a SEBI registered portfolio
                                manager.</p>
                        </div>
                        <div className='col-lg-4 company-col'>
                            {/* <RiMoneyCnyCircleFill className='company-icon' /> */}
                            <img src='/images/nnm_tab_logo.png'/>
                            <h3>NNM Investment And Wealth<br /> Advisory LLP</h3>
                            <p>Offers services such as Portfolio
                                Management Services, Wealth
                                Management, Investment and
                                Insurance. We pride ourselves on offering a diverse range of services tailored to meet your financial needs</p>
                        </div>
                        <div className='col-lg-4 company-col'>
                            {/* <MdOutlineSupervisorAccount className='company-icon' /> */}
                            <img src='/images/cokaco.png' style={{width:'120px',height:'70px'}}/>

                            <h3>NNM NextGen Advisory<br /> Private Limited</h3>
                            <p>Engaged in providing Investment Banking
                                services, underwriting IPOs, Business
                                Consulting, Advisory, Compliance
                                services to listed and unlisted entities,
                                SMEs and Start-ups.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PmsNNMHouse