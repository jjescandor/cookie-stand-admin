import Modal from 'react-modal';


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
    const hours = ["Remove", "Location", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"]

    const findHourlyTotals = (salesData) => {
        const hourlyTotal = []
        for (let j = 0; j < salesData.length; j++) {
            for (let k = 0; k < salesData[j].sales.length; k++) {
                if (!hourlyTotal[k]) {
                    hourlyTotal[k] = salesData[j].sales[k];
                } else {
                    hourlyTotal[k] += salesData[j].sales[k];
                }
            }
        }
        return hourlyTotal
    }

    const findStoreSales = (salesData) => {
        const storeSales = []
        for (let store of salesData) {
            let sum = 0;
            for (let sales of store.sales) {
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
        return salesData[idx]?.location;
    }

    const findBestHour = (salesData) => {
        const storeSales = findHourlyTotals(salesData);
        const max = Math.max(...storeSales);
        const idx = storeSales.indexOf(max);
        return hours[idx + 2];
    }

    const findworstHour = (salesData) => {
        const storeSales = findHourlyTotals(salesData);
        const max = Math.min(...storeSales);
        const idx = storeSales.indexOf(max);
        return hours[idx + 2];

    }

    const numLoc = props.input.length;

    const totalSales = findTotalSales(props.input);

    const bestStoreSales = findBestStore(props.input);

    const worstStoreSales = findWorstStore(props.input);

    const bestHourSales = findBestHour(props.input);

    const worstHourSales = findworstHour(props.input);

    return (
        <Modal
            isOpen={props.modalIsOpen}
            style={customStyles}
            ariaHideApp={false}>
            <h1 className='text-white text-2xl'>Cookie Stands Sales Summary</h1>
            <h1 className='my-3'>Number of Locations: {numLoc}</h1>
            <h1 className='my-3'>Best Performing Store: {bestStoreSales}</h1>
            <h1 className='my-3'>Best Performing Hour: {bestHourSales}</h1>
            <h1 className='my-3'>Worst Performing Store: {worstStoreSales}</h1>
            <h1 className='my-3'>Worst Performing Hour: {worstHourSales}</h1>
            <h1 className='my-3'>Total sales: {totalSales}</h1>
            <button onClick={() => {
                props.setIsModalOpen(false)
            }}
                className="px-10 py-1 mx-auto bg-emerald-600 rounded shadow mg"
            >close</button>
        </Modal>
    )
}

export default OverviewModal;