import React from 'react'
import { FaArrowRight, FaCircleArrowRight } from 'react-icons/fa6'

const Philosophy = () => {
  return (
   <div className='pms-philosophy'>
      <div className='container'>
        <div className='row philosophy-row'>
            <div className="col-lg-6 philosophy-col">
                <img src='/pmsphilosophy.png'/>
            </div>
            <div className='col-lg-6 philosophy-col'>
               <h3>Investment Philosophy</h3>
               <ul>
                <li><FaCircleArrowRight className='philosophy-icons'/>The focus of the fund is to find fundamentally strong SME companies with a maximum investment of INR 10 Crs and/or upto 10% of the AUM, whichever is lower, in each script. The fund will also invest in small, mid and large caps simultaneously to diversify the risk and look for growth in these stocks with strong MOAT. </li>
                <li><FaCircleArrowRight className='philosophy-icons'/>Each investor will ultimately have minimum 5 and maximum 20 scripts in its portfolio. In case any investor wants to invest more out of the fund size, can opt for it with support of NNM AEF in exchange of carried interest.</li>
                <li><FaCircleArrowRight className='philosophy-icons'/>Act as a medium for investments in SME sector - We will not only invest in the identified SME companies but also periodically monitor and handhold those companies to outperform.</li>
                <li><FaCircleArrowRight className='philosophy-icons'/>Our Company selection process involves 360 degree due diligence and analysis, in-person understanding of the company and its promoters, evaluating the timing of investment, periodic meetings with the Management with the focus on future developments. </li>
                <li><FaCircleArrowRight className='philosophy-icons'/>Extensive multiple screening mechanism, use of financial models and research tools, valuation matrix and exit strategy</li>
                <li><FaCircleArrowRight className='philosophy-icons'/>The fund shall publish list of identified new opportunities to its investors and also submit progress reports on its exiting investments.</li>
                <li><FaCircleArrowRight className='philosophy-icons'/>Our continuous monitoring of invested companies ensures oversight and safeguarding investor interests.</li>
               </ul>

            </div>
        </div>
      </div>
      
   </div>
  )
}

export default Philosophy