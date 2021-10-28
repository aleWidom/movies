import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router';
import Loading from '../../atoms/Loading/Loading';
import styles from './MovieDetail.module.css'
import { detailMoviesAction, loadingMovies } from '../../../redux/movieDucks'
import { FaArrowCircleLeft } from "react-icons/fa"
import { Link } from 'react-router-dom';


const MovieDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const route = history.location.pathname;
  const movie = useSelector(state => state.movies.movie);
  const loading = useSelector(state => state.movies.loading);

  console.log(movie)

  useEffect(() => {
    dispatch(detailMoviesAction(id));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      dispatch(loadingMovies(false));
    }, 1000);
  }, [loading])

  if (loading) {
    return (<Loading />)
  }
  else {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <>
        <div className={styles.containerDetail}>
          <img src={imageUrl} alt={movie.overview} className={styles.detailImage} />
          <div className={styles.description}>
            <p><strong className={styles.title}>Title: </strong>{movie.title}.</p>
            <p><strong className={styles.title}>Description: </strong>{movie.overview}</p>
            <p>
              <strong className={styles.title}>Genre: </strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}.
            </p>
            <p><strong className={styles.title}>Rating: </strong>{movie.vote_average}.</p>
            <div className={styles.items}>
              <a href={`https://www.google.com/search?q=trailer ${movie.title}`} className={styles.plus} target="_blank">More Info</a>
              <Link to="/movies"><FaArrowCircleLeft className={styles.arrow} /></Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MovieDetail;
