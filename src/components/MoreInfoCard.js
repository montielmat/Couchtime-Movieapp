import React from 'react'
import { Link } from 'react-router-dom'

import '../index.css'

export const MoreInfoCard = ({
  id,
  title,
  poster_path,
  release_date,
  adult,
  genres,
  overview,
  vote_average,
  name,
  tagline
}) => {
  
// const [rate,setRate] = useState(false)

// const rate_url=`https://api.themoviedb.org/3/movie/${id}/rating?api_key=e62c23c6a89f44bb94e028fd9db54528`

// const addRate = ()=>{
//  handleSendRate(rate_url)
//  .then(r => console.log(r))
// setRate(!rate)
// console.log(rate)
// }

  return ( 
<div className="row mb-3 justify-content-center align-items-center animate__animated animate__backInLeft">
      
<div className='col-4'>
      <img
      className='rounded img-fluid'
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
</div>

<div className='col-8 text-white'>

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

</div>

  )
}
