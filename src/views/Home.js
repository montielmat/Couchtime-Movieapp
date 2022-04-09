import React from 'react';
import"../index.css";

import { MovieCard } from "../components/MovieCard";
import { Footer } from '../components/Footer';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export const Home = () => {
  
  const {count:page,nextPage,prevPage} = useCounter();
  
  const url= `https://api.themoviedb.org/3/movie/top_rated?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=${page}`
  
  const {res:movies,loading,error} = useFetch(url)

  return (
<div id="home" className="container-fluid mb-3 animate__animated animate__fadeIn">
{
  loading?
<div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>:
  error?<h5 className='text-center animate__animated animate__bounceX '>An error has been ocurred</h5>
  :
<>
<header className='w-100 h-auto mb-4'>
  <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-4"
      >
      {
        movies.results.map(img=>(
        <SwiperSlide key={img.id}>
        <img src={`https://image.tmdb.org/t/p/w500${img.poster_path}`} alt={img.title}/>
        <div id="img_overflow" className='position-absolute top-0 end-0 h-100 text-white d-flex flex-column'>
        <Link to={`movie/${img.id}`} className='fs-3 fw-bold text-decoration-underline text-danger'>{img.title}</Link>
        <p className='mt-2'>{img.overview}</p>
        </div>
        </SwiperSlide>
        ))
      }
  </Swiper>
</header>

<div className="grid justify-content-center">
  <div className="row row-cols-md-5 row-cols-sm-2 g-4">
    {movies.results? 
    movies.results.map((movie_data) => (
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
