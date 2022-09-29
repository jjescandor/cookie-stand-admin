
import styles from '../styles/Home.module.css'

export const Footer = (props) => {
    const s = props.input?.length > 1 ? "s" : "";
    return (
        <footer className=" flex content-center bg-emerald-600 h-20 my-auto flex flex-col content-center z-40 ">
            {props.input &&
                <div className="flex h-full">
                    {props.input?.length > 0 &&
                        <>
                            <h2 className='my-auto mx-5 text-2xl' > {props.input.length}</h2>
                            <h2 className='my-auto text-2xl'>{`Location${s} Worldwide`}</h2>
                        </>
                    }
                    {props.input?.length <= 0 &&
                        < h2 className='my-auto mx-5 text-2xl' ></h2>
                    }
                </div>}
        </footer >
    )
}

