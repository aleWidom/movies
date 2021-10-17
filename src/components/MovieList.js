import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card'
import styles from './MovieList.module.css'
import Loading from './Loading.js'


const MovieList = (props) => {

  /* const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  } */

  const [state, setstate] = useState("")

  /* const location = useLocation()

  const query = useQuery();
  const search = query.get('search'); */

  const search = props.search;

  useEffect(() => {
    const searchUrl = search ? 'https://api.themoviedb.org/3/search/movie?query=' + search : 'https://api.themoviedb.org/3/discover/movie'; 
    fetch(searchUrl, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
        "Content-Type": "application/json;charset=utf-8",
      }
    })
      .then((res) => res.json())
      .then((data) => setstate(data.results))
      .catch((error) => {
        console.log(error);
      })
  }, [search])

  console.log(state)

  if(state === "") {
      return (<Loading/>)
  }
  else if (state.length === 0) {
    return (<p>No encontramos peliculas que coincidan con su búsqueda</p>)
  } else {
    return (
      <ul className={styles.movieList}>
        {state.filter((movie)=>(movie.poster_path)).map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </ul>)
    
  }
}

export default MovieList;