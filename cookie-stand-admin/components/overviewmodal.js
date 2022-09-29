import Modal from 'react-modal';
import { LineChart } from './linechart';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#6EE7B7'
    }
};


const OverviewModal = (props) => {
    const labels = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

    const findHourlyTotals = (salesData) => {
        const hourlyTotal = []
        for (let j = 0; j < salesData.length; j++) {
            for (let k = 0; k < salesData[j].hourly_sales.length; k++) {
                if (!hourlyTotal[k]) {
                    hourlyTotal[k] = salesData[j].hourly_sales[k];
                } else {
                    hourlyTotal[k] += salesData[j].hourly_sales[k];
                }
            }
        }
        return hourlyTotal
    }

    const findStoreSales = (salesData) => {
        const storeSales = []
        for (let store of salesData) {
            let sum = 0;
            for (let sales of store.hourly_sales) {
                sum += sales;
            }
            storeSales.push(sum)
        }
        return storeSales;
    }

    const findTotalSales = (salesData) => {
        const hourlyTotal = findHourlyTotals(salesData)
        let sum = 0;
        for (let hourlySales of hourlyTotal) {
            sum += hourlySales;
        }
        return sum;
    }

    const findBestStore = (salesData) => {
        const storeSales = findStoreSales(salesData);
        const max = Math.max(...storeSales);
        const idx = storeSales.indexOf(max)
        return salesData[idx]?.location;
    }

    const findWorstStore = (salesData) => {
        const storeSales = findStoreSales(salesData)
        const idx = storeSales.indexOf(Math.min(...storeSales))
        return salesData[idx].location;
    }

    const findBestHour = (salesData) => {
        const storeSales = findHourlyTotals(salesData);
        const max = Math.max(...storeSales);
        const idx = storeSales.indexOf(max);
        return labels[idx];
    }

    const findworstHour = (salesData) => {
        const storeSales = findHourlyTotals(salesData);
        const max = Math.min(...storeSales);
        const idx = storeSales.indexOf(max);
        return labels[idx];

    }

    const findAverageSales = (salesData) => {
        const hourlySales = findHourlyTotals(salesData);
        for (let i = 0; i < hourlySales.length; i++) {
            hourlySales[i] = Math.floor(hourlySales[i] / numLoc);
        }
        return hourlySales
    }

    const numLoc = props.input?.length;

    const totalSales = findTotalSales(props.input);

    const bestStoreSales = findBestStore(props.input);

    const worstStoreSales = findWorstStore(props.input);

    const bestHourSales = findBestHour(props.input);

    const worstHourSales = findworstHour(props.input);

    const AvgSales = findAverageSales(props.input);

    const data = {
        labels,
        datasets: [
            {
                label: 'Avg. Hourly Sales',
                data: AvgSales,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: `Average Sales Across ${numLoc} Cookie Stores`,
            },
        },
        scales: {
            x: {
                ticks: {
                    beginAtZero: false
                }
            },
            y: {
                ticks: {
                    autoSkip: false,
                    beginAtZero: false,
                }
            }
        }
    };

    return (
        <Modal
            isOpen={props.modalIsOpen}
            style={customStyles}
            ariaHideApp={false}
        >
            <h1 className='text-gray-600 text-2xl w-full text-center'>Cookie Stands Sales Summary</h1>
            <h1 className='my-3 flex'>Number of Locations: <h1 className='mx-2 text-red-600'>{numLoc}</h1> </h1>
            <h1 className='my-3 flex'>Best Performing Store: <h1 className='mx-2 text-red-600'>{bestStoreSales}</h1></h1>
            <h1 className='my-3 flex'>Best Performing Hour: <h1 className='mx-2 text-red-600'>{bestHourSales}</h1></h1>
            <h1 className='my-3 flex'>Worst Performing Store: <h1 className='mx-2 text-red-600'>{worstStoreSales}</h1></h1>
            <h1 className='my-3 flex'>Worst Performing Hour: <h1 className='mx-2 text-red-600'>{worstHourSales}</h1></h1>
            <h1 className='my-3 flex'>Total sales: <h1 className='mx-2 text-red-600'>{totalSales}</h1></h1>
            <LineChart data={data} options={options} />
            <button onClick={() => {
                props.setIsModalOpen(false)
            }}
                className="px-10 py-3 mx-auto bg-emerald-600 rounded shadow hover:bg-red-200"
            >close</button>
        </Modal>
    )
}

export default OverviewModal;