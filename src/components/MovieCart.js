import React from 'react'
import { POSTER_PATH_URL } from '../utils/constant'

const MovieCart = ({posterPath}) => {
  return (
    <div className='w-36 pr-4'>
    <img   alt='poster' src={POSTER_PATH_URL+ posterPath}></img>
    </div>
  )
}

export default MovieCart