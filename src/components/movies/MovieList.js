import React, { useState, useEffect } from 'react'
import movieTrailer from 'movie-trailer'

// style
import '../../assets/scss/components/movies/MovieList.scss'

// static
import { axiosInstance, properties } from '../static/axios'

// contexts
import { useMovies } from '../../contexts/MoviesProvider'

export default function MovieList({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([])
  const { trailerUrl, setTrailerUrl } = useMovies()

  useEffect(() => {
    async function getMovies() {
      const request = await axiosInstance.get(fetchUrl)

      return setMovies(request.data.results)
    }
    getMovies()
  }, [fetchUrl])
  
  const playTrailer = (movie) => {
    return movieTrailer(movie?.name || movie?.title || '')
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)

        if (trailerUrl === urlParams.get('v')) return setTrailerUrl('')
        
        setTrailerUrl(urlParams.get('v'))
        
        const videoPlayer = document.getElementById("youtube__player");
        window.scroll({
          top: videoPlayer.offsetTop - 120,
          behavior: 'smooth'
        });
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

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
            alt={movie?.name}
            key={movie?.id}
            onClick={() => playTrailer(movie)}
            className={`movie__poster me-2 ${isLarge ? 'is-large' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
