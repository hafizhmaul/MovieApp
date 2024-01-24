import {API_KEY, BASE_URL_API} from '@env';
import axios from 'axios';

// const API_KEY = '81d69d3858e42f2d2b4a8c8deb64a031';
// const BASE_URL_API = 'https://api.themoviedb.org/3';

export const SearchMovieApi = (query: string, page: number) => {
  return axios.get(
    `${BASE_URL_API}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
  );
};

export const NowPlayingMovieApi = (page: number) => {
  return axios.get(
    `${BASE_URL_API}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
};

export const PopularMovieApi = (page: number) => {
  return axios.get(
    `${BASE_URL_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
};

export const TopRatedMovieApi = (page: number) => {
  return axios.get(
    `${BASE_URL_API}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
};

export const UpcomingMovieApi = (page: number) => {
  return axios.get(
    `${BASE_URL_API}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
};

export const DetailMovieApi = (id: number) => {
  return axios.get(
    `${process.env.BASE_URL_API}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`,
  );
};

export const MoviesWithSelectedGenre = (id: number, page: number) => {
  return axios.get(
    `${process.env.BASE_URL_API}/discover/movie?api_key=${process.env.API_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`,
  );
};
