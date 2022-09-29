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
        <>
            <Header />
            <form onSubmit={submitHandler}>
                <input placeholder="username" name="username" />
                <input type="password" name="password" placeholder="password" />
                <button>Log In</button>
            </form>
            <Footer />
        </>
    );
}

export default LoginForm