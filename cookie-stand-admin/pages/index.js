import styles from '../styles/Home.module.css';
import Main from "./main";
import Header from "./header";
import Footer from "./Footer";

export default function Home() {

  return (
    <div className='bg-emerald-50 text-black items-center h-screen  content-center items-center'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
