import {
    homeContainer,
    charactersContainer,
    locationsContainer,
    episodesContainer,
    cardsCharacterContainer
}  from '../utils/getNodes.mjs';

import {
    getAllCharacters,
    getCharactersFromEpisode
} from '../services/characteres.mjs'

import {
    renderizarPersonajes
} from '../components/cards.mjs'

import {
    renderizarEpisodios
} from '../components/tables.mjs'

import {
    getAllEpisodes
} from '../services/episodes.mjs'

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


export {
    loadPage
}