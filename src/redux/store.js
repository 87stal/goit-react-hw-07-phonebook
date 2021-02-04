import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';



const middleware =
  process.env.NODE_ENV === 'development'
    ? [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
        logger,
      ]
    : getDefaultMiddleware;



const store = configureStore({
  reducer: {
    phoneBook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});


export default store;