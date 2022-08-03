export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

//filter    

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING',
    }
}
export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}
export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}
export const activeFilterChanged = (filter) => {
    return {
        type: 'ACTIVE_FILTER_CHANGED',
        payload: filter
    }
}

//create

export const heroCreateRequest = () => {
    return {
        type: 'HEROES_CREATE_REQUEST',
    }
}

export const heroCreateSuccess = (hero) => {
    return {
        type: 'HEROES_CREATE_SUCCESS',
        payload: hero
    }
}

export const heroCreateError = () => {
    return {
        type: 'HEROES_CREATE_ERROR',
    }
}


//delete

export const heroDeleteSuccess = (id) => {
    return {
        type: 'HERO_DELETE_SUCCESS',
        payload: id
    }
}
