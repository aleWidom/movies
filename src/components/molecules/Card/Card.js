import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import { loadingMovies } from '../../../redux/movieDucks';
import {useDispatch} from 'react-redux'

const Card = ({ movie }) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    const dispatch = useDispatch();
    
    const click = () => {
        dispatch(loadingMovies(true));
    }

    return (
        <li className={styles.card}>
            <Link to={'/details/' + movie.id} className={styles.link} onClick={click}>
            <img className={styles.img} src={imageUrl} alt={movie.title} />
            </Link>
{/*            <p className={styles.title}>{movie.title}</p>  */}
        </li>
    )
}

export default Card;
