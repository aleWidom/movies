import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Pelicula.module.css'

const Pelicula = ({ movie }) => {

    const { id } = useParams();

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.pelicula}>
            <Link to='/details/2'><img className={styles.img} src={imageUrl} alt={movie.title} /></Link>
            <p>{movie.title}</p>
        </li>
    )
}

export default Pelicula;
