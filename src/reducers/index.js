const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
    filteredHeroes: []
}

const reducer = (state = initialState, action) => {
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
                filteredHeroes: state.activeFilter === 'all' ? 
                                action.payload : 
                                action.payload.filter(item => item.element === state.activeFilter),
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        
        //filter
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
                filteredHeroes: action.payload === 'all'?
                    state.heroes :
                    state.heroes.filter(item => item.element === action.payload)
            }

        //create heroes
        case 'HEROES_CREATE_REQUEST':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_CREATE_SUCCESS':
            let newCreatedHeroList = [...state.heroes, action.payload];
            return {
                ...state,
                heroes: newCreatedHeroList,
                heroesLoadingStatus: 'idle',
                filteredHeroes: state.activeFilter === 'all' ? 
                                newCreatedHeroList :
                                newCreatedHeroList.filter(item => item.element === state.activeFilter) 
            }
        case 'HEROES_CREATE_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }    

        //delete
        case 'HERO_DELETE_SUCCESS':
            const newHeroesList = state.heroes.filter(item => item.id !== action.payload)
            return {
                ...state,
                heroes: newHeroesList,
                heroesLoadingStatus: 'idle',
                filteredHeroes: state.activeFilter === 'all' ? 
                                newCreatedHeroList :
                                newCreatedHeroList.filter(item => item.element === state.activeFilter)
            }
        default: return state
    }
}

export default reducer;