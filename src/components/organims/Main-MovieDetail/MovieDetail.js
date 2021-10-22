import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import Loading from '../../atoms/Loading/Loading';
import styles from './MovieDetail.module.css'
import {detailMoviesAction} from '../../../redux/movieDucks'


const MovieDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const movie = useSelector(state => state.movies.movie);
  const loading = useSelector(state => state.movies.loading);

  useEffect(() => {
    dispatch(detailMoviesAction(id))
  }, [])

  if (loading) {
    return (<Loading/>)
  }
  else {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <div className={styles.containerDetail}>
        <img src={imageUrl} alt={movie.overview} className={styles.detailImage} />
        <div className={styles.description}>
          <p><strong>Title: </strong>{movie.title}</p>
          <p><strong>Description: </strong>{movie.overview}</p>
       {/*    <p><strong>Genres: </strong>{movie.genres.map((e) => (
            <span key={e.id}>{e.name} - </span>
          ))}</p>  */}
        </div>
      </div>
    )
  }
}

export default MovieDetail;
