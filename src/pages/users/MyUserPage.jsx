import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ErrorMessage } from "../../components/errorMessage/ErrorMessage";
import { UserServices } from "../../components/userServices/UserServices";


export const MyUserPage = () => {

    const { user } = useContext(AuthContext);


    return user ? <>
        <h1>
            {user.user.username}

        </h1>

        {user.user.avatar ? <img
            src={`${process.env.REACT_APP_BACKEND}/uploads/${user.user.avatar}`}
            alt="avatar"
            width={100}
        /> : "Pon una fotito hombre"}

        <p>
            {user.user.biography}
        </p>
        <p>
            {user.user.email}
        </p>
        <button>Edit user</button>
    
        {user.user.id ?
            <ul>
                <UserServices idUser={user.user.id}></UserServices>
            </ul>
            : "No hay servicios creados por este usuario"}
        <div>{new Date((user.user.createdAt)).toLocaleString()}</div>
    </> : <ErrorMessage />
}