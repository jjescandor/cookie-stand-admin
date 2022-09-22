
import styles from '../styles/Home.module.css'

export default function From(props) {
    return (
        <form onSubmit={props.getBaseline} className='flex flex-col items-center bg-emerald-300 w-2/3 mx-auto my-10'>
            <h1 className="m-4 text-2xl">Create A Cookie Stand</h1>
            <div className='w-full p-2'>
                <label>Location</label>
                <input name="loc" className='bg-sky-100 w-5/6 m-2' />
            </div>
            <div className="flex flex-row items-center">
                <div className='flex flex-col p-10'>
                    <label>Minimum Customer per Hour</label>
                    <input type="number" name="min" className='bg-white' />
                </div>
                <div className='flex flex-col p-10'>
                    <label>Maximum Customers per Hour</label>
                    <input type="number" name="max" className='bg-white' />
                </div>
                <div className='flex flex-col p-10'>
                    <label>Average Cookie per Sale</label>
                    <input type="number" name="avg" className='bg-white' />
                </div>
                <button className='bg-emerald-600 h-10 p-3'>Create</button>
            </div>
        </form>
    )
}



