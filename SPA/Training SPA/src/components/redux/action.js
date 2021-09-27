const getData1 = (getData) => {
    return {
        type: 'GET_DATA',
        payload: getData
    }
}
const getWorks1 = (getWorks) => {
    return{
        type: 'GET_WORKS',
        payload: getWorks
    }
}
const activeFilter1 = (activeFilter) => {
    return {
        type: 'ACTIVE_FILTER',
        payload: activeFilter
    }
}
const getAboutMe1 = (getAboutMe) => {
    return {
        type: 'GET_ABOUT_ME',
        payload: getAboutMe
    }
}

const getContacts1 = (contacts) => {
    return {
        type: 'GET_CONTACTS',
        payload: contacts
    }
}
const getFavorite = () => {
    return {
        type: 'FAVORITE',
    }
}


export { getData1, getWorks1, activeFilter1, getAboutMe1, getContacts1, getFavorite }