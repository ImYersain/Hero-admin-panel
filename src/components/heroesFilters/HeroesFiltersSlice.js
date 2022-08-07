import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}


const heroesFiltersSlice = createSlice({
    name:'heroesFilters',
    initialState,
    reducers: {
        filtersFetching: (state) => {
            state.filtersLoadingStatus = 'loading'
        },
        filtersFetched: (state, action) => {
            state.filters = action.payload
            state.filtersLoadingStatus = 'idle'
        },
        filtersFetchingError: (state) => {
            state.filtersLoadingStatus = 'error'
        },
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload
        },
    }
})

const {actions, reducer} = heroesFiltersSlice;

export default reducer;
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    activeFilterChanged
} = actions;