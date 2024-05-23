import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const BrandChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: '2019', price:  52},
        { year: '2020', price:  68},
        { year: '2021', price: 32},
        { year: '2022',  price:  203},
        { year: '2024',  price: 753},
        
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

export default BrandChart