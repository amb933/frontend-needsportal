import { Auth } from "../auth/Auth"
import { TypeServices } from "../typeServices/TypeServices"
import '../components.css';
import { Link } from "react-router-dom";


export const Header = () => {
    return <header>
        <Link to={'/'}>
            <h1 class="title">DooIt</h1>
        </Link>
        <nav class="cont-nav">
            <img src="http://cdn.onlinewebfonts.com/svg/img_218286.png" alt="Icono" class="logo" />
            <input type="text" placeholder="Search a service"></input>
            <button>Search</button>
            <TypeServices />
            <Auth />
        </nav>
    </header>
}

