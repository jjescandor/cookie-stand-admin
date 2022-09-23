import Form from "./form"
import Header from "./header";
import Footer from "./footer";
import { useState } from 'react';

export default function Admin() {
    const [input, getInput] = useState('');

    const getBaseline = (e) => {
        e.preventDefault()
        const data = {
            "location": e.target.loc.value,
            "minCustomers": e.target.min.value,
            "maxCustomers": e.target.max.value,
            "avgCookies": e.target.avg.value
        }
        getInput(JSON.stringify(dataArr))
    }

    return (
        <div className="bg-emerald-50 text-black items-center h-screen content-center items-center">
            <Header />
            <main className='flex flex-col items-center h-5/6'>
                <Form getBaseline={getBaseline} />
                <div className='flex flex-col items-center my-10'>
                    <h1>
                        Report Table Coming Soon...
                    </h1>
                    <h1>{input}</h1>
                </div>
            </main>
            <Footer />
        </div>
    )
}


