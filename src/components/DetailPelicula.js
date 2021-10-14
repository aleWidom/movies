import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './DetailPelicula.module.css'




const DetailPelicula = () => {

  const { id } = useParams();

  const [movies, setMovies] = useState(null)



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
        "Content-Type": "application/json;charset=utf-8",
      }
    })
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => {
        console.log(error);
      })
  }, [id])


  if (!movies) {
    return null
  }

  console.log(movies)

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movies.poster_path;
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={movies.overview} />
      <div className={styles.description}>
        <h3><strong>Title: </strong>{movies.title}</h3>
        <p><strong>Description: </strong>{movies.overview}</p>
        <p><strong>Genres: </strong>{movies.genres.map((e) => (
          <span key={e.id}>{e.name} -</span>
        ))}</p>
      </div>
    </div>

  )
}

export default DetailPelicula
