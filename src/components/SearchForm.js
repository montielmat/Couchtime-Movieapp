import React,{useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

export const SearchForm = () => {

const [movie, setMovie] = useState({name:""})

const form = useRef('')

const {name} =movie

const handleOnChange = ({target})=>{
    setMovie({
        ...movie,
        name:target.value
    })
}

const search_url =`https://api.themoviedb.org/3/search/movie?api_key=e62c23c6a89f44bb94e028fd9db54528&query=${encodeURI(name)}&language=en-US&page=1&limit=4`

const navigate =useNavigate()

const searchMovie = async(e)=>{
 e.preventDefault()
const req = await fetch(search_url)
const {results} = await req.json()
navigate(`/movie/${results[0].id}`);
console.log(results[0])
}
  return (
      <div className='d-flex flex-row'>
    <form className='text-center me-3'>
      <input
       className="form-control w-100" 
       type="search" 
       value={movie.name}
       onChange={handleOnChange}
       placeholder='Search a movie...'
       />
    </form>
       <button 
       type="submit" 
       className={name < 4 ? 'btn btn-primary disabled':'btn btn-primary'}
       onClick={searchMovie}>Search</button>
      </div>
  )
}
