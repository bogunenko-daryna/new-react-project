import { combineReducers } from 'redux';
import filters from './filters';
import sushi from './sushi';

const rootReduser = combineReducers({
  filters,
  sushi,
});

export default rootReduser;
