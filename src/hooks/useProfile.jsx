import { useEffect, useState } from "react";
import { getProfileService } from "../services";

export const useProfile = (id) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadUser = async () => {

            try {
                setLoading(true);
                const data = await getProfileService(id);


                setUser(data.user);

                console.log("Hook", data.user);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            };
        };

        loadUser();
    }, [id]);

    return { user, error, loading };
};

export default useProfile;