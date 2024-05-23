import React, { useState } from 'react'
import './FundDetails.css'
import { NavLink } from 'react-router-dom'
import { IoRemoveOutline } from "react-icons/io5";
import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md';

import PmsHome from '../Homepage/PmsHome';

const FundDetails = () => {
    const [isActive, setActive] = useState('Investment-Details')

    function handleClickSection(sectionName) {
        setActive(sectionName)
    }


    return (
        <>
            <div className='fund-details-home'>
                <PmsHome heading='Fund Details' subHeading='Empowering Investors with a Comprehensive Portfolio of Financial Services' img='/images/funddetails.png' buttonText='Contact Us' />
            </div>
            <div className='section-fund-details'>
                <div className='fund-details-heading'>
                    <h1 data-aos='fade-up'  data-aos-delay="100">Fund Details</h1>
                    <p data-aos='fade-up'  data-aos-delay="100">We Offer An Unparalleled Investment Opportunity Designed To Maximize Returns And Foster Long-Term Growth</p>
                </div>
                <div className='row sec-fund-row'>
                    <div className='col-lg-4 sec-fund-col'>
                        <ul  data-aos='fade-up'  data-aos-delay="100">
                            <li>
                                <IoRemoveOutline className={`${isActive === 'Investment-Details' ? 'fund-icon-active' : ''} fund-icon`} /><NavLink className={isActive === 'Investment-Details' ? 'fund-active' : ''} onClick={() => handleClickSection("Investment-Details")} >Investment Details</NavLink>
                            </li>
                            <li>
                                <IoRemoveOutline className={`${isActive === 'Fund-Details' ? 'fund-icon-active' : ''} fund-icon`} /><NavLink className={isActive === 'Fund-Details' ? 'fund-active' : ''} onClick={() => handleClickSection("Fund-Details")} >Fund Details</NavLink>
                            </li>
                            <li>
                                <IoRemoveOutline className={`${isActive === 'Investment-Philosophy' ? 'fund-icon-active' : ''} fund-icon`} /><NavLink className={isActive === 'Investment-Philosophy' ? 'fund-active' : ''} onClick={() => handleClickSection("Investment-Philosophy")} >Investment Philosophy</NavLink>
                            </li>
                            <li>
                                <IoRemoveOutline className={`${isActive === 'Other-Details' ? 'fund-icon-active' : ''} fund-icon`} /><NavLink className={isActive === 'Other-Details' ? 'fund-active' : ''} onClick={() => handleClickSection("Other-Details")} >Other Details</NavLink>
                            </li>

                        </ul>

                    </div>
                    <div className='col-lg-8 sec-fund-description'>
                        {
                            isActive === 'Investment-Details' ? (<>
                                <FundDescription heading='Investment Focus' paragraph='The fund aims to seize opportunities of investing in emerging companies listed on BSE SME, NSE Emerge and other Multicap companies on the Main Board. ' />
                                <FundDescription heading='Investment Approach' paragraph='Two-tier selection approach:Selection Committee (for identifying and proposing emerging opportunities)Investment Approval Committee (Vetting proposals tabled by the Selection Committee and taking final decisions)' />
                                <FundDescription heading='Investment Objective' paragraph='Companies that are well-managed, scalable and with strong governance generate superior returns. NNM AEF strives to achieve long-term capital appreciation by primarily investing in such companies in India that are SME listed or To-be listed in near term.  ' />

                            </>) :
                                isActive === 'Fund-Details' ? (<>
                                    <FundDescription heading='Structure' paragraph='SEBI Registered - Portfolio Management Services (PMS) ' />

                                    <FundDescription heading='Minimum Investment ' paragraph='INR 0.50  Cr (as per SEBI guidelines)' />
                                    <FundDescription heading='Fund Size' paragraph='INR 1,000 Cr (INR 200 Cr + INR 800 Cr). Once we deploy the first INR 500 Cr successfully showcasing strong returns, we will launch the second round of fund raise of INR 500 Cr.' />
                                    <FundDescription heading='Targeted Exit' paragraph='Fund aims to generate superior returns for its investors when entity valuation is unlocked upon migration to the mainboard and/or when the company meets/ outperforms against given guidance or benchmark indices.' />

                                </>) :
                                    isActive === 'Other-Details' ? (
                                        <>
                                            <FundDescription heading='Validity' paragraph='The fund will resourcefully look at long-term investment opportunities along with investment from the fund managers and NNM’s internal resources. ' />
                                            <FundDescription heading='Tenor' paragraph='The tenor of the fund is for 3 years from the date of investment plus two extensions of one year each.' />
                                            <FundDescription heading='Benchmark' paragraph='BSE SME / NSE Emerge ' />
                                            <FundDescription heading='Custodian' paragraph='Orbis Financial Corporation Limited' />

                                        </>
                                    ) :
                                        isActive === 'Investment-Philosophy' ? (<>
                                            <ul>
                                                <li><MdArrowCircleRight className='desc-icon' />The focus of the fund is to find fundamentally strong SME companies with a maximum investment of INR 10 Crs and/or upto 10% of the AUM, whichever is lower, in each script. The fund will also invest in small, mid and large caps simultaneously to diversify the risk and look for growth in these stocks with strong MOAT. </li>
                                                <li><MdArrowCircleRight className='desc-icon' />Each investor will ultimately have minimum 5 and maximum 20 scripts in its portfolio. In case any investor wants to invest more out of the fund size, can opt for it with support of NNM AEF in exchange of carried interest.</li>
                                                <li><MdArrowCircleRight className='desc-icon' />Act as a medium for investments in SME sector - We will not only invest in the identified SME companies but also periodically monitor and handhold those companies to outperform.</li>
                                                <li><MdArrowCircleRight className='desc-icon' />Our Company selection process involves 360 degree due diligence and analysis, in-person understanding of the company and its promoters, evaluating the timing of investment, periodic meetings with the Management with the focus on future developments.  </li>
                                                <li><MdArrowCircleRight className='desc-icon' />Extensive multiple screening mechanism, use of financial models and research tools, valuation matrix and exit strategy </li>
                                                {/* <li><MdArrowCircleRight className='desc-icon'/>Our continuous monitoring of invested companies ensures oversight and safeguarding investor interests.</li> */}
                                            </ul>

                                        </>) :


                                            ''
                        }

                    </div>
                </div>


            </div>

            <div className='pms-risks'>
                <div className='container'>
                    <div className='risk-heading'>
                        <h3  data-aos='fade-up'  data-aos-delay="100">Risks Factors</h3>
                    </div>
                    <div className='row risk-row'>
                        <div className='col-lg-5 risk-col-img'>
                            <img  data-aos='fade-up'  data-aos-delay="100" src='/images/risksvg.svg' />

                        </div>
                        <div className='col-lg-7 risk-col'>

                            <ul data-aos='fade-up' data-aos-delay="100">
                                <li><MdArrowCircleRight className='desc-icon' />SMEs are typically very early in their lifecycles when they hit the primary markets. While this appears to give investors an early opportunity to pick potential multibaggers in SME IPOs, it also comes with the risk of losing money if the fundamentals aren't strong or the business deteriorates in the future. Needless to say, this is a dangerous combination that has a two-edged sword. </li>
                                <li><MdArrowCircleRight className='desc-icon' />SME IPOs have faced liquidity challenges, but several of these share-sales outperformed mainboard listings over a period.</li>
                                <li><MdArrowCircleRight className='desc-icon' />There are always risks in applying to IPOs, and you should always research the company prior to applying to their SME IPO. However, SME IPOs can provide good returns if they have high growth potential and are fundamentally strong.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FundDetails


function FundDescription({ heading, paragraph }) {
    return (<>
        <div  data-aos='fade-up'  data-aos-delay="100">
            <h1><MdArrowCircleRight className='desc-icon' />{heading}</h1>
            <p>{paragraph}</p>
        </div>
    </>)
}