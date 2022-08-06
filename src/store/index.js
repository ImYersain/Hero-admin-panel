import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import heroesReducer from '../reducers/heroesReducer';
import filtersReducer from '../reducers/filtersReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    heroes: heroesReducer,
    filters: filtersReducer
})

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;