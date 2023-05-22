import{
    loadPage
} from './router/navigation.mjs'

import {
    getHash
} from './utils/hashControler.mjs'

window.addEventListener('DOMContentLoaded', () => {
        main();
})

window.addEventListener("hashchange", function() {
    main();
  });


async function main() {
    const paginaActual = getHash() || 'home';
    loadPage(paginaActual);
}
