import {
    getCharacter,
    getAllCharacters,
    getMultipleCharacters,
    filterCharacters
} from './services/characteres.mjs';


window.addEventListener('DOMContentLoaded', () => {
        main();
})

async function main() {
    const character = await filterCharacters({name: 'rick'});
    console.log(character);
}
