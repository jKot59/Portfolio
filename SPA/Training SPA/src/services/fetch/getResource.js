export default class getResource {
    _apiBase = 'http://localhost:3000'

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok) {
            throw new Error(`Could not find ${url} status ${res.status}`)
        }

        return await res.json()
    }

    async getData() {
        return await this.getResource(`/data/`)
    }
    async getWorks() {
         return await this.getResource(`/works/`)
    }
    async getAboutMe() {
         return await this.getResource(`/aboutMe/`)
    }
    async getContacts() {
         return await this.getResource(`/contacts/`)
    }
}

