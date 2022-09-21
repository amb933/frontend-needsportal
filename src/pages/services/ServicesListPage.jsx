import { Link } from "react-router-dom";
import { ServicesList } from "../../components/servicesList/ServicesList";
import useServices from "../../hooks/useServices"

export const ListServicesPage = () => {
    const { services, loading, error } = useServices();

    if (loading) return <p>Reload services</p>
    if (error) return <p>{error}</p>

    return <>
        <button >
            <Link to={"/newservice"}>New Service</Link>

        </button>
        <ServicesList services={services} />
    </>
}