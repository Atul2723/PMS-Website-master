import React from 'react'
import './Sme.css'
import { MdArrowCircleRight } from 'react-icons/md'


const ProvenReturns = () => {
    return (
        <>
            <div className='proven-returns'>
                <div className='proven-returns-heading'>
                    <h1 data-aos='fade-up'  data-aos-delay="100">Proven Returns</h1>
                    <p data-aos='fade-up'  data-aos-delay="100">Examples of the new breed of ace value investors investing in listed SME and SME IPO</p>
                </div>
                <div className='container'>
                    <div className='row fund-table-row'>
                        <div className='col-lg-4 fund-table-details-col'>
                            <ul data-aos='fade-up'  data-aos-delay="100">
                                <li><MdArrowCircleRight className='desc-icon' />Small caps like Titan and Bata has created history in the last 20 to 22 years by creating multi-fold wealth for investors.</li>
                                <li> <MdArrowCircleRight className='desc-icon' />Likewise good fundamentally strong SME companies are expected to create more wealth in the long term. </li>
                                <li><MdArrowCircleRight className='desc-icon' />Interestingly, it is not only retail investors who are keen on these offerings</li>
                            </ul>

                        </div>
                        <div className='col-lg-8 fund-table-col'>
                            <table data-aos='fade-up'  data-aos-delay="100" className='table table-bordered'>
                                <thead>
                                    <th>Investor</th>
                                    <th>SME Company</th>
                                    <th>Market cap (entry)(INR Cr)</th>
                                    <th>Market Cap (Exit/current) (in INR Cr)</th>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Sunil Singhania</td>
                                    <td>Rajshree Polypack Ltd</td>
                                    <td>129</td>
                                    <td>267 - Current</td>
                                    </tr>
                                    <tr>
                                    <td>Madhusudan Kela</td>
                                    <td>IRIS Business Services Ltd</td>
                                    <td>61</td>
                                    <td>288 - Current</td>
                                    </tr>
                                    <tr>
                                    <td>Mukul Agarwal</td>
                                    <td>EKI Energy Services Ltd</td>
                                    <td>344</td>
                                    <td>1093 - Current</td>
                                    </tr>
                                    <tr>
                                    <td>Porinju Velivath</td>
                                    <td>IRIS Business Services Ltd</td>
                                    <td>164</td>
                                    <td>241 - Exit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div className='jhun-row'>
                    <div className='col-lg-7 fund-table-col'>
                            <table data-aos='fade-up'  data-aos-delay="100" className='table table-bordered'>
                                <thead>
                                    <th>Company</th>
                                    <th>Market cap (entry)(INR Cr)</th>
                                    <th>Market Cap (Exit/current) (in INR Cr)</th>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Tata Tea</td>
                                    <td>43</td>
                                    <td>143 - Exit</td>
                                    </tr>
                                    <tr>
                                    <td>Sesa Goa (Vedanta)</td>
                                    <td>28</td>
                                    <td>65 - Exit</td>
                                    </tr>
                                    <tr>
                                    <td>Titan Company Ltd</td>
                                    <td>3</td>
                                    <td>3542 - Current</td>
                                    </tr>
                                    <tr>
                                    <td>Lupin</td>
                                    <td>150</td>
                                    <td>774.5 </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-lg-5 fund-jhun-col'>
                            <img  data-aos='fade-up'  data-aos-delay="100" src='/rakesh_jhunjhunwala.png'/>
                            <ul data-aos='fade-up'  data-aos-delay="100">
                                <li><MdArrowCircleRight className='desc-icon' />The net worth of Rakesh Jhunjhunwala was approx. $5.8B at the time of his death, starting from just Rs 5,000 in 1985. </li>
                                
                            </ul>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default ProvenReturns