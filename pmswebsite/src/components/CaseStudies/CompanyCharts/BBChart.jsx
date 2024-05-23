import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const BBChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: 2019, price: 27 },
        { year: 2020, price: 39},
        { year: 2021,  price:  75},
        { year: 2022,  price: 298},
        { year: 2023,  price:225 },
        { year: 2024,  price:263},
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

export default BBChart