import { useParams } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import useServices from "../../hooks/useServices"
import { Loading } from "../loading/Loading";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import { ServicesList } from "../../components/servicesList/ServicesList";


export const Profile = () => {
    const { id } = useParams();



    const { user, loading, error } = useProfile(id);
    const { services } = useServices();

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;


    console.log(user.avatar);
    //Me falta saber por qué no me pilla UPLOADS_DIR
    return <section>
        <h1>{user.username}</h1>



        <img
            src={`${process.env.REACT_APP_BACKEND}/${process.env.UPLOADS_DIR}/${user.avatar}`}
            alt="avatar"
        />
        <p>
            {user.biography}
        </p>
        <p>
            {user.email}
        </p>

        {/* Me falta filtrar por id de usuario */}
        <ServicesList services={services} />

        <div>{(user.createdAt).toLocaleString()}</div>

    </section>
}