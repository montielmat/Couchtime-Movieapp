import React from 'react'
import"../index.css";
import { MovieCard } from "../components/MovieCard";

import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
export const TrendingsView = () => {

  const {count:page,nextPage,prevPage} = useCounter();

  const url= `https://api.themoviedb.org/3/trending/all/week?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=${page}`
  
  const {res:trending,loading,error} = useFetch(url)

    return (
  <div id="home" className="container-md bg-dark bg-dark-gradient mt-2 animate__animated animate__fadeIn">
  {
    loading?
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  :
  <>
  
  <div className="grid justify-content-center">
    <div className="row row-cols-6 g-4">
      {trending? 
      trending.map((movie_data) => (
            <MovieCard key={movie_data.id}{...movie_data} />
          ))
        : ""}
    </div>
  </div>
  
  <nav aria-label="...">
    <ul className="pagination pagination-md m-2 justify-content-center">
      <li className="page-item" aria-current="page">
        <span className="page-link" onClick={prevPage}>Back</span>
      </li>
      <li className="page-item">
      <a className="page-link" href="#" onClick={nextPage}>Next</a>
      </li>
    </ul>
  </nav>
  </>
  }
  </div>
  )
}
