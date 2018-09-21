import { combineReducers } from "redux";

import navigation from "./navigation";
import details from "./details";
import home from './home'

const appReducers = combineReducers({
  navigation,
  details,
  home
});

export default appReducers;
