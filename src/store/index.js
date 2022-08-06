import { configureStore } from '@reduxjs/toolkit'; 
import heroesReducer from '../reducers/heroesReducer';
import filtersReducer from '../reducers/filtersReducer';


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
        heroes: heroesReducer,
        filters: filtersReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;