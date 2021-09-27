const initialState = {
    dataStore : [123],
    worksStore : [321],
    aboutMeStore: [],
    contactsStore: [],
    activeFilter: 'alphabet',
    loaded: false,
    closeAll: false,
    favorite: JSON.parse(localStorage.getItem('likeProfile'))
}

function reducer (state = initialState, action) {
    switch(action.type){
        case 'GET_DATA' :
            return {
                ...state,
                dataStore: action.payload
            }
        case 'GET_WORKS':
            return {
                ...state,
                worksStore: action.payload
            }
        case 'ACTIVE_FILTER':
            return{
                ...state,
                activeFilter: action.payload
            }
        case 'GET_ABOUT_ME':
            return {
                ...state,
                aboutMeStore: action.payload
            }
        case 'GET_CONTACTS': 
            return {
                ...state,
                contactsStore: action.payload
            }
        case 'FAVORITE': 
            return {
                ...state,
                favorite: !state.favorite
            }
        default:
        return state
    }
}

export default reducer;