import { combineReducers } from "redux";

import navigation from "./navigation";
import home from './home'

const appReducers = combineReducers({
  navigation,
  home
});

export default appReducers;
