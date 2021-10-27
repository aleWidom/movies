import React from 'react'
import { obtenerMoviesAction, loadingMovies } from '../../../redux/movieDucks'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Keypad.module.css'
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"


const Keypad = () => {

    const dispatch = useDispatch();
    
    let pageMoviesList = useSelector(state => state.movies.pageMoviesList); 

 const following = () => {
        pageMoviesList++;
        dispatch(obtenerMoviesAction(pageMoviesList));
        dispatch(loadingMovies(true));
    }

    const previous = () => {
        pageMoviesList--;
        dispatch(obtenerMoviesAction(pageMoviesList));
        dispatch(loadingMovies(true));
    } 

    if(pageMoviesList === 1) { 
        return (
            <div className={styles.container}>
                <FaArrowCircleRight onClick={following} className={styles.item}/>
           </div>
        )
     }  else {
        return (
            <div className={styles.container}>
                <FaArrowCircleLeft onClick={previous} className={styles.item}/>
                <FaArrowCircleRight onClick={following} className={styles.item}/>
            </div>
        )
    } 
}

export default Keypad;
