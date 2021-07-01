import React, { useState, useEffect } from 'react'
// static
import { axiosInstance } from '../static/axios'

export default function MovieList({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    async function getMovies() {
      const request = await axiosInstance.get(fetchUrl)
      console.log(request.data.results)
    }
    
    getMovies()
  })
  
  return (
    <div>{ title }</div>
  )
}
