
import './HowWeDoIt.css'

import React from 'react'
import StackingCards from './StackingCards';


const HowWeDoIt = () => {
    return (
        <>
            <div className='timeline-heading'>
                <div className='container'>
                    <div className='row timeline-heading-row'>
                        <div className='col-lg-6 timeline-heading-details'>
                            <h1 data-aos='fade-up' data-aos-delay="100">How We Do It?</h1>
                            <p data-aos='fade-up' data-aos-delay="100">At NNM Amritkal Fund, we follow a comprehensive approach to investment management. Our process involves meticulous planning, thorough research, and disciplined execution. We begin by analyzing market trends, identifying potential opportunities, and assessing risks. Our team of experts then crafts tailored investment strategies to optimize returns while mitigating risks. </p>
                        </div>
                        <div className='col-lg-6 timeline-heading-img'>
                            <img data-aos='fade-up' data-aos-delay="100" src='/images/process.svg' />
                        </div>
                    </div>
                 
                </div>
                
                <div className='vertical-container card'>
                    <div className='stack-wrapper'>
                        {/* <h1 className='steps-heading text-darK text-center'>Process</h1> */}
                        <h1 className='steps-heading'>Process</h1>
                        <StackingCards />
                    </div>

                    
                </div>

            </div>


        </>
    )
}



export default HowWeDoIt;