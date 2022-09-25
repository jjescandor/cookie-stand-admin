import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineChart = (props) => {
    return (
        <div className=" flex items-center content-center bg-gray-800 rounded drop-shadow-md m-10 w-96">
            <Line options={props.options} data={props.data} className="m-5" />;
        </div>

    )
}