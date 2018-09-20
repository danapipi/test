import { all } from "redux-saga/effects";
import getData from "./news";

export default function* rootSaga() {
  yield all([getData]);
}
