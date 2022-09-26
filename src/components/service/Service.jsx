import './service.css';
import { Link } from "react-router-dom";


export const Service = ({ service }) => {
    return (
        <article>

            {/* De la carpeta homepage */}
            <p>Va a ser etiqueta imagen con la imagen del logo que tengamos del servicio</p>
            <h2>{service.title}</h2>
            <h3>{service.category} - {service.username}</h3>
            <p>{service.description}</p>


            <p>
                By {service.username} on{''}
                <Link to={`/services/${service.id}`}>
                    {new Date(service.createdAt).toLocaleString()}
                </Link>
            </p>




            {/* Esto sirve para el */}
            {/* {service.file ? (
           <img src={`${process.env.REACT_APP_BACKEND}/uploads/${service.file}`} alt={service.title}/>) : null} */}
        </article>
    )
}