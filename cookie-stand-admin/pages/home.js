import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Image from 'next/image'
import Head from "next/head";

const Home = () => {
    const imgs = [
        "/data/img1.png",
        "/data/img2.png",
        "/data/img3.png",
        "/data/img4.png",
        "/data/img5.png"
    ]

    return (
        <div className="m-auto text-2xl flex flex-col h-screen bg-emerald-50 text-black">
            <Head>
                <title>Cookie Stand Home</title>
            </Head>
            <Header />
            <h1 className="m-auto">Future products goes here</h1>
            <div className="flex flex-row justify-around items-center h-5/6 m-auto w-screen">
                {imgs.map((img, idx) =>

                (
                    <div className="rounded drop-shadow-2xl" key={idx}>
                        < Image src={img} alt={idx} width={250} height={320} className="rounded-md" />
                    </div>
                )
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Home