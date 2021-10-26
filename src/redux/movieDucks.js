import {api} from "../config/api";

//constantes
//tiene nuestro estado que va a parti limpiecito
const dataInicial = {
    array: [],
    loading: true,
    movie: {},
    pageMoviesList: 1,
    keypad: true,
}

//reducer (modificaria el state, en este caso la dataInicial)
export default function movieReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_OBTENER_MOVIES_EXITO:
            return { ...state, array: action.payload.array, pageMoviesList: action.payload.pageMoviesList, keypad: action.payload.keypad};
        case GET_OBTENER_MOVIES_SEARCH:
            return { ...state, array: action.payload, keypad: action.keypad};
        case GET_OBTENER_MOVIES_DETAIL:
            return { ...state, movie: action.payload.movie,/*  loading: action.payload.loading */ };
        case LOADING_SPINNER:
            return { ...state, loading: action.payload.loading};
        default:
            return state;
    }
}


//types
const GET_OBTENER_MOVIES_EXITO = 'GET_OBTENER_MOVIES_EXITO';
const GET_OBTENER_MOVIES_SEARCH = 'GET_OBTENER_MOVIES_SEARCH';
const GET_OBTENER_MOVIES_DETAIL = 'GET_OBTENER_MOVIES_DETAIL';
const LOADING_SPINNER = 'LOADING_SPINNER';

/* const GET_OBTENER_MOVIES_SIGUIENTE_EXITO = 'GET_OBTENER_MOVIES_SIGUIENTE_EXITO'; */





//actions (para poder activar el reducer se usa el dispatch)
export const obtenerMoviesAction = (page) => async (dispatch, getState) => {

    //getState lee la tienda(el store)
    /*    const offset = getState().movies.offset; */
    try {
        const res = await api.get(`discover/movie?page=${page}`)
        dispatch(
            {
                type: GET_OBTENER_MOVIES_EXITO,
                payload: {
                    array: res.data.results,
                    pageMoviesList: page,
                    keypad: true
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const searchMoviesAction = (search) => async (dispatch, getState) => {
    try {
        const res = await api.get(`search/movie?query=${search}`)
        dispatch(
            {
                type: GET_OBTENER_MOVIES_SEARCH,
                payload: res.data.results,
                keypad: false
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const detailMoviesAction = (id) => async (dispatch, getState) => {
    try {
        const res = await api.get(`movie/${id}`)
        dispatch(
            {
                type: GET_OBTENER_MOVIES_DETAIL,
                payload: {
                    movie: res.data,
                    /*  loading: false  */
                }
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const loadingMovies = (boolean) => async (dispatch, getState) => {
    dispatch(
        {
            type: LOADING_SPINNER,
            payload: {
                loading: boolean
            }
        }
    )
}







/* export const siguienteMoviesAction = () => async (dispatch, getState) => {

    console.log(getState())

    //primera alternativa
    const offset = getState().movies.offset;
    const siguiente = offset + 20;

    try {
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
       dispatch(
           {
               type: GET_OBTENER_MOVIES_SIGUIENTE_EXITO,
               payload: {
                   array: res.data.results,
                   offset: siguiente
               }
           }
       )
    } catch (error) {
        console.log(error)
    }
}
 */