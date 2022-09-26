export const CreateForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className='flex flex-col items-center bg-emerald-300 w-2/3 mx-auto my-10 rounded drop-shadow-md z-0'>
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
                <button className='flex flex-row bg-emerald-600 flex-grow items-center content-center h-4/5 m-3 m-auto shadow-md rounded-md hover:bg-red-200'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="my-auto mx-3 w-6 h-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
                </svg>
                    <h6 className='mx-auto my-auto'>Create</h6></button>
            </div>
        </form>
    )
}




