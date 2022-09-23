export const getAllServicesService = async () => {

    const response = await fetch(`${process.env.REACT_APP_BACKEND}/services`);

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;



};


export const registerUserService = async ({ username, email, password }) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    }); const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
};

export const getProfileService = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${id}`);

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const logInUserService = async ({ email, password }) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const getUserDataService = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`);

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const getMyDataService = async (token) => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};