import Header from "./header";
import CreateForm from "./createform";
import ReporTable from "./reportable";
import Footer from "./footer";
import { useEffect, useState } from 'react';

export default function CookieStandAdmin() {
    const [input, setInput] = useState([]);
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem('cookie')) || [];
        setInput([...item])
    }, []);

    const getSales = (max, min, avg) => {
        const salesArr = []
        for (let i = 0; i < 14; i++) {
            let cookiesPerHour = Math.ceil(Math.floor(Math.random() * (max - min + 1 + min) * avg));
            salesArr.push(cookiesPerHour);
        }
        return salesArr
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            location: e.target.loc.value,
            minCustomers: e.target.min.value,
            maxCustomers: e.target.max.value,
            avgCookies: e.target.avg.value,
            sales: getSales(e.target.max.value, e.target.min.value, e.target.avg.value) || []
        }
        const newData = [...input, data]
        let stringfyedValue = JSON.stringify(newData)
        localStorage.setItem('cookie', stringfyedValue);
        setInput(newData)

    }

    const clearData = () => {
        localStorage.clear()
        const item = JSON.parse(localStorage.getItem('cookie')) || [];
        setInput([...item])
    }

    return (
        <div className="bg-emerald-50 text-black items-center h-screen content-center items-center">
            <Header />
            <main className='flex flex-col items-center h-5/6'>
                <CreateForm handleSubmit={handleSubmit} />
                <div className='flex flex-col items-center my-10'>
                    {input?.length <= 0 &&
                        <h1 className="text-2xl">
                            No Cookie Stands Available
                        </h1>
                    }
                    {input.length > 0 &&
                        <ReporTable input={input} />
                    }
                </div>
                {input?.length > 0 &&
                    <button onClick={clearData} className='p-4 bg-emerald-700 rounded-md shadow-lg hover:bg-red-200'>clear table</button>}
            </main>
            <Footer input={input} />
        </div>
    )
}


