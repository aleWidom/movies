import React from 'react';
import { Link} from 'react-router-dom';
import styles from './Pelicula.module.css'

const Pelicula = ({ movie }) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.pelicula}>
            <Link to={'/details/' + movie.id}><img className={styles.img} src={imageUrl} alt={movie.title} /></Link>
            <p>{movie.title}</p>
        </li>
    )
}

export default Pelicula;
