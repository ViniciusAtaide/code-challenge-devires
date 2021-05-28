import axios from 'axios';
import { combineReducers } from 'redux';

import tasksReducer from './tasks.duck';

export const client = axios.create({ timeout: 5000 });

export default combineReducers({
  tasksReducer,
});
