import Header from "./header";
import CreateForm from "./createform";
import ReporTable from "./reportable";
import Footer from "./footer";
import { useState } from 'react';

export default function CookieStandAdmin() {
    const [input, setInput] = useState([]);
    const getSales = (max, min, avg) => {
        const salesArr = []
        for (let i = 0; i < 14; i++) {
            let cookiesPerHour = Math.ceil(Math.floor(Math.random() * (max - min + 1 + min) * avg));
            console.log(cookiesPerHour)
            salesArr.push(cookiesPerHour);
        }
        console.log(salesArr)
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
        setInput([...input, data])

    }
    function newD() {
        return input
    }

    return (
        <div className="bg-emerald-50 text-black items-center h-screen content-center items-center">
            <Header />
            <main className='flex flex-col items-center h-5/6'>
                <CreateForm handleSubmit={handleSubmit} />
                <div className='flex flex-col items-center my-10'>
                    {newD()?.length <= 0 &&
                        <h1 className="text-2xl">
                            No Cookie Stands Available
                        </h1>
                    }
                    {newD()?.length > 0 &&
                        <ReporTable newD={newD} />
                    }
                </div>
            </main>
            <Footer input={input} />
        </div>
    )
}


