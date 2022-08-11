import { configureStore } from '@reduxjs/toolkit'; 
import filtersSlice from '../components/heroesFilters/HeroesFiltersSlice';
import {apiSlice} from '../api/apiSlice';


// const rootReducer = combineReducers({
//     heroes: heroesReducer,
//     filters: filtersReducer
// })

// const store = createStore(rootReducer,                    вариант создания стора на чистом redux (снизу на toolkit-х)
//     compose(
//         applyMiddleware(ReduxThunk),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     ));


const store = configureStore({
    reducer: {
        filters: filtersSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;