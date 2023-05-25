import { instance } from "./axios.mjs";

async function getEpisode(id){
    const response = await instance.get(`/episode/${id}`);
    return response.data;
}

async function getAllEpisodes(){
    const response = await instance.get('/episode');
    return response.data;
}

async function getMultipleEpisodes(ids){
    const response = await instance.get(`/episode/${ids}`);
    return response.data;
}

async function filterEpisodes(params){
    const response = await instance.get(`/episode/`, {
        params: {
            ...params,
        }
    });
    return response.data;
}

export {
    getEpisode,
    getAllEpisodes,
    getMultipleEpisodes,
    filterEpisodes
}