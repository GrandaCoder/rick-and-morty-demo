import {fillModal} from './modal.mjs';

/**
 * Creates a card element to display information about a character.
 *
 * @param {Object} personaje - An object containing character information.
 * @param {string} maxWidth - The maximum width of the card.
 * @return {HTMLDivElement} A div element representing the top-level card.
 */
function createCard(personaje = {}, maxWidth = '540px') {
  const col = document.createElement('div');
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardBody = document.createElement('div');
  const cardTitle = document.createElement('h5');
  const cardTextStatus = document.createElement('p');
  const cardTextGender = document.createElement('p');
  const cardLink = document.createElement('a');

  // Add classes and attributes
  col.classList.add('col');
  card.classList.add('card', 'mb-3', 'text-bg-dark');
  card.style.maxWidth = maxWidth;
  img.classList.add('img-fluid', 'rounded-start');
  img.src = personaje.image;
  img.alt = personaje.name;
  cardBody.classList.add('card-body');
  cardTitle.classList.add('card-title');
  cardLink.classList.add('btn', 'btn-primary');

  // Set attributes
  cardLink.setAttribute('type', 'button');
  cardLink.setAttribute('data-bs-toggle', 'modal');
  cardLink.setAttribute('data-bs-target', '#modalCard');

  // Set text content
  cardTitle.textContent = personaje.name;
  cardTextStatus.textContent = `Status: ${personaje.status}`;
  cardTextGender.textContent = `Genero: ${personaje.gender}`;
  cardLink.textContent = 'Show detailed info';

  // Add event listener to the link
  cardLink.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Detailed info button clicked!');
     fillModal(personaje);
  });

  // Append elements
  cardBody.append(cardTitle, cardTextStatus, cardTextGender, cardLink);
  card.append(img, cardBody);
  col.appendChild(card);

  return col;
}

/**
 * Creates an array of cards for a given array of characters.
 *
 * @param {Array} personajes - An array of character objects.
 * @return {Array} An array of card objects.
 */
function crearCardsPersonajes(personajes){
    const tarjetas = [];
    personajes.forEach(personaje => {
      tarjetas.push(createCard(personaje));
    })
    return tarjetas
}


/**
 * Renders the given array of personajes into the specified container by creating 
 * cards for each personaje and appending them to the container.
 *
 * @param {Array} personajes - The array of personajes to be rendered.
 * @param {HTMLElement} contenedor - The container element into which the personajes 
 * will be rendered.
 */
function renderizarPersonajes(personajes, contenedor){
    const tarjetas = crearCardsPersonajes(personajes);
    contenedor.innerHTML = '';
    contenedor.append(...tarjetas);
}

export { renderizarPersonajes };