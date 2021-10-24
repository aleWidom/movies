import React from 'react'
import { obtenerMoviesAction } from '../../../redux/movieDucks'
import { useDispatch, useSelector } from 'react-redux'


const Button = () => {

    const dispatch = useDispatch();

    const loading = useSelector(state => state.movies.loading);
    let page = useSelector(state => state.movies.page);


    const following = () => {
        page++;
        dispatch(obtenerMoviesAction(page));
    }

    const previous = () => {
        page--
        dispatch(obtenerMoviesAction(page));
    }

    if(page === 1) {
        return (
            <div>
                <button onClick={following}>Following</button>
                
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={previous}>Previous</button>
                <button onClick={following}>Following</button>
            </div>
        )
    }

    
}

export default Button
