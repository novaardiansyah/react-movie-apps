const TMDB_API_KEY = process.env.REACT_APP__TMDB_API_KEY

export const requests = {
  trending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
}
