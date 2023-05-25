import {
    homeContainer,
    charactersContainer,
    locationsContainer,
    episodesContainer,
    cardsCharacterContainer,
    episodesTable,
    locationsTable
}  from '../utils/getNodes.mjs';

import {
    getAllCharacters,
    getCharactersFromEpisode
} from '../services/characteres.mjs'

import {
    renderizarPersonajes
} from '../components/cards.mjs'

import {
    renderizarEpisodios,
    renderizarLocations
} from '../components/tables.mjs'

import {
    getAllEpisodes
} from '../services/episodes.mjs'

import {
    getAllLocations,
} from '../services/location.mjs'

const containers = {
    home: homeContainer,
    characters: charactersContainer,
    locations: locationsContainer,
    episodes: episodesContainer,
};

function loadPage(page){
    for (const key in containers) {
        containers[key].classList[key === page ? 'remove' : 'add']('d-none');
    }
    navigate(page);
}

function navigate(page){
    switch (page) {
        case "characters":
            cargarPersonajes();
            break;
        case "episodes":
            cargarEpisodios();
            break;
        case "locations":
            cargarLocations();
            break;
        default:
            break;
    }
}

async function cargarPersonajes(){
    const allCharacteresData = await getAllCharacters({page:1});
    const characteres = allCharacteresData.results;
    renderizarPersonajes(characteres,cardsCharacterContainer);
}

async function cargarEpisodios(){
    const allEpisodesData = await getAllEpisodes({page:1});
    const episodios = allEpisodesData.results;
    renderizarEpisodios(episodios,episodesTable);
}

async function cargarLocations(){
    const allLocationsData = await getAllLocations({page:1});
    const locations = allLocationsData.results;
    renderizarLocations(locations,locationsTable);
}


export {
    loadPage
}