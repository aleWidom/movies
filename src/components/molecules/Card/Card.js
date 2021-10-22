import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

const Card = ({ movie }) => {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.card}>
            <Link to={'/details/' + movie.id} className={styles.link}>
            <img className={styles.img} src={imageUrl} alt={movie.title} />
            </Link>
           {/*  <p className={styles.title}>{movie.title}</p> */}
        </li>
    )
}

export default Card;
