import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'a11681fbc130343b10afc879742afe20';

const fetchPopularFilms = async () => {
  return await axios
      .get(`trending/movie/day?api_key=${KEY}`)
      .then(r => r.data.results)
};

const fetchFilmsByQuery = async searchQuery => {
  return await axios
      .get(`search/movie?api_key=${KEY}&query=${searchQuery}`)
      .then(r => r.data.results)
};

const fetchFilmDetailsById = async id => {
  return await axios
      .get(`movie/${id}?api_key=${KEY}&append_to_response=credits,reviews`)
      .then(r => r.data)
};

export default {fetchPopularFilms, fetchFilmsByQuery, fetchFilmDetailsById};