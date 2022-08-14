import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { FC } from 'react';
import {useHttp} from '../../hooks/http.hook';



export interface FiltersType {
    name: string,
    className: string
}

interface InitialStateType {
    filters: [] | FiltersType[],
    filterLoadingStatus: string,
    activeFilter: string
}

const initialState:InitialStateType = {
    filters: [],
    filterLoadingStatus: 'idle',
    activeFilter: 'all'
}


export const fetchFilters:any = createAsyncThunk('heroesFilters/fetchFilters', async () => {
    const {request} = useHttp();
    return await request(`http://localhost:3001/filters`);
})


const heroesFiltersSlice = createSlice({
    name:'heroesFilters',
    initialState ,
    reducers: {
        activeFilterChanged: (state:InitialStateType, action: PayloadAction<string>) => {
            state.activeFilter = action.payload
        },
    },

    extraReducers: {
        [fetchFilters.pending]: (state) => {state.filterLoadingStatus = 'loading'},
        [fetchFilters.fulfilled]: (state, action:PayloadAction<FiltersType[]>) => {
            state.filters = action.payload
            state.filterLoadingStatus = 'idle'
        },
        [fetchFilters.rejected]: (state) => {state.filterLoadingStatus = 'error'}
    }
})




const {actions, reducer} = heroesFiltersSlice;

export default reducer;
export const {
    activeFilterChanged
} = actions;