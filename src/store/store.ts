// store.js
import {configureStore} from '@reduxjs/toolkit';

import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer/reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: thunkMiddleware,
      },
    }),
});

export {store};
