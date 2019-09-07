import axios from 'axios'

const extractMovie = movie => ({
  title: movie.Title,
  type: movie.Type,
  year: movie.Year,
  id: movie.imdbID,
  poster_url: movie.Poster
})

export const fetchData = async (data) => {
  const promise = await axios.get('http://www.omdbapi.com/?apikey=9abbfc0&', {params: {s: data}})
  if(promise.data.Response === 'True'){
    const results = promise.data.Search;
    return results.map(extractMovie);
  }
  else
   return false;
}

export const fetchMovieData = async (name) => {
  const promise = await axios.get('http://www.omdbapi.com/?apikey=9abbfc0&', {params: {t: name}})
  if(promise.status === 200){
    const movie_data = promise.data
    return movie_data
  }
  else
    return false;
}

