import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { MdArrowCircleRight } from 'react-icons/md';
import AreaChart from './AreaChart';
import ChartHeader from './ChartHeader';
import SensexChart from './SensexChart';

// Chart Component
const ScopeOfReturns = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
      { year: 2012, returns: 100 },
      { year: 2013, returns: 452.47 },
      { year: 2014, returns: 1084.28 },
      { year: 2015, returns: 802.27},
      { year: 2016, returns:1070.8 },
      { year: 2017, returns: 2069.05 },
      { year: 2018, returns: 1789.57 },
      { year: 2019, returns: 1770.48 },
      { year: 2020, returns: 1385.9 },
      { year: 2021, returns: 16671.85 },
      { year: 2022, returns: 23733.81 },
      { year: 2023, returns: 46528.8 },
      { year: 2024, returns: 68393.76 },

    ],
    series: [{
      type: 'bar',
      xKey: 'year',
      yKey: 'returns',
      fill: 'rgba(151,67,65,0.7)',

    },
    {
      type: 'line',
      xKey: 'year',
      yKey: 'returns',
      stroke:'rgb(151,67,65)',

      marker: {
        // fill: '#1E4D92'
        size: 0 // Hide markers
      },
      label: {
        enabled: true,
        fontWeight: 'bold',
        fontSize: 8
      },
      data: [
        { year: 2012, returns: 100 }, // Start point of the line (null y-value)
        { year: 2024, returns: 68393.76 } // End point of the line (null y-value)
      ],
    }],







  });

  return (
    <>
      <div className='scope-of-returns'>
        <div className='scope-of-returns-header'>
          <h1 data-aos='fade-up'  data-aos-delay="100">Scope Of Returns</h1>
          <p data-aos='fade-up'  data-aos-delay="100">SME Stocks Emerge as Prime Candidates for Astute Investors, Offering Substantial Returns and Growth Potential.</p>


        </div>
        <div className='container'>

          <div className='row chart-row'>
            <div className='col-lg-6 chart-list-col'>
              <h3 data-aos='fade-up'  data-aos-delay="100">There has never been a better time to buy SME stocks than Now</h3>

              <ul data-aos='fade-up'  data-aos-delay="100">
                <li><MdArrowCircleRight className='desc-icon' />Stocks listed on the SME platforms of BSE and NSE have already drawn deep pocketed investors because of the massive returns they have generated
                </li>
                <li><MdArrowCircleRight className='desc-icon' />Power of investment in SME and keeping faith:</li>
                <li className='italic-font'><MdArrowCircleRight className='desc-icon' />If you had invested INR 1 Lakh in 2012 in the SME Index, your wealth would have increased to ~ INR 6.83 Cr now…!!</li>


              </ul>

            </div>
            <div className='col-lg-6 charts-col ' data-aos='fade-up'  data-aos-delay="100">
              <ChartHeader heading='BSE SME IPO INDEX' />

              <div className='charts-line-content'>
                <h3 >CAGR: ~72.79%</h3>
              </div>
              <div className='charts-container'>
                <AgChartsReact options={chartOptions} />
              </div>
            </div>
          </div>

          <div className='row sensex-row'>
            <h1 data-aos='fade-up'  data-aos-delay="100">5 Year Returns</h1>
            <div className='col-lg-6 sensex-col' data-aos='fade-up'  data-aos-delay="100">
              <h3><strong>SME IPO :-</strong> 3843.84%</h3>
              <ChartHeader heading='S&P BSE SME IPO Index' />
              <div className='charts-container' data-aos='fade-up'  data-aos-delay="100">
                <AreaChart />
              </div>
            </div>
            
            <div className='col-lg-6 sensex-col' data-aos='fade-up'  data-aos-delay="100">
              <h3><strong>SENSEX :-</strong> 89.23%</h3> 
              <ChartHeader heading='BSE SENSEX' />
              <div className='charts-container' data-aos='fade-up'  data-aos-delay="100">
                <SensexChart />
              </div>

            </div>
          </div>
          <div className='sensex-content'>
            <ul data-aos='fade-up'  data-aos-delay="100">
              <li><MdArrowCircleRight className='desc-icon'/>An investment of Rs 1 Lakh into the Nifty 50 index a year ago would have yield Rs 1.21 Lakhs today. In contrast, the same investment in the S&P BSE SME IPO index would have yield Rs 2.69 Lakhs.</li>
              <li><MdArrowCircleRight className='desc-icon'/>Over the past 5 years, the S&P BSE SME IPO index grew almost 30 times, whereas the BSE Sensex grew just under 2 times.</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default ScopeOfReturns