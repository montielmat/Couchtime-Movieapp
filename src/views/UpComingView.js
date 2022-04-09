import React from 'react'
import "../index.css"

import { MovieCard } from "../components/MovieCard";
import { Footer } from '../components/Footer';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';


export const UpComingView = () => {

  const {count:page,nextPage,prevPage} = useCounter();

  const url= `https://api.themoviedb.org/3/movie/upcoming?api_key=e62c23c6a89f44bb94e028fd9db54528&page=${page}`
  
  const {res:coming,loading,error} = useFetch(url)

    return (
  <div id="home" className="container-fluid mt-2 animate__animated animate__fadeIn">
  {
    loading?
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>:
  error?
  <h5 className='text-center animate__animated animate__bounceX '>An error has been ocurred</h5>
  :
  <>
  <div className="grid justify-content-center">
    <div className="row row-cols-md-5 row-cols-sm-2 g-4">
      {coming.results? 
      coming.results.map((movie_data) => (
            <MovieCard key={movie_data.id}{...movie_data} />
          ))
        : ""}
    </div>
  </div>
  
  <div className="d-flex m-3 justify-content-center">
      <button className="btn btn-outline-danger mx-2 text-white" onClick={prevPage}>Back</button>
      <button className="btn btn-outline-danger text-white" onClick={nextPage}>Next</button>
  </div>
  </>
  }
  <Footer/>
  </div>
  )
}
