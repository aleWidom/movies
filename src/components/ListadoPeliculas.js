import React from 'react';
import { useEffect, useState } from 'react';
import Pelicula from './Pelicula'
import styles from './ListadoPeliculas.module.css'
import Loading from './Loading.js'

const ListadoPeliculas = () => {

  const [state, setstate] = useState("")

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie', {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
        "Content-Type": "application/json;charset=utf-8",
      }
    })
      .then((res) => res.json())
      .then((data) => setstate(data.results))
  }, [])


  if(state === "") {
      return (<Loading/>)
  } else {
    return (
      <ul className={styles.listadoPeliculas}>
        {state.map((movie) => (
          <Pelicula key={movie.id} movie={movie} />
        ))}
      </ul>)
    
  }
}

export default ListadoPeliculas