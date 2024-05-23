import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const AreaChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: 2019, price: 1726.12},
        { year: 2020, price: 1387.51 },
        { year: 2021,  price:  2259.73},
        { year: 2022,  price: 14390.08},
        { year: 2023,  price: 25367.61 },
        { year: 2024,  price: 68393.76},
    ],
    series: [{ type: 'area', xKey: 'year', yKey: 'price' , fill: 'rgba(151,67,65,0.7)'},
    {
        type: 'line',
        xKey: 'year',
        yKey: 'price',
        label: {
          enabled: true,
          fontWeight: 'bold',
          fontSize: 8
        },
        stroke:'#921E31',
        marker:{
          fill:'#921E31'
        }
       
      }

    ],

  });

  return (
    <AgChartsReact options={chartOptions} />
  );
}

export default AreaChart