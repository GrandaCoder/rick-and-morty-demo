import {
    getCharactersFromEpisode,
} from '../services/characteres.mjs';

function createTrEpisode(episode) {
    const tr = document.createElement('tr');
    const thIdEpisode = document.createElement('th');
    
    thIdEpisode.setAttribute('scope', 'row');
    thIdEpisode.textContent = episode.id;

    const tdEpisodeName = document.createElement('td');
    tdEpisodeName.textContent = episode.name;

    const tdEpisodeAirDate = document.createElement('td');
    tdEpisodeAirDate.textContent = episode.air_date;

    const tdTemporada = document.createElement('td');
    tdTemporada.textContent = episode.episode;
    
    // const tdPersonajes = document.createElement('td');
    // tdPersonajes.textContent = "episod";

    tr.appendChild(thIdEpisode);
    tr.appendChild(tdEpisodeName);
    tr.appendChild(tdEpisodeAirDate);
    tr.appendChild(tdTemporada);
    // tr.appendChild(tdPersonajes);
    
    return tr;
}

function crearEpisodios(episodes){
    const  tableRows = [];
    episodes.forEach(episode => {
        tableRows.push(createTrEpisode(episode));
    })
    return tableRows;
}

function renderizarEpisodios(episodes, container){
    const tableRows = crearEpisodios(episodes);
    container.innerHTML = '';
    container.append(...tableRows);
}

// parte para  las locaciones 
function createTrLocation(location) {
    const tr = document.createElement('tr');
    const thIdLocation = document.createElement('th');
    thIdLocation.setAttribute('scope', 'row');
    thIdLocation.textContent = location.id;

    const tdLocationName = document.createElement('td');
    tdLocationName.textContent = location.name;

    const tdType = document.createElement('td');
    tdType.textContent = location.type;
    
    const tdDimension = document.createElement('td');
    tdDimension.textContent = location.dimension;

    tr.appendChild(thIdLocation);
    tr.appendChild(tdLocationName);
    tr.appendChild(tdType);
    tr.appendChild(tdDimension);
    
    return tr;
}

export {
    renderizarEpisodios
}