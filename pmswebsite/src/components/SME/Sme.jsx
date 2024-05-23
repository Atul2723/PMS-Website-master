import React from 'react'
import './Sme.css'
import { MdArrowCircleRight } from 'react-icons/md'
import ProvenReturns from './ProvenReturns'
import ScopeOfReturns from './ScopeOfReturns'

const Sme = () => {
    return (
        <>
            <div className='sme-details-section'>
                <div className='container'>
                    <div className='row sme-row'>
                        <div className='col-lg-6 sme-img'>
                            <img src='/images/smesvg.svg'  data-aos='fade-up'  data-aos-delay="100"/>
                        </div>
                        <div className='col-lg-6 sme-details'>
                            <h1  data-aos='fade-up'  data-aos-delay="100">What Is An SME IPO ?</h1>
                            <p  data-aos='fade-up'  data-aos-delay="100"><MdArrowCircleRight className='desc-icon' /> In 2012, the NSE and BSE collectively opened two exchanges for the listing of SME IPOs. These are:
                                <ol>
                                    <li>BSE SME platform by the Bombay Stock Exchange</li>
                                    <li>NSE EMERGE by the National Stock Exchange</li>

                                </ol></p>
                            <p  data-aos='fade-up'  data-aos-delay="100"><MdArrowCircleRight className='desc-icon' /> Just like any other company issues an IPO to raise funds, SME IPOs are meant to raise capital for a small and medium enterprise company. As SMEs are smaller than other companies, the SME IPO is smaller in issue size than a regular company’s IPO. After raising capital through an IPO, the shares trade on the SME exchange. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sme-importance'>

                <div className='sme-header'>
                    <h3  data-aos='fade-up'  data-aos-delay="100">Importance of Investing in SME Companies</h3>
                    <p data-aos='fade-up'  data-aos-delay="100">India is gradually becoming a shining star in SME growth with great government efforts towards their fundamental empowerment. With high risk - high opportunity, it has successfully raised a capital of greater than Rs. 35,000 Crores thereby making SME bourses popular in India.</p>

                </div>
                <div className='container'>
                    <div className='row importance-row'>
                        <div className='col-lg-6 importance-col-details'>
                            <h3 data-aos='fade-up'  data-aos-delay="100">Why Small Businesses Hold the Key to Explosive Growth ?</h3>
                            <ul data-aos='fade-up'  data-aos-delay="100">
                                <li><MdArrowCircleRight className='desc-icon' />Every large-cap was once a small companies. With a precise foresight you might just be able to balloon your fortune. The buoyancy of SME companies and their ability to leverage their growth is much better than large–caps. A reliance will not be the next reliance but a strong small companies has that potential.</li>
                                <li><MdArrowCircleRight className='desc-icon' />A small business has bigger opportunities for expansion. An organisation can possibly expand from $5 million to $.10 MIllion with a focussed sales strategy but from $500 million to $ 1Billion is surely not that easy. </li>
                            </ul>


                        </div>
                        <div className='col-lg-6 importance-col-img'>
                            <img data-aos='fade-up'  data-aos-delay="100" src='/images/smeimportance.svg' />

                        </div>
                    </div>
                </div>
            </div>

            <ProvenReturns/>
            <ScopeOfReturns/>

        </>
    )
}

export default Sme