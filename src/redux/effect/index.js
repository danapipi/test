import { all } from "redux-saga/effects";
import getListNews from "./home";

export default function* rootSaga() {
  yield all([getListNews]);
}
