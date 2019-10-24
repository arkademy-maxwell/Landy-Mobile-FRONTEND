import { combineReducers } from "redux";

import Room from "./Room";
import Flight from './Flight'
import Auth from './Auth'

const allReducers = combineReducers({
  Auth,
  Room,
  Flight
});

export default allReducers;
