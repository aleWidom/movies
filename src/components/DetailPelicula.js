import {useEffect, useState} from 'react';
import { useParams  } from 'react-router';




const DetailPelicula = () => {

    const {id} = useParams();

    const [movies, setMovies] = useState(null)

   

    useEffect(() => {
       fetch(`https://api.themoviedb.org/3/discover/movie/${id}`, {
       headers:  {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
          "Content-Type": "application/json;charset=utf-8",
      }
     })
     .then((res)=> res.json())
     .then((data) => setMovies(data))
     .catch((error)=> {
         console.log(error);
     })
  }, [id])


     if(!movies) {
        return null
    }


    return (

      <h2>{movies.id}</h2>
   
    )
}

export default DetailPelicula
