import Link from "next/link";

import styles from '../styles/Home.module.css'

export default function Header() {

    return (
        <header className='bg-emerald-600 h-20  flex flex-row content-center justify-between'>
            <h1 className="my-auto text-3xl m-5">Cookie Stand Admin</h1>
            <div className='flex justify-evenly w-1/6 items-center text-xl'>
                <h1 className="hover:text-red-300"><Link href="./home">Home</Link></h1>
                <h1>|</h1>
                <h1 className="hover:text-red-300"><Link href="./admin">Admin</Link></h1>
            </div>
        </header>
    )
}

