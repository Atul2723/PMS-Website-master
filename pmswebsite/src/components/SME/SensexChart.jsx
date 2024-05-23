import React, { useState } from 'react';
import { AgChartsReact } from 'ag-charts-react';

const SensexChart = () => {
    const [chartOptions, setChartOptions] = useState({
        data: [
            { year: 2019, price: 39031.55 },
            { year: 2020, price: 33717.62 },
            { year: 2021, price: 48782.36 },
            { year: 2022, price: 57060.87 },
            { year: 2023, price: 61112.44 },
            { year: 2024, price: 73730.16},
        ],
      series: [{ type: 'area', xKey: 'year', yKey: 'price', fill:'rgba(151,67,65,0.7)' },
        {
            type: 'line',
            xKey: 'year',
            yKey: 'price',
            label: {
                enabled: true,
                fontWeight: 'bold',
                fontSize: 8
            },
            marker:{
                fill:'#921E31'
            },
            stroke:'#921E31'

        },
        

        ],

    });

    return (
        <AgChartsReact options={chartOptions} />
    );
}

export default SensexChart