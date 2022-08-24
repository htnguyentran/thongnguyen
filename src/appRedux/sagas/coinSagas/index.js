import { GET_POST_COIN } from "appRedux/actionsType";
import { takeLatest } from "redux-saga/effects";
import { getPostCoinSaga } from "./getPostCoinSaga";

export default function* coinSagas() {
  yield takeLatest(GET_POST_COIN.HANDLER, getPostCoinSaga);
}
