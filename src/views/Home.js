import React,{useState, useEffect,useMemo} from 'react';
import"../index.css";

import { MovieCard } from "../components/MovieCard";
import { useCounter } from '../hooks/useCounter';

export const Home = () => {
    const [movies, setMovies] = useState([]);

    const {page,nextPage,prevPage} = useCounter(1);

    const getMovies = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/trending/all/week?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=1&limit=10"
      );
      const { results } = await res.json();
      setMovies(results);
      return results;
    };

useEffect(()=>{
console.log(page)
},[page])

    useEffect(() => {
      getMovies();
    }, [movies]);

  return (
    <div id="home" className="container-md bg-dark bg-dark-gradient mt-2 animate__animated animate__fadeIn">
      <h1 className="pt-4 text-danger text-center">
      Couchtime
      </h1>

<div className='d-flex mb-3 justify-content-center'>
      <form className='w-25 text-center'>
        <input className="form-control" type="search" id="movie_search" placeholder='Search a movie...'/>
      </form>
</div>

      <div className="grid justify-content-center">
        <div className="row row-cols-6 g-4">
          {movies
            ? movies.map((movie_data) => (
              <MovieCard key={movie_data.id}{...movie_data} />
              ))
            : ""}
        </div>
      </div>

    </div>
  )
}
