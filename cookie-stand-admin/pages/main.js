import styles from '../styles/Home.module.css'
import Form from "./form"
import { useState } from 'react';

export default function Main() {
    const [input, getInput] = useState('');

    const getBaseline = (e) => {
        e.preventDefault()
        const data = {
            "location": e.target.loc.value,
            "minCustomers": e.target.min.value,
            "maxCustomers": e.target.max.value,
            "avgCookies": e.target.avg.value
        }
        getInput(JSON.stringify(data))
    }

    return (
        <main className='flex flex-col items-center'>
            <Form getBaseline={getBaseline} />
            <div className='flex flex-col items-center my-10'>
                <h1>
                    Report Table Coming Soon...
                </h1>
                <h1>{input}</h1>
            </div>
        </main>
    )
}


