import { instance } from "./axios.mjs";

async function getCharacter(id){
    const response = await instance.get(`/character/${id}`);
    return response.data;
}

async function getAllCharacters(){
    const response = await instance.get('/character');
    return response.data;
}

async function getMultipleCharacters(ids){
    const response = await instance.get(`/character/${ids}`);
    return response.data;
}

async function filterCharacters(params){
    const response = await instance.get(`/character/`, {
        params: {
            ...params,
        }
    });
    return response.data;
}

export {
    getCharacter,
    getAllCharacters,
    getMultipleCharacters,
    filterCharacters
}