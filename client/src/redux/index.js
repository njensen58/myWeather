import { combineReducers, createStore, applyMiddleware } from 'redux';

import user from './auth';

const rootReducer = combineReducers({
    user
})


export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
