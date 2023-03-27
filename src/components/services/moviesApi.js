import axios from 'axios';

const id = '60680';
const key = 'bf849ac9154ddcf14074361fb0f94011';
const url ='https://api.themoviedb.org/3/movie/550?api_key=bf849ac9154ddcf14074361fb0f94011';
const url_day =`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;
const url_search = `https://api.themoviedb.org/3/search/company?api_key=${key}&page=1&query=Fight`;
const url_details = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
const url_credits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`;
const url_reviews = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`

const getInfo = async () => {
   return await axios.get(url_day);
};

export default getInfo;