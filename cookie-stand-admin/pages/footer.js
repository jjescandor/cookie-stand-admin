
import styles from '../styles/Home.module.css'

export default function Footer(props) {
    return (
        <footer className=" flex content-center bg-emerald-600 h-20 my-auto flex flex-col content-center ">
            <div className="flex h-full">
                {props.input?.length > 0 &&
                    < h2 className='my-auto mx-5 text-2xl' > {props.input.length}</h2>
                }
                {props.input?.length <= 0 &&
                    < h2 className='my-auto mx-5 text-2xl' ></h2>
                }
                <h2 className='my-auto text-2xl'>Location Worldwide</h2>
            </div>
        </footer >
    )
}

