import React from 'react'
import { useParams } from 'react-router-dom'

export const Movie = () => {
    const q = useParams()
    
    const {id} = q

  return (
    <div>
    <h5 className='text-white'>{id}</h5>
    </div>
  )
}
