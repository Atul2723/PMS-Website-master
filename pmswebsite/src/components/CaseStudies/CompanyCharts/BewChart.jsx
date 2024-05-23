import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const BewChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: 'Oct 2021', price:  251},
        { year: 'Aug 2022', price: 803},
        { year: 'Jan 2023',  price:  738},
        { year: 'Jun 2023',  price: 1179},
        { year: 'Nov 2023',  price: 1647 },
        { year: 'April 2024', price: 1618},
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

export default BewChart