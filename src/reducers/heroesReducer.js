const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle',
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        
        //create heroes
        case 'HEROES_CREATE_REQUEST':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_CREATE_SUCCESS':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_CREATE_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }    

        //delete
        case 'HERO_DELETE_SUCCESS':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload),
                heroesLoadingStatus: 'idle'
            }
        default: return state
    }
}

export default heroesReducer;