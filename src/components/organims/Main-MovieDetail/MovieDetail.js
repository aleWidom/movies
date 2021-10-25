import { useEffect, /* useState */} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router';
import Loading from '../../atoms/Loading/Loading';
import styles from './MovieDetail.module.css'
import {detailMoviesAction, loadingMovies} from '../../../redux/movieDucks'
import { FaArrowCircleLeft} from "react-icons/fa"
import { Link } from 'react-router-dom';


const MovieDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const route = history.location.pathname;
  console.log(route)

  const movie = useSelector(state => state.movies.movie);
  const loading = useSelector(state => state.movies.loading);
 
  useEffect(() => {
    dispatch(detailMoviesAction(id));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadingMovies(false));
    }, 700);
  }, [loading])

  if (loading) {
    return (<Loading/>)
  }
  else {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <>
      <div className={styles.containerDetail}>
        <img src={imageUrl} alt={movie.overview} className={styles.detailImage} />
        <div className={styles.description}>
          <p><strong>Title: </strong>{movie.title}</p>
          <p><strong>Description: </strong>{movie.overview}</p>
          <Link to="/movies"><FaArrowCircleLeft className={styles.item}/></Link>
       {/*    <p><strong>Genres: </strong>{movie.genres.map((e) => (
            <span key={e.id}>{e.name} - </span>
          ))}</p>  */}
        </div>
       </div>
      </>
    )
  }
}

export default MovieDetail;
