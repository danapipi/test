import { combineReducers } from "redux";

import navigation from "./navigation";
import details from "./details";

const appReducers = combineReducers({
  navigation,
  details
});

export default appReducers;
