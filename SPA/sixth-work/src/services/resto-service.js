export default class RestoService {
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url} receieved ${res.status}`)
        }
        return await res.json()
    }
    
    async getMenuItems () {
        return await this.getResource(`/menu/`)
    }

    postCart (body) {
        fetch(`${this._apiBase}/cart/`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type':'application/json'
            }
        }).then( res => res.json())
        .then( res => console.log(res))
      
    }
    
}