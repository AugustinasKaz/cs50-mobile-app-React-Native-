import axios from 'axios'

export const fetchData = async (data) => {
  const promise = await axios.get('http://www.omdbapi.com/?apikey=9abbfc0&', {params: {s: data}})
  //const status = promise.status;
  //if(status === 200)
  const results = promise.data;
  return results;
}


