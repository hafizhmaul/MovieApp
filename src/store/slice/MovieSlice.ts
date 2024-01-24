import {createSlice} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import {Result} from '../../components/Molecules/CardList/CardList.type';
import {MovieDetailProps} from '../../screens/MovieDetail/MovieDetail.type';
import {findMovie, getMovieDetail} from '../thunk/thunk';

interface MovieState {
  searchResults: Result[];
  isLoadingMovie: boolean;
  error: string | null;
  page: number;
  totalPages: number;
  movieInfo: MovieDetailProps | null;
  listFavorited: any | MovieDetailProps[] | undefined;
  moviesByGenre: any[];
}

const initialState: MovieState = {
  searchResults: [],
  isLoadingMovie: false,
  error: null,
  page: 1,
  totalPages: 1,
  movieInfo: null,
  listFavorited: [],
  moviesByGenre: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    clearData: state => {
      state.isLoadingMovie = false;
      state.searchResults = [];
      state.moviesByGenre = [];
    },
    addFavorite: (state, action) => {
      state.listFavorited = [...state.listFavorited, action.payload];
      ToastAndroid.show('Added to Favorites', ToastAndroid.SHORT);
    },
    removeFavorite: (state, action) => {
      state.listFavorited = state.listFavorited.filter(
        (item: MovieDetailProps) => item.id !== action.payload,
      );
      ToastAndroid.show('Removed from Favorites', ToastAndroid.SHORT);
    },
    getAllMoviesByGenre: (state, action) => {
      state.moviesByGenre = [...state.moviesByGenre, ...action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(findMovie.pending, (state, action) => {
        if (action.meta.arg.query === '') {
          state.searchResults = [];
        } else {
          state.isLoadingMovie = true;
          state.error = null;
        }
      })
      .addCase(findMovie.fulfilled, (state, action) => {
        state.isLoadingMovie = false;
        state.searchResults = [...state.searchResults, ...action.payload];
      })
      .addCase(findMovie.rejected, (state, action) => {
        state.isLoadingMovie = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(getMovieDetail.pending, state => {
        state.isLoadingMovie = true;
        state.movieInfo = null;
        state.error = null;
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.isLoadingMovie = false;
        state.movieInfo = action.payload;
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.isLoadingMovie = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const {clearData, addFavorite, removeFavorite, getAllMoviesByGenre} =
  movieSlice.actions;

export default movieSlice.reducer;
