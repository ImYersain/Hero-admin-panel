// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import {useHttp} from '../../hooks/http.hook';


// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle'
// }

// export const fetchHeroes = createAsyncThunk('heroes/fetchHeroes', async () => {
//         const {request} = useHttp();
//         return await request("http://localhost:3001/heroes")
//     }
// )

// const heroesSlice = createSlice({
//     name: 'heroes',
//     initialState,
//     reducers: {
//         heroCreateRequest: (state) => {
//             state.heroesLoadingStatus = 'loading'
//         },
//         heroCreateSuccess: (state, action) => {
//             state.heroes.push(action.payload)
//             state.heroesLoadingStatus = 'idle'
//         },
//         heroCreateError: (state) => {
//             state.heroesLoadingStatus = 'error'
//         },
//         heroDeleteSuccess: (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload)
//             state.heroesLoadingStatus = 'idle'
//         }
//     },

//     extraReducers: {
//         [fetchHeroes.pending]: (state) => {state.heroesLoadingStatus = 'loading'},
//         [fetchHeroes.fulfilled]: (state, action) => {
//             state.heroes = action.payload
//             state.heroesLoadingStatus = 'idle'
//         },
//         [fetchHeroes.rejected]: (state) =>  {state.heroesLoadingStatus = 'error'}
//     }
// })


// const {actions, reducer} = heroesSlice;

// export default reducer;
// export const {
//     heroCreateRequest,
//     heroCreateSuccess,
//     heroCreateError,
//     heroDeleteSuccess
// } = actions;