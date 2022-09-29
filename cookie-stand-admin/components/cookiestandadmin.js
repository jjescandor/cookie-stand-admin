import OverviewModal from "./overviewmodal";
import useResource from '../hooks/useResource';
import { CreateForm } from "./createform"
import { Header } from "./header";
import { ReporTable } from "./reportable";
import { Footer } from "./footer";
import Head from "next/head";
import { useEffect, useState } from 'react';


const CookieStandAdmin = (props) => {
    const { resources, createResource, deleteResource } = useResource();
    // const [input, setInput] = useState([]);
    const [modalIsOpen, setIsModalOpen] = useState(false)

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
            hourly_sales: getSales(e.target.max.value, e.target.min.value, e.target.avg.value) || []
        }
        createResource(data);

    }

    return (
        <div className="bg-emerald-50 text-black items-center h-screen content-center items-center">
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header user={props.user} logout={props.logout} />
            <main className='flex flex-col items-center h-5/6 overflow-scroll'>
                <CreateForm handleSubmit={handleSubmit} className="z-0" />
                {resources &&
                    <OverviewModal modalIsOpen={modalIsOpen} setIsModalOpen={setIsModalOpen} input={resources} className="w-full z-40" />}
                <div className='flex flex-col items-center my-10 z-0'>
                    {resources?.length <= 0 &&
                        <h1 className="text-2xl">
                            No Cookie Stands Available
                        </h1>
                    }
                    {resources &&
                        resources.length > 0 &&
                        <ReporTable input={resources} deleteStand={deleteResource} />
                    }
                </div>
                {resources &&
                    resources.length > 0 &&
                    <div className="flex z-0">
                        <button onClick={() => {
                            setIsModalOpen(true)
                        }}
                            className='flex flex-row p-4 bg-emerald-700 rounded-md shadow-lg hover:bg-red-200 m-1'
                        >Overview</button>
                    </div>
                }
            </main>
            <Footer input={resources} className="z-40" />
        </div >
    )
}

export default CookieStandAdmin

