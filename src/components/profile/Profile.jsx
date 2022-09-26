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



    return <section>
        <h1>{user.username}</h1>

        console.log(user.avatar);
        {/* Por qué funciona así y no `${process.env.REACT_APP_BACKEND}/uploads/${user.avatar}` */}
        <img
            src={`${process.env.REACT_APP_BACKEND}/uploads/${user.avatar}`}
            alt="avatar"
            width={100}
        />

        <p>
            {user.biography}
        </p>
        <p>
            {user.email}
        </p>
        {/* Me falta filtrar por id de usuario */}
        <ServicesList services={services} id={user.id} key={services.idUser} />


        <div>{new Date((user.createdAt)).toLocaleString()}</div>

    </section>
}