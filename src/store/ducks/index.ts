import axios from 'axios';
import { combineReducers } from 'redux';

import tasksReducer from './tasks.duck';

export const client = axios.create({ timeout: 2000 });

export default combineReducers({
  tasksReducer,
});
