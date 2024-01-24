import {createSlice} from '@reduxjs/toolkit';
import {Result} from '../../components/Molecules/CardList/CardList.type';
import {getAllMovies} from '../thunk/thunk';

interface HomeState {
  homepageData: {
    nowPlaying: Result[];
    topRated: Result[];
    upcoming: Result[];
    popular: Result[];
  };
  loadingHomepageData: boolean;
  errorHomepageData: string | null;
  viewAllTitle: string;
  viewAllData: Result[];
}

const initialState: HomeState = {
  homepageData: {nowPlaying: [], topRated: [], upcoming: [], popular: []},
  loadingHomepageData: false,
  errorHomepageData: null,
  viewAllTitle: 'View All',
  viewAllData: [],
};

const homeSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    assignTitle: (state, action) => {
      state.viewAllTitle = action.payload;
    },
    getAllDataByCategory: (state, action) => {
      state.viewAllData = [...state.viewAllData, ...action.payload];
    },
    clearAllDataByCategory: state => {
      state.viewAllData = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllMovies.pending, state => {
        state.loadingHomepageData = true;
        state.errorHomepageData = null;
      })
      .addCase(getAllMovies.fulfilled, (state, action) => {
        state.homepageData = action.payload;
        state.loadingHomepageData = false;
        state.errorHomepageData = null;
      })
      .addCase(getAllMovies.rejected, (state, action) => {
        state.loadingHomepageData = false;
        state.errorHomepageData =
          action.error.message || 'Something went wrong.';
      });
  },
});

export const {assignTitle, getAllDataByCategory, clearAllDataByCategory} =
  homeSlice.actions;

export default homeSlice.reducer;
