const modalTdName = document.querySelector('#modalTdName');
const modalTdStatus = document.querySelector('#modalTdStatus');
const modalTdSpecies = document.querySelector('#modalTdSpecies');
const modalTdOrigin = document.querySelector('#modalTdOrigin');
const modalTdLocation = document.querySelector('#modalTdLocation');
const modalTdEpisodes = document.querySelector('#modalTdEpisodes');
const modalImg = document.querySelector('#modalImg');


function fillModal(personaje = {}) {
    modalImg.src = personaje.image;
    modalTdName.textContent = personaje.name;
    modalTdStatus.textContent = personaje.status;
    modalTdSpecies.textContent = personaje.species;
    modalTdOrigin.textContent = personaje.origin.name;
    modalTdLocation.textContent = personaje.location.name;
    modalTdEpisodes.textContent = personaje.episode.length;
}

export {fillModal};