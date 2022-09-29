import Link from "next/link";

export const Header = ({ user, logout }) => {

    return (
        <header className='bg-emerald-600 h-20  flex flex-row content-center justify-between'>
            <div className="flex">
                <h1 className="my-auto text-3xl m-5">Cookie Stand Admin</h1>
                {user &&
                    <button className="bg-emerald-800 rounded-md hover:bg-red-200 m-auto p-1" onClick={logout}>Log Out</button>
                }
            </div>
            <div className='flex justify-evenly w-1/6 items-center text-xl'>
                <div className="wrg-toggle">
                    <div>
                    </div>
                    <div className="wrg-toggle-container">
                        <div className="wrg-toggle-check">
                            <span>🌜</span>
                        </div>
                        <div className="wrg-toggle-uncheck">
                            <span>🌞</span>
                        </div>
                    </div>
                    <div className="wrg-toggle-circle"></div>
                    <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
                </div>

                <div>
                </div>
                <h1 className="hover:text-red-300"><Link href="./home">Home</Link></h1>
                <h1>|</h1>
                <h1 className="hover:text-red-300"><Link href="./">Admin</Link></h1>
            </div>
        </header>
    )
}
