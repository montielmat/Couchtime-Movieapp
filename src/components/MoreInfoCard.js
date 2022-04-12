import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getMovies } from '../helpers/getMovies'

import '../index.css'

export const MoreInfoCard = ({
  id,
  title,
  poster_path,
  release_date,
  adult,
  overview,
  vote_average,
  tagline,
  error
}) => {
  
const url= `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=1`
// const [res,loading] = useFetch( `https://api.themoviedb.org/3/movie/${id}/review?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=1`)

const [reviews, setReviews] = useState([])

useEffect(() => {
getMovies(url)
.then(data=> setReviews(data.results))
}, [url])

  return ( 
<div id="mre-inf-card" className="row mb-3  justify-content-center align-items-center animate__animated animate__backInLeft">
{
error?
<h4>Ups</h4>
:""
} 

<div className='col-4'>
      <img
      className='rounded img-fluid'
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
</div>

<div className='col-6 text-white'>

<div className='d-flex'>
<h4>{title}</h4>
<h6>
    {
        vote_average > 6 ?
        <h6 className="text-success mx-3">{vote_average}</h6>
        :
        <h6 className="text-warning mx-3">{vote_average}</h6>
      }
      </h6>
</div>
  <h6>{release_date}</h6>

<small className='text-white fs-6 blockquote mt-3'>"{tagline}"</small>

         <p className='mt-3'>{overview}</p> 

<div className='d-flex flex-column g-2'>

  {/* {
    .map(c =>(
      <small>{c.name}</small>
    ))
  } */}
</div>
          {/* <p className='mt-3'>
          Genres:
         {
           genres.map(g =>(<small className="mx-2" key={g.id}>{g.name}</small>))
         }
         </p>  
       */}
         <div>
         {
          adult ?
          <small className='fw-bold text-white'>+18</small>
          :""
         }
         </div>

      <Link to="/" className="btn btn-danger mt-3">
      <i className="fa-solid fa-circle-arrow-left"></i>
      <small className="mx-2">Back</small>
      </Link>
</div>

{/* <div className='col-6 d-flex flex-column g-2 w-100'>
<div className='m-2 p-3 shadow'>

<div className='row'>
 {
  reviews.map( r => (

  r.content.length > 2400
      ?
<div className='col-md-2'>
  <div className='card'>
 <img 
 className='card-img-top' 
 src={`https://image.tmdb.org/t/p/w300${r.author_details.avatar_path}`}
 /> 
  <div className='card-body text-dark'>
  <h5 className='card-title'>{r.author}</h5>
  <p className='card-text'>{r.content}</p>
  </div>
  </div>
</div>
:''
    }
  ))
  :''
}


</div>

</div>
</div> */}

</div>

  )
}
