const tdStyles = "my-10  mx-auto p-3 bg-emerald-400 text-gray-500"
const thStyles = "my-10  mx-auto p-3 bg-emerald-500 text-gray-700"
const tfStyles = "my-10  mx-auto p-3 bg-emerald-500 text-red-300"
const totalStyles = "my-10  mx-auto p-3 text-center bg-emerald-700 text-white"

export const ReporTable = (props) => {
    const hours = ["Remove", "Location", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"]
    const findTotals = (salesData) => {
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

    return (
        <div className='rounded shadow-xl z-0'>
            <table className='z-0'>
                <thead>
                    <tr>
                        {hours?.map((item, idx) => <th className={`${thStyles}`} key={idx}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.input.map((item, idx) => {
                        return (
                            <tr key={idx} className={`${tdStyles}`}>
                                <td className='flex items-center content-center'>
                                    <button onClick={(() => {
                                        console.log(item.id)
                                        props.deleteStand(item)
                                    }
                                    )} className='hover:text-red-200 mx-auto my-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </td>

                                <td className={`${tdStyles} m-auto`} >
                                    {item.location}
                                </td>
                                {
                                    item?.hourly_sales.map((item, idx) => {
                                        return (<td key={idx} className={`${tdStyles} `}>{item}</td>)
                                    })
                                }
                                <td className={`${tdStyles} `}>{item?.hourly_sales.reduce((item1, item2) => item1 + item2, 0)}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className={`${totalStyles} `} colSpan="2">Totals</td>
                        {findTotals(props.input).map((item, idx) => <td className={`${tfStyles} `} key={idx}>{item}</td>)}
                        <td className={`${tfStyles} `}>{findTotals(props.input).reduce((item1, item2) => item1 + item2, 0)}</td>
                    </tr>
                </tfoot>
            </table >
        </div >
    )
}
