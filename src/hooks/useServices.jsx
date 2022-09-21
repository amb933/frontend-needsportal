import { useEffect, useState } from "react";
import { getAllServicesService } from "../services";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {

        const loadServices = async () => {
            try {
                setLoading(true);

                const data = await getAllServicesService();
                setServices(data.services);

            } catch (error) {
                setError(error.message)

            } finally {
                setLoading(false);
            }

        }
        loadServices()
    }, [])

    return { services, loading, error }


}

export default useServices;