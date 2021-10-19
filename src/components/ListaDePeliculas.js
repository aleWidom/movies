import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {obtenerMoviesAction, siguienteMoviesAction} from '../redux/movieDucks'

const ListaDePeliculas = () => {

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies.array);
  
    const click = () => {
        dispatch(obtenerMoviesAction())
    }

    const siguiente = () => {
        dispatch(siguienteMoviesAction())
    }

    return (
        <div>
            <h2>Lista de Movies</h2>
            <button onClick={click}>Clickeame</button>
            <button onClick={siguiente}>Siguiente</button>
            <ul>
                {
                    movies.map((e)=> {
                        return <li key={e.name}>{e.name}</li>
                    })
                }
            </ul>  
        </div>
    )
}

export default ListaDePeliculas
