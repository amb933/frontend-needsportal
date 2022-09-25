import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import '../components.css';

export const Auth = () => {

    const { user, logout } = useContext(AuthContext);

    return user ? (<section>
        Logged in as <Link to={`/users`}>{user.user.username}</Link>{" "}

        <button onClick={() => logout()}>Logout</button>
    </section>) : (
        <ul className="auth">
            <li>
                <Link to={"/register"}>Register</Link>
            </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
        </ul>)
}