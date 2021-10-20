
import React from 'react'
import styles from './Search.module.css'
import { useDispatch } from 'react-redux'
import { searchMoviesAction, obtenerMoviesAction } from '../../../redux/movieDucks'

const Search = () => {

    const dispatch = useDispatch();

    const handleChange = (e) => {
        if(e.target.value === "") {
            dispatch(obtenerMoviesAction())
        } else {
            dispatch(searchMoviesAction(e.target.value))
        }
    }

    return (
        <>
            <form className={styles.form}>
                <input type='text' className={styles.input} placeholder='Búsqueda' onChange={handleChange}></input>
            </form>
        </>
    )
}

export default Search;

