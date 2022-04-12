import React, { useState, useEffect } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import { MoreInfoCard } from "../components/MoreInfoCard";
import { getMovies } from "../helpers/getMovies";
import { useFetch } from '../hooks/useFetch';

import "../index.css";

export const MoreInfoView = () => {

const { movieId } = useParams();

const moreinf_url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=1`;
  
const {res:movie,loading} = useFetch(moreinf_url);

// const {res:movie,loading} = useFetch(videos_url);

// // const [movie, setMovie] = useState([]);

const [error,setError] = useState(null);

const [cast,setCast] =useState([])

const [video,setVideo] =useState([])

  const videos_url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=1`;
 
  const cast_url =`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=1`
  

  // useEffect(()=>{
  //   getMovies(videos_url)
  //   .then(data=>setVideo(data))
  //   .catch(error=>{setError(error)})
  //   console.log("video",video)
  // },[videos_url,video])
  
  // https://www.youtube.com/watch?v=27GoRa4d15c&list=TLPQMDgwNDIwMjIBHyJdi8Tynw&

// useEffect(()=>{
//   getMovies(cast_url)
//   .then(data=>setCast(data.cast))
//   .catch(error=>{setError(error)})
//   console.log("cast",cast)
// },[cast_url])

  // useEffect(() => {
  //   getMovies(moreinf_url)
  //   .then((data) => {
  //     setMovie(data);
  //   })
  // .catch(error=>{setError(error)})

  // },[moreinf_url,movie]);

  return (
    <div
      id="more_info"
      className="
      container-md
      d-flex
      align-items-center
      m-auto
      animate__animated animate__fadeIn"
    >
      {
        error ?
       <h4>Ups</h4>
        :
        <MoreInfoCard key={movie.id} {...movie} error={error}/>
        }
    </div>
  );
};
