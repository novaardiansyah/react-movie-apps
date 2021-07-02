import React, { useState, useEffect } from 'react'
// style
import '../../assets/scss/components/movies/MovieList.scss'

// static
import { axiosInstance, properties } from '../static/axios'

export default function MovieList({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function getMovies() {
      const request = await axiosInstance.get(fetchUrl)

      return setMovies(request.data.results)
    }
    getMovies()
  }, [fetchUrl])

  return (
    <div className="row justify-content-center mb-3">
      <div className="col-lg-8">
        <h3 className="movie__title">{title}</h3>
      </div>

      <div className="col-lg-8 p-2 d-flex flex-row overflow-scroll">
        {movies.map((movie) => (
          <img
            src={`${properties.baseImageUrl}/${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
            className={`movie__poster me-2 ${isLarge ? 'is-large' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
