import { Link } from "react-router-dom";
import './auth.css';

export const Auth = () => {
    return <ul className="auth">
        <li>
            <Link to={"/register"}>Register</Link>
        </li>
        <li>
            <Link to={"/login"}>Login</Link>
        </li>
    </ul>
}