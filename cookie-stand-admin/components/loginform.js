import { createContext, useSate, useContext } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

const LoginForm = ({ onLogin }) => {

    function submitHandler(event) {
        event.preventDefault();
        const newUser = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        onLogin(newUser);
    }

    return (
        <div className="bg-emerald-50 text-black items-center h-screen content-center items-center">
            <Header />
            <div className=" flex h-5/6">
                <form onSubmit={submitHandler} className="flex flex-col mx-auto w-4/6 items-center">
                    <input placeholder="username" name="username" className="my-20 w-3/5 h-10 bg-emerald-200 rounded" />
                    <input type="password" name="password" placeholder="password" className="w-3/5 h-10 bg-emerald-200 rounded" />
                    <button className="m-5 rounded shadow-xl bg-emerald-500 px-10 py-5 ">Log In</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default LoginForm