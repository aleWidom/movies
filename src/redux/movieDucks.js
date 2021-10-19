import axios from "axios";
//constantes
//tiene nuestro estado que va a parti limpiecito
const dataInicial = {
    array: [],
    offset: 0
}

//reducer (modificaria el state, en este caso la dataInicial)
export default function movieReducer (state = dataInicial, action) {
    switch (action.type) {
        case GET_OBTENER_MOVIES_EXITO:
            return {
                ...state, array: action.payload
            }
            break;
            case GET_OBTENER_MOVIES_SIGUIENTE_EXITO:
            return {
                ...state, array: action.payload.array, offset: action.payload.offset
            }
            break;
        default:
            return state
            break;
    }
}

//types
const GET_OBTENER_MOVIES_EXITO = 'GET_OBTENER_MOVIES_EXITO';
const GET_OBTENER_MOVIES_SIGUIENTE_EXITO = 'GET_OBTENER_MOVIES_SIGUIENTE_EXITO';


//actions (para poder activar el reducer se usa el dispatch)
export const obtenerMoviesAction = () => async (dispatch, getState) => {
    
    //getState lee la tienda(el store)
    const offset = getState().movies.offset;

    console.log(getState())

    try {
       const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
       dispatch(
           {
               type: GET_OBTENER_MOVIES_EXITO,
               payload: res.data.results
           }
       )
    } catch (error) {
        console.log(error)
    }
}


export const siguienteMoviesAction = () => async (dispatch, getState) => {

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
