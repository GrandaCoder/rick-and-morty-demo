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
    const character = await getMultipleCharacters([1,183]);
    console.log(character);
}
