function getHash() {
    return window.location.hash.slice(1);
}

function setHash(id) {
    window.location.hash = `#${id}`;
}
  

export { getHash, setHash };