import { Service } from "../service/Service"

export const ServicesList = ({ services }) => {
    return services.length ? (<ul>
        {services.map((service) => <Service key={service.id} service={service}></Service>)}
    </ul>
    ) : (<p>There are not services created</p>)
}