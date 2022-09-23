import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import '../components.css';

export const Auth = () => {

    return <ul class="auth">
        <li>
            <Link to={"/register"}>Register</Link>
        </li>
        <li>
            <Link to={"/login"}>Login</Link>
        </li>
    </ul>
}