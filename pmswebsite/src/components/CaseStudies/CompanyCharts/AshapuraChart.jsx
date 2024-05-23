import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const AshapuraChart = () => {
  const [chartOptions, setChartOptions] = useState({
    data: [
        { year: '', price: 57.35 },
        { year: 2014, price: 125.25},
        { year: 2015,  price:  224.1},
        { year: 2016,  price: 249.4},
        { year: 2017,  price: 424.8 },
        { year: 2018,  price: 495.6 },
        { year: 2019, price: 13.29},
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
          fill:'#921e31'
        }
       
      }

    ],

  });

  return (
    <AgChartsReact options={chartOptions} />
  );
}

export default AshapuraChart