import React from 'react'
import movies from '../data/data.json'
import Pelicula from './Pelicula'
import styles from './ListadoPeliculas.module.css'


const ListadoPeliculas = () => {

  console.log(styles)
  return (
        <ul className={styles.listadoPeliculas}> 
          {movies.map((movie)=>(
            <Pelicula key={movie.id} movie={movie}/>
          ))}
        </ul>
    )
}

export default ListadoPeliculas
