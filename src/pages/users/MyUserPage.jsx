import { useContext, /* useState */ } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ErrorMessage } from "../../components/errorMessage/ErrorMessage";
import { UserServices } from "../../components/userServices/UserServices";

export const MyUserPage = () => {

    const { user } = useContext(AuthContext);
    /*     const [biography, setBiograhy] = useState(undefined);
        const [avatar, setAvatar] = useState(undefined); */

    /* const editUser = () => {


        <>
            <li>
                <label htmlFor="biography">Actualiza tu biografía</label>
                <input
                    type="textare"
                    name="biography"
                    id="biography"
                    required
                    onChange={(e) => setBiograhy(e.target.biography)}
                    placeholder="Actualiza tu biografía"
                />
            </li>

            <li>
                <input type="file" name="file"
                    onChange={(e) => setAvatar(e.target.value)}
                />
            </li>

        </>

    } */


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
        {/* <button onClick={() => editUser()}>Edit user</button> */}
        <button>Edit user</button>

        {user.user.id ?
            <ul>
                <UserServices idUser={user.user.id}></UserServices>
            </ul>
            : "No hay servicios creados por este usuario"}
        <div>{new Date((user.user.createdAt)).toLocaleString()}</div>
    </> : <ErrorMessage />
}