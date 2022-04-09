import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "../index.css"
import { MoreInfoCard } from '../components/MoreInfoCard';
import { getMovies } from "../helpers/getMovies";

export const SingleMovieView = () => {

const q = useParams();

const {id} = q;

const u= `https://api.themoviedb.org/3/movie/${id}?api_key=e62c23c6a89f44bb94e028fd9db54528&page=1`

const [i, setM] = useState([]);

useEffect(() => {
  getMovies(u).then((d) => {
    console.log(d);
    setM(d);
  });
  console.log(i);
}, [i,u]);

  return (
    <div id="movie" 
    className='container-sm d-flex justify-content-center text-white'>
{
i?
<MoreInfoCard key={i.id}{...i}/>
:""
}
    </div>
  )
}
