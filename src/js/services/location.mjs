import { instance } from "./axios.mjs";

async function getAllLocations(params = {}) {
    const response = await instance.get('/location',{
        params: {
            ...params
        }
    });
    return response.data;
}

async function getLocation(id){
    const response = await instance.get(`/location/${id}`);
    return response.data;
}

async function getMultipleLocations(ids){
    const response = await instance.get(`/location/${ids}`);
    return response.data;
}

async function filterLocations(params){
    const response = await instance.get(`/location/`, {
        params: {
            ...params,
        }
    });
    return response.data;
}

export {
    getAllLocations,
    getLocation,
    getMultipleLocations,
    filterLocations
}