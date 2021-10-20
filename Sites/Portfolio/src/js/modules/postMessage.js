async function postMessage (url, form) {
    const res = await fetch(url, {
        method: 'POST',
        body: new FormData(form)
    })

    if(!res.ok) {
        throw new Error(`Couldn't fetch ${url}, status ${res.status}`)
    }
}

export default postMessage