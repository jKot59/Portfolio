const _base = "https://gateway.marvel.com:443/v1/public/"
const _apikey = "apikey=0ff276e224a3610cd093d5ad762baa36"

async function getResource (url) {
    const res = await fetch(url)

    if (!res.ok) {
        throw new Error(`Fetch to ${url} has status ${res.status}`)
    }

    return await res.json();

}

async function getAllCharacters (amountCards = 9) {
    const res = await getResource(`${_base}characters?limit=9&offset=${amountCards}&${_apikey}`)
    return res.data.results.map(_transformCharacter)
}
async function getCharacter (id) {
    const res = await getResource(`${_base}characters/${id}?${_apikey}`)
    return _transformCharacter(res.data.results[0])
}

function _transformCharacter (char) {
    return {
        id: char.id,
        name: char.name,
        descr:  char.descr,
        thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
        homepage: char.urls[0].url,
        wiki: char.urls[1].url,
        comics: char.comics.items
    }
}

export {getAllCharacters, getCharacter, _transformCharacter}