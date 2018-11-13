import { combineReducers } from 'redux';
import RootReducer from './RootReducer'
const rootReducer = combineReducers({
  root: RootReducer
});
export default rootReducer;
