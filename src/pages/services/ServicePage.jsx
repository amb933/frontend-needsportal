import { useParams } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { ErrorMessage } from "../../../src/components/errorMessage/ErrorMessage"
import { Service } from "../../components/service/Service";


export const ServicePage = () => {

    const { id } = useParams();
    const { service, loading, error } = useService(id);

    if (loading) return (<p>cargando UN SOLO servcicio....</p>);
    if (error) return (<ErrorMessage message={error} />)



    return (


        <section>

            <h1>Service from {service.username}</h1>


            <Service service={service} />


        </section>

    )

}









