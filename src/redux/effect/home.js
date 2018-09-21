import { call, put, takeLatest } from "redux-saga/effects";
import { HOME_ACTIONS, homeActions } from "../module/home";
import apiFetch from "../api";

function* homeNewsList() {
  try {
    const {
      data: { articles }
    } = yield call(apiFetch.newsList.getNews);

    if (articles) {
      yield put(homeActions.setData("dataNews", articles));
      yield put(homeActions.setData("searchData", articles));
      yield put(homeActions.message());
    }
  } catch (error) {
    yield put(homeActions.message(error));
    
  }
}

const getListNews = [takeLatest(HOME_ACTIONS.REQUEST, homeNewsList)];

export default getListNews;
