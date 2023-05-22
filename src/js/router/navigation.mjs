import {
    homeContainer,
    charactersContainer,
    locationsContainer,
    episodesContainer,
    cardsCharacterContainer
}  from '../utils/getNodes.mjs';

import {
    getAllCharacters
} from '../services/characteres.mjs'

import {
    renderizarPersonajes
} from '../components/cards.mjs'

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
     cargarPersonajes();
}

async function cargarPersonajes(){
    const allCharacteresData = await getAllCharacters({page:1});
    const characteres = allCharacteresData.results;
    renderizarPersonajes(characteres,cardsCharacterContainer);
}

export {
    loadPage
}