import { configureStore } from '@reduxjs/toolkit';

import reducers from './ducks';

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({ reducer: reducers });

export default store;
