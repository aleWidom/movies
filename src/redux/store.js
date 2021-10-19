import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//siempre hay que traer los reducers de todos los "patitos" ej users a continuación
import movieReducer from './movieDucks';

//a futuro lo unico que vamos a modificar es esta constante
const rootReducer = combineReducers(
    {
        movies: movieReducer,
        /*users: usersReducer*/
    }
)

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}
