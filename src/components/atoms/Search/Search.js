
import React from 'react'
import styles from './Search.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { searchMoviesAction, obtenerMoviesAction } from '../../../redux/movieDucks'

const Search = () => {

    const dispatch = useDispatch();

    const page = useSelector(state => state.movies.pageMoviesList);

    const handleChange = (e) => {
        if(e.target.value === "" ) {
            dispatch(obtenerMoviesAction(page))
        }  
        else {
            dispatch(searchMoviesAction(e.target.value))
        }
    }

    return (
        <>
            <form className={styles.form}>
                <input type='text' className={styles.input} placeholder='Search' onChange={handleChange}></input>
            </form>
        </>
    )
}

export default Search;

