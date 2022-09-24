import styles from '../styles/Home.module.css';
const tdStyles = "my-10  mx-auto p-3 bg-emerald-400 text-gray-500"
const thStyles = "my-10  mx-auto p-3 bg-emerald-500 text-gray-700"
const tfStyles = "my-10  mx-auto p-3 bg-emerald-500 text-red-300"

export default function ReporTable(props) {
    const hours = ["Location", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Totals"]
    const findTotals = (salesData) => {
        const hourlyTotal = []
        for (let i = 0; i < salesData[0].sales.length; i++) {
            hourlyTotal.push(0)
        }
        for (let j = 0; j < salesData.length; j++) {
            let sum = 0
            for (let k = 0; k < salesData[j].sales.length; k++) {
                sum = salesData[j].sales[k]
                hourlyTotal[k] += sum
            }
        }
        return hourlyTotal
    }

    return (
        <div className='rounded shadow-xl'>
            <table>
                <thead>
                    <tr>
                        {hours?.map((item, idx) => <th className={`${thStyles}`} key={idx}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.newData()?.map((item, idx) => {
                        return (
                            <tr key={idx}>
                                <td className={`${tdStyles}`} >{item.location}</td>
                                {
                                    item.sales.map((item, idx) => {
                                        return (<td key={idx} className={`${tdStyles}`}>{item}</td>)
                                    })
                                }
                                <td className={`${tdStyles}`}>{item.sales.reduce((item1, item2) => item1 + item2, 0)}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className={`${tfStyles}`}>Totals</td>
                        {findTotals(props.newData()).map((item, idx) => <td className={`${tfStyles}`} key={idx}>{item}</td>)}
                        <td className={`${tfStyles}`}>{findTotals(props.newData()).reduce((item1, item2) => item1 + item2, 0)}</td>
                    </tr>
                </tfoot>
            </table >
        </div>
    )
}