import Header from "./header";
import Footer from "./footer";
import Image from 'next/image'

export default function Home() {
    const imgs = [
        "/data/img1.png",
        "/data/img2.png",
        "/data/img3.png",
        "/data/img4.png",
        "/data/img5.png"
    ]

    return (
        <div className="m-auto text-2xl flex flex-col h-screen bg-emerald-50 text-black">
            <Header />
            <h1 className="m-auto">Future products goes here</h1>
            <div className="flex flex-row justify-around items-center h-5/6 m-auto w-screen">
                {imgs.map((img, idx) =>
                    (< Image src={img} key={idx} alt={idx} width={250} height={320} />)
                )}
            </div>
            <Footer />
        </div>
    )
}
