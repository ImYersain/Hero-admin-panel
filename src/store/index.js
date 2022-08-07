import { configureStore } from '@reduxjs/toolkit'; 
import heroesSlice from '../components/heroesList/HeroesSlice';
import filtersSlice from '../components/heroesFilters/HeroesFiltersSlice';


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
        heroes: heroesSlice,
        filters: filtersSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;