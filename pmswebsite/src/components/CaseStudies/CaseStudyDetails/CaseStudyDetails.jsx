import React from 'react'
import { MdArrowCircleRight } from 'react-icons/md'

export const CaseStudyDetails = ({companyTitle , desc1 , desc2 , chart , ListingDate  , IssuePrice1 , IssuePrice2 , CurrentPrice1 , CurrentPrice2}) => {
    return (
        <div className='case-study-details'>
            <div className='container'>
                <div className='row case-study-row'>
                    <div className='col-lg-6 case-study-details'>
                        <h1 data-aos='fade-up'  data-aos-delay="100">{companyTitle}</h1>
                        <ul data-aos='fade-up'  data-aos-delay="100">
                            <li><MdArrowCircleRight className='desc-icon' />{desc1} </li>
                            <li><MdArrowCircleRight className='desc-icon' />{desc2}</li>
                        </ul>
                        

                    </div>
                    <div className='col-lg-6 case-study-col'>
                        {companyTitle === 'Ashapura Intimates Fashion Limited' ? (<>
                         <div className='nnm-exit'>
                            <p>NNM Exit</p>
                         </div>
                        </>):''}
                       <div className='charts-container' data-aos='fade-up'  data-aos-delay="100">
                       {chart}
                       </div>

                    </div>
                   {
                    companyTitle !== 'Ashapura Intimates Fashion Limited' ?(<>
                     <table className='table table-bordered' data-aos='fade-up'  data-aos-delay="100">
                            <thead>
                                <th>Date of Listing</th>
                                <th>{ListingDate}</th>
                                <th>Current Date</th>
                                <th>18-04-2024</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Issue Price (Rs)</td>
                                    <td>{IssuePrice1}</td>
                                    <td>Current Price (Rs.)</td>
                                    <td>{CurrentPrice1}</td>
                                </tr>
                                <tr>
                                    <td>Issue Size (Rs in Crore)</td>
                                    <td>{IssuePrice2}</td>
                                    <td>Current MCAP (Rs. In Crore)</td>
                                    <td>{CurrentPrice2}</td>
                                </tr>
                            </tbody>
                            
                    </table>
                    </>):''

                   }
                </div>
            </div>
        </div>
    )
}
