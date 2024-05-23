import React, { useState } from 'react'
import './CaseStudies.css'
import { MdArrowCircleRight } from 'react-icons/md'
import AshapuraChart from './CompanyCharts/AshapuraChart'
import { CaseStudyDetails } from './CaseStudyDetails/CaseStudyDetails'
import BBChart from './CompanyCharts/BBChart'
import BewChart from './CompanyCharts/BewChart'
import BrandChart from './CompanyCharts/BrandChart'

const CaseStudies = () => {
    const [activeCompany, setActiveCompany] = useState('ashapura')

    function handleActiveCompany(companyName) {
        setActiveCompany(companyName)
    }
    return (
        <>j
            <div className='case-studies'>
                <div className='container'>
                    <div className='case-row'>
                        <div className='case-col col-lg-6'>
                            <h1 data-aos='fade-up'  data-aos-delay="100">Explore Success Stories from Leading Companies</h1>
                            <p data-aos='fade-up'  data-aos-delay="100">Delve into our comprehensive case studies to discover the strategies and innovations driving growth and resilience in today's competitive landscape. Gain valuable insights into industry leaders and their journey towards sustainable success.</p>
                        </div>
                        <div className='case-col-img col-lg-6'>
                            <img data-aos='fade-up'  data-aos-delay="100" src='/images/casestudy.svg' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='overall-study'>
                <div className='container'>
                    <div className='row overall-row'>
                        {/* <OverallData heading='Overall' firstData='Total Companies listed in 2019' listed={49} total='58,74,100' value="1,15,34,493" cagr = '25.2'/>
                        <OverallData heading='NNM Recommended' firstData='Companies recommended by NNM' listed='29' total='35,25,500' value='90,85 ,625' cagr = {37.2}/> */}

                        <div className='col-lg-6 comparison-col'>
                            <div className='comparison-header'>
                                <h3 data-aos='fade-up'  data-aos-delay="100">Overall</h3>
                            </div>
                            
                           <div className='comparison-box-wrapper'>
                           <ComparisonBox number='49' title='Total Number of Companies Listed in 2019'/>
                            <ComparisonBox number='58,74,100' title='Total Investment (INR)'/>
                            <ComparisonBox number='1,15,34,493' title='Value as of now (INR)'/>
                            <ComparisonBox number='25.2%' title='3 Year CAGR'/>
                           </div>

                        </div>
                        <div className='col-lg-6 comparison-col'>
                            <div className='comparison-header'>
                                <h3 data-aos='fade-up'  data-aos-delay="100">NNM Recommended</h3>
                            </div>
                            
                           <div className='comparison-box-wrapper' data-aos='fade-up'  data-aos-delay="100">
                           <ComparisonBox number='29' title='Companies recommended by NNM for investment'/>
                            <ComparisonBox number='35,25,500' title='Total Investment (INR)'/>
                            <ComparisonBox number='90,85,625' title='Value as of now (INR)'/>
                            <ComparisonBox number='37.2%' title='3 Year CAGR'/>
                           </div>

                        </div>
                        

                    </div>
                </div>

            </div>
            <div className='assumptions'>
                <div className='container'>
                    <h1 data-aos='fade-up'  data-aos-delay="100">Assumptions</h1>
                    <hr style={{ width: '95%', color: 'white', height: '3px', opacity: '1' }} />

                    <ul data-aos='fade-up'  data-aos-delay="100">
                        <li>It is assumed that the investor has applied for 1 lot at the time of the IPO.</li>
                        <li>The impact of split & bonus if any has not been taken into consideration while calculating the overall returns. Thus, if taken into calculations, it will increase the returns from those shown Below.</li>
                        <li> Calendar year 2019 IPO has been taken for calculation.</li>
                        <li>It is also assumed that the investor is still invested as of now (29th April 2022). But in reality, relevant exit would been taken at the time of migration to main board</li>
                    </ul>
                </div>
            </div>
            <div className='study-companies'>
                <div className='container'>
                    <ul data-aos='fade-up'  data-aos-delay="100">
                        <li onClick={() => handleActiveCompany("ashapura")} className={activeCompany === 'ashapura' ? 'company-active' : ''}>Ashapura Intimates Fashion Limited</li>
                        <li onClick={() => handleActiveCompany("bb")} className={activeCompany === 'bb' ? 'company-active' : ''}>B & B Triplewal Containers Limited</li>
                        <li onClick={() => handleActiveCompany("bew")} className={activeCompany === 'bew' ? 'company-active' : ''}>BEW Engineering Limited</li>
                        <li onClick={() => handleActiveCompany("brands")} className={activeCompany === 'brands' ? 'company-active' : ''}>Brands Concept Limited</li>
                    </ul>
                </div>
            </div>
            {activeCompany === 'ashapura' ? (<>
                <CaseStudyDetails companyTitle='Ashapura Intimates Fashion Limited' desc1='In 2013, Ashapura Intimates Fashion Ltd got listed on SME Platform. At the time of listing, NNM’s investors invested in the company at the valuation of INR 80 Cr' desc2='In 2016-17, NNM identified the right time to exit at a valuation of ~550 - 600 Cr (~7-8x return). Post which, the company started facing the downturn' chart={<AshapuraChart />} ListingDate='15-10-2018' IssuePrice1='36' IssuePrice2='19.99' CurrentPrice1='267' CurrentPrice2='548' />
            </>) :
                activeCompany === 'bb' ? (<>
                    <CaseStudyDetails companyTitle='B & B Triplewal Containers Limited' desc1='Incorporated in 2011, Bengaluru based B&B Triplewall Containers Limited is a company engaged in the business of manufacturing corrugated boxes and corrugated sheets.' desc2="It mainly caters to the packaging industry and has various packaging companies and MNC's as its clients. The company operates in domestic markets with its products being supplied on a PAN India basis." chart={<BBChart />} ListingDate='15-10-2018' IssuePrice1='36' IssuePrice2='19.99' CurrentPrice1='268' CurrentPrice2='549' />
                </>) :
                    activeCompany === 'bew' ? (<>
                        <CaseStudyDetails companyTitle='BEW Engineering Limited' desc1='Incorporated in 2011, BEW Engineering is engaged in the design and manufacturing of filters and dryers for the Chemicals Industry comprising of Pharmaceuticals – API, Agro Chemicals, and Specialty Chemicals.' desc2="BEW Engineering 's product portfolio includes a range of filtration, mixing and drying equipment, Sterile Applications, Intermediate Compounds, Fine Chemicals, Chemicals, Argo Chemicals, Pesticides, Insecticides, Dyes and Food Products." chart={<BewChart />} ListingDate='16-09-2021' IssuePrice1='58' IssuePrice2='3.97' CurrentPrice1='1610' CurrentPrice2='468' />
                    </>) :
                        activeCompany === 'brands' ? (<>
                            <CaseStudyDetails companyTitle='Brands Concepts Limited' desc1='Brand Concepts Ltd specializes in the manufacturing of bags, backpacks & fashion accessories for the Indian & International markets.' desc2="The Company enters into franchise or trademark license agreements with reputed brands. Analyses the brand and other factors and creates a product design, a sample is manufactured, and on approval from the brand, it outsources its manufacturing activities to the manufacturers located in India and China (majorly)." chart={<BrandChart />} ListingDate='23-08-2018' IssuePrice1='45' IssuePrice2='12.62' CurrentPrice1='775' CurrentPrice2='862' />
                        </>)

                            : ''
            }
        </>
    )
}

function OverallData({ heading, firstData, listed, total, value, cagr }) {
    return (
        <>
            <div className='col-lg-6 overall-col'>
                {/* <hr style={{width:'80%'}}/> */}
                <div className='overall-list'>
                    <h1>{heading}</h1>
                    <ul>
                        <li><MdArrowCircleRight className='desc-icon' /><strong>{firstData} :- </strong><span>{listed}</span></li>
                        <li><MdArrowCircleRight className='desc-icon' /><strong>Total Investment (INR) :- </strong><span>{total}</span></li>
                        <li><MdArrowCircleRight className='desc-icon' /><strong>Value as of now (INR) :-</strong><span>{value}</span></li>
                        <li><MdArrowCircleRight className='desc-icon' /><strong>3 Year CAGR :- </strong> <span>{cagr}</span></li>
                    </ul>
                </div>
            </div>

        </>
    )

}


function ComparisonBox({number , title}) {
    return (
        <>
            <div className='comparison-box' data-aos='fade-up'  data-aos-delay="100">
                <h1>{number}</h1>
                <p>{title}</p>
            </div>

        </>
    )
}
export default CaseStudies