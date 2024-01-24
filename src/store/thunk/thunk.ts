import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  DetailMovieApi,
  MoviesWithSelectedGenre,
  NowPlayingMovieApi,
  PopularMovieApi,
  SearchMovieApi,
  TopRatedMovieApi,
  UpcomingMovieApi,
} from '../api/api';

export const findMovie = createAsyncThunk(
  'movie/findMovie',
  async ({
    query,
    page,
    setTotalPages,
  }: {
    query: string;
    page: number;
    setTotalPages: any;
  }) => {
    const response = await SearchMovieApi(query, page);
    setTotalPages(response.data.total_pages);
    return response.data.results;
  },
);

export const nowPlayingMovie = createAsyncThunk(
  'home/nowPlayingMovie',
  async ({page}: {page: number}) => {
    const response = await NowPlayingMovieApi(page);
    return response.data.results;
  },
);

export const topRatedMovie = createAsyncThunk(
  'home/topRatedMovie',
  async ({page}: {page: number}) => {
    const response = await TopRatedMovieApi(page);
    return response.data.results;
  },
);

export const upcomingMovie = createAsyncThunk(
  'home/upcomingMovie',
  async ({page}: {page: number}) => {
    const response = await UpcomingMovieApi(page);
    return response.data.results;
  },
);

export const popularMovie = createAsyncThunk(
  'home/popularMovie',
  async ({page}: {page: number}) => {
    const response = await PopularMovieApi(page);
    return response.data.results;
  },
);

export const getAllMovies = createAsyncThunk(
  'home/getAllMovies',
  async (page: number) => {
    const nowPlaying = NowPlayingMovieApi(page);
    const popular = PopularMovieApi(page);
    const topRated = TopRatedMovieApi(page);
    const upcoming = UpcomingMovieApi(page);

    const [
      nowPlayingResponse,
      popularResponse,
      topRatedResponse,
      upcomingResponse,
    ] = await Promise.all([nowPlaying, popular, topRated, upcoming]);

    return {
      nowPlaying: nowPlayingResponse.data.results,
      popular: popularResponse.data.results,
      topRated: topRatedResponse.data.results,
      upcoming: upcomingResponse.data.results,
    };
  },
);

export const getMovieDetail = createAsyncThunk(
  'movie/detail',
  async ({id}: {id: number}) => {
    const response = await DetailMovieApi(id);
    return response.data;
  },
);

export const getMoviesByGenre = createAsyncThunk(
  'movie/genre',
  async ({
    id,
    page,
    setTotalPages,
  }: {
    id: number;
    page: number;
    setTotalPages: any;
  }) => {
    const response = await MoviesWithSelectedGenre(id, page);
    setTotalPages(response.data.total_pages);
    return response.data.results;
  },
);
