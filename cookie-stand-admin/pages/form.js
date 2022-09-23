import styles from '../styles/Home.module.css'

export default function From(props) {
    return (
        <form onSubmit={props.getBaseline} className='flex flex-col items-center bg-emerald-300 w-2/3 mx-auto my-10 rounded drop-shadow-md'>
            <h1 className="m-4 text-2xl">Create A Cookie Stand</h1>
            <div className='flex flex-grow items-center justify-evenly w-full p-2'>
                <label>Location</label>
                <input name="loc" className='bg-sky-100 w-5/6 m-2 rounded' required />
            </div>
            <div className="flex flex-row flex-grow items-center content-center justify-center w-full">
                <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-emerald-200 h-5/6 m-3 rounded'>
                    <label>Minimum Customer per Hour</label>
                    <input type="number" name="min" className='bg-white w-5/6 rounded' required />
                </div>
                <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-emerald-200 h-5/6 m-3 rounded'>
                    <label>Maximum Customers per Hour</label>
                    <input type="number" name="max" className='bg-white w-5/6 rounded' required />
                </div>
                <div className='flex flex-grow flex-col items-center content-center justify-evenly bg-emerald-200 h-5/6 m-3'>
                    <label>Average Cookie per Sale</label>
                    <input type="number" name="avg" className='bg-white w-5/6 rounded' required />
                </div>
                <button className='bg-emerald-600 flex-grow h-10 w-1/6 m-3 shadow-md rounded-md hover:bg-red-200'>Create</button>
            </div>
        </form>
    )
}



