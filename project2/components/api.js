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
    //console.log(promise.data.Search)
    const results = promise.data.Search;
    return results.map(extractMovie);
  }
  else
   return false;
}

