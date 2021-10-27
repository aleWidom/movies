import React, { useEffect } from 'react';
import Loading from '../../atoms/Loading/Loading'
import Card from '../../molecules/Card/Card'
import styles from './MovieList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerMoviesAction, loadingMovies } from '../../../redux/movieDucks'
import Keypad from '../../atoms/Keypad/Keypad';


const MovieList = () => {

  const dispatch = useDispatch();

  const movies = useSelector(state => state.movies.array);
  const loading = useSelector(state => state.movies.loading);
  const page = useSelector(state => state.movies.pageMoviesList);
  const keypad = useSelector(state => state.movies.keypad);

  console.log(movies)

  useEffect(() => {
    dispatch(obtenerMoviesAction(page));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadingMovies(false));
    }, 700);
  }, [loading])

  if (loading) {
    return <Loading />
  } else {
    if (movies.length === 0) {
      return <h3 className={styles.parrafo}>We couldn't find movies that match your search.</h3>
    } else if(keypad) {
      return (
        <>
          {/*  <h3>Discover</h3> */}
          <div className={styles.movieList} >
            {movies.filter((movie) => (movie.poster_path)).map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
          <Keypad />
        </>
      )
    } else {
      return (
        <>
          {/*  <h3>Discover</h3> */}
          <div className={styles.movieList} >
            {movies.filter((movie) => (movie.poster_path)).map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )
    }
  }
}

export default MovieList;