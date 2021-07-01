import React, { useState, useEffect } from 'react'
// style
import '../../assets/scss/components/movies/MovieList.scss'

// static
import { axiosInstance } from '../static/axios'

export default function MovieList({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const request = await axiosInstance.get(fetchUrl)

      return setMovies(request.data.results)
    }
    getMovies()
  }, [fetchUrl])

  const baseImageUrl = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="row justify-content-center">
      <div className="col-md-10 col-lg-8">
        <h3 className="movie__title">{title}</h3>
      </div>

      <div className="col-md-10 col-lg-8 d-flex flex-row overflow-scroll">
        {movies.map((movie) => (
          <img
            src={`${baseImageUrl}/${movie.poster_path}`}
            alt={movie.name}
            key={movie.id}
            className="movie__poster me-1"
          />
        ))}
      </div>
    </div>
  )
}
