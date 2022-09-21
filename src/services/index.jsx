export const getAllServicesService = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}/services`);


    const json = await response.json();

    console.log(json.data);
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;

};
