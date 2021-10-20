import React, { useEffect } from 'react';
import Loading from '../../atoms/Loading/Loading'
import Card from '../../molecules/Card/Card'
import styles from './MovieList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerMoviesAction, loadingPage } from '../../../redux/movieDucks'

const MovieList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerMoviesAction())
  }, [])


  const movies = useSelector(state => state.movies.array);
  let loading = useSelector(state => state.movies.loading);

  if (loading) {
    <Loading />
    dispatch(loadingPage())
  } else {
    if (movies.length === 0) {
      return <h2>No encontramos películas que coincidan con su búsqueda</h2>
    } else {
      return (
        <>
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