import { useParams } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import { Loading } from "../loading/Loading";
import { ErrorMessage } from "../errorMessage/ErrorMessage";


export const Profile = () => {
    const { id } = useParams();

    console.log(id);

    const { user, loading, error } = useProfile(id);
    console.log(user.username);

    if (loading) return <Loading />;
    if (error) return <ErrorMessage message={error} />;

    return <section>
        <h1>{user.username}</h1>

        <img src="https://yt3.ggpht.com/ytc/AMLnZu-35vqsYjGxr2ap7BTWjPHKC1sFUsFLsDAp4FhDnQ=s900-c-k-c0x00ffffff-no-rj" width={100} alt="avatar"></img>
        <p>
            {user.biography}
        </p>
        <p>
            {user.email}
        </p>
        <ul>
            <li>Lista servicios</li>
        </ul>
        <div>{user.createdAt}</div>

    </section>
}