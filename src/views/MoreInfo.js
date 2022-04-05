import React from 'react'
import { Link, useParams } from 'react-router-dom'
import"../index.css";

export const MoreInfo = () => {

const params= useParams();
console.log(params)

  return (
    <div id="more_info" className='container-md bg-dark border p-2 mt-2 text-white animate__animated animate__fadeIn'>
    <h3 className='text-white text-center p-2'>More Info</h3>
    
   <div className='container-fluid d-flex justify-content-center flex-wrap'>
    <p>{params.movieId}</p>
    </div> 
    <Link to="/" className='btn btn-primary m-2'>Back</Link>
    </div>

  )
}
