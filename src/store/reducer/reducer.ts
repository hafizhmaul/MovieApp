import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import homeReducer from '../slice/HomeSlice';
import movieReducer from '../slice/MovieSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  movie: persistReducer(persistConfig, movieReducer),
  home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
