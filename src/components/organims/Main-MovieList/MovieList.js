import React, { useEffect } from 'react';
import Loading from '../../atoms/Loading/Loading'
import Card from '../../molecules/Card/Card'
import styles from './MovieList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerMoviesAction, loadingMovies} from '../../../redux/movieDucks'
import Button from '../../atoms/button/Button';

const MovieList = () => {

  const dispatch = useDispatch();

  console.log("hoal")

  const movies = useSelector(state => state.movies.array);
  const loading = useSelector(state => state.movies.loading);
  const page = useSelector(state => state.movies.page);

  console.log(page)


  useEffect(() => {
    dispatch(obtenerMoviesAction(page));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadingMovies(false));
    }, 200);
  }, [loading])


  if (loading) {
   return <Loading />
  } else {
    if (!movies) {
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