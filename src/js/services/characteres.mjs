import { instance } from "./axios.mjs";

async function getCharacter(id){
    const response = await instance.get(`/character/${id}`);
    return response.data;
}

async function getAllCharacters(params = {}){
    const response = await instance.get('/character', {
        params: {
            ...params
        }
    });
    return response.data;
}

// You can get multiple characters by adding an array of ids as parameter: /character/[1,2,3]
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

 function getCharactersFromEpisode(personajesFromURL){
    const personajesDelEpisodio = [];
    for (const personaje in personajesFromURL) {
        const id = personajesFromURL[personaje].split("/").pop(); // Extrae el ID del personaje de la URL
        personajesDelEpisodio.push(getCharacter(id));
    }
    console.log("fin episodio")

    return personajesDelEpisodio;
}

export {
    getCharacter,
    getAllCharacters,
    getMultipleCharacters,
    filterCharacters,
    getCharactersFromEpisode
}