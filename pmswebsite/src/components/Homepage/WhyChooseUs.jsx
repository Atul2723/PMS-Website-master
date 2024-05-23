import React from 'react'
import { MdArrowCircleRight } from 'react-icons/md'

const WhyChooseUs = () => {
    return (
        <>
            <div className='why-choose-us'>
                <div className='container'>
                    <div className='why-choose-us-heading'>
                        <h1 className='text-center'  data-aos='fade-up'  data-aos-delay="100">Why NNM Amritkal Emerging Fund ?</h1>
                    </div>

                    <div className='chooseus-row'>
                        <div className='col-lg-4 chooseus-col chooseus-details'>
                            <ul  data-aos='fade-up'  data-aos-delay="100">
                                <li><MdArrowCircleRight className='choose-icons' /><strong>Transparency - </strong> The fund will present each identified script to its investors and keep them updated with any further rebalancing.
                                </li>
                                <li><MdArrowCircleRight className='choose-icons' /><strong>Experience - </strong>Proven historical record of wealth generation in SME segment where NNM currently handholds more than 100 SMEs by our experienced and highly motivated team of professionals
                                </li>

                                <li><MdArrowCircleRight className='choose-icons' /><strong>Targeted Exit - </strong> Aim to generate return when the stock listed on SME exchange is migrated to mainboard and/or when the company reports substantial growth
                                </li>
                            </ul>

                        </div>
                        <div className='col-lg-4 chooseus-col chooseus-img'>
                            <img src='/images/whyus.png' data-aos='fade-up'  data-aos-delay="100" />

                        </div>
                        <div className='col-lg-4 chooseus-col chooseus-details '>
                            {/* <p>This is where NNM is launching its Fund managed by experienced minds, so you can watch your money grow by investing in SME as well as other multi-caps. </p> */}
                            <ul  data-aos='fade-up'  data-aos-delay="100">

                                <li><MdArrowCircleRight className='choose-icons' /><strong>Validity -  </strong>The fund will opportunistically look at long-term investing along with investing NNM’s own funds.

                                </li>


                                <li><MdArrowCircleRight className='choose-icons' /><strong>Risk Management –  </strong>We aim to minimize the Value at risk by spreading out the funds in quality sector agnostic SME stocks which enables the investors to own even the fractional amount of the lot.
                                </li>

                                <li><MdArrowCircleRight className='choose-icons' /><strong>Extensive in-person research -  </strong>Increase wealth of our investors using our unique strategies
                                    while ensuring professional management of funds. Our objective is to concentrate on sectors/ companies with higher-than-average growth potential to grow from mini to mid-cap and mid-cap to large-cap over time.</li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhyChooseUs