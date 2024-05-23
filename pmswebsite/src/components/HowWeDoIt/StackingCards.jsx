import React from 'react'
import './StackingCards.css'

const StackingCards = () => {
    return (
        <>

            <div className="container">
                <ul id="cards">
                    <StackingCardDetails title='SME company Identification' details='Identification of growth industries and companies in each sector with quality products and strong financials indicating growth potential'  steps={1}/>
                    <StackingCardDetails title='Due Diligence and Analysis' details='Our plan is to invest early in right growth opportunity businesses with a track record of generating revenues and a sound plan for scalability which can yield outsized returns over time. Company Analysis include Fundamental and Technical Analysis. The companies are selected based on the feasibility, scalability and complete in-depth analysis of the company' steps={2}/>
                    <StackingCardDetails title='Company Selection' details='We have two layers of committee members who take the final call for company selection: 1) Advisory Committee 2) Board Members Committee'  steps={3}/>
                    <StackingCardDetails title='SME IPO' details='Assisting to get listed on SME Exchange.'  steps={4}/>
                    <StackingCardDetails title='Reporting and Controlling' details='We track the utilization of Funds. In case of any divergence,we discuss with the promoters and align their updated goals with our investments'  steps={5}/>
                    <StackingCardDetails title='Continuous Handholding' details='We conduct their Investor Relation and Public Relation activities.'  steps={6}/>
                    <StackingCardDetails title='Wealth Creation' details='It does not STOP here. This is the first step towards wealth creation'  steps={7}/>
                    <StackingCardDetails title='Investing' details='We may invest at the time of the IPO. We carry out Underwriting and Market Making activities for such companies to maintain transparency. We also participate in the process of fundraise through our own funds'  steps={8}/>
                    <StackingCardDetails title='Advisory for new opportunities' details='We identify growth opportunities and advise the companies accordingly'  steps={9}/>
                    <StackingCardDetails title='Mainboard Migration' details='We track their market cap and growth to make them ready for the right time to migrate to the mainboard'  steps={10}/>
                    <StackingCardDetails title='Exit' details='Once the company is migrated to the mainboard, we time our right exit'  steps={11}/>

                </ul>
            </div>

        </>
    )
}
function StackingCardDetails({title,details , steps}) {
    return (<>

        <li className="card" id="card1">
            <div className="card-body">
                <div className='row card-row'>
                    <div className='col-lg-6 card-col'>
                        <h3>Step  {steps}</h3>
                        <h1>{title}</h1>
                        <p>{details}</p>
                    </div>
                    <div className='col-lg-6 card-img'>
                        <img src={`/stacking/stacking${steps}.jpg`}/>

                    </div>
                </div>
            </div>
        </li>

    </>)
}
export default StackingCards