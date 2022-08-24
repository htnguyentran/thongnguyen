import { postApis } from "api/postApi";
import {
  getPostCoinFailure,
  getPostCoinSuccess,
} from "appRedux/actions/coinActions";
import { call, put } from "redux-saga/effects";

export function* getPostCoinSaga({ payload = {} }) {
  try {
    let params = {};
    const result = yield call(postApis.getListPost, params);
    yield put(
      getPostCoinSuccess({
        listPostCoin: result,
      })
    );
  } catch (err) {
    yield put(getPostCoinFailure({ err: err }));
  }
}
