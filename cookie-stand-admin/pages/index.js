import styles from '../styles/Home.module.css';
import CookieStandAdmin from "../components/cookiestandadmin";
import LoginForm from "../components/loginform";
import { useAuth } from "../contexts/auth";

export const Index = () => {

  const { user, login, logout } = useAuth();

  const loginHandler = (newUser) => {
    console.log(newUser)
    login(newUser.username, newUser.password)
  }
  return (
    <>
      {user ?
        < CookieStandAdmin user={user} logout={logout} /> : <LoginForm onLogin={loginHandler} />
      }
    </>
  )

}

export default Index; 
