import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export const properties = {
  baseImageUrl: 'https://image.tmdb.org/t/p/original'
}
