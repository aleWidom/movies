import axios from "axios";
//constantes
//tiene nuestro estado que va a parti limpiecito
const dataInicial = {
    array: [],
    offset: 0,
    loading: true
}

//reducer (modificaria el state, en este caso la dataInicial)
export default function movieReducer (state = dataInicial, action) {
    switch (action.type) {
        case GET_OBTENER_MOVIES_EXITO:
            return {...state, array: action.payload.array, loading: action.payload.loading};
            break;
        case GET_OBTENER_MOVIES_SEARCH:
            return {...state, array: action.payload};
            break;
        case GET_OBTENER_MOVIES_SEARCH:
            return {...state, loading: action.payload};
            break;
        default:
            return state;
            break;
    }
}


//types
const GET_OBTENER_MOVIES_EXITO = 'GET_OBTENER_MOVIES_EXITO';
const GET_OBTENER_MOVIES_SEARCH = 'GET_OBTENER_MOVIES_SEARCH';

/* const GET_OBTENER_MOVIES_SIGUIENTE_EXITO = 'GET_OBTENER_MOVIES_SIGUIENTE_EXITO'; */


//actions (para poder activar el reducer se usa el dispatch)
export const obtenerMoviesAction = () => async (dispatch, getState) => {
    
    //getState lee la tienda(el store)
 /*    const offset = getState().movies.offset; */

    try {
       const res = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
          "Content-Type": "application/json;charset=utf-8",
        }
      })
       dispatch(
           {
               type: GET_OBTENER_MOVIES_EXITO,
               payload: {
                   array: res.data.results,
                   loading: false
               }
           }
       )
    } catch (error) {
        console.log(error)
    }
}


export const searchMoviesAction = (search) => async (dispatch, getState) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}`, {
         headers: {
           Authorization:
             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
           "Content-Type": "application/json;charset=utf-8",
         }
       })
        dispatch(
            {
                type: GET_OBTENER_MOVIES_SEARCH,
                payload: res.data.results
            }
        )
     } catch (error) {
         console.log(error)
     } 
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