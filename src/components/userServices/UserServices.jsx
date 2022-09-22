/* import useServices from "../../hooks/useServices";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { ServicesList } from "../servicesList/ServicesList";

export const UserServices = ({ id }) => {
  const { services, loading, error } = useServices(id);

  if (loading) return <p>Loading services...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <ServicesList services={services} />;
};
 */