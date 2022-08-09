import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

export const fetchFilters = createAsyncThunk('heroesFilters/fetchFilters', async () => {
    const {request} = useHttp();
    return await request(`http://localhost:3001/filters`);
})


const heroesFiltersSlice = createSlice({
    name:'heroesFilters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => {
            state.activeFilter = action.payload
        },
    },

    extraReducers: {
        [fetchFilters.pending]: (state) => {state.filtersLoadingStatus = 'loading'},
        [fetchFilters.fulfilled]: (state, action) => {
            state.filters = action.payload
            state.filtersLoadingStatus = 'idle'
        },
        [fetchFilters.rejected]: (state) => {state.filtersLoadingStatus = 'error'}
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