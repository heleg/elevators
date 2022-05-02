import { all } from "redux-saga/effects";
import { pingSaga } from "../features/ping/pingSaga";

function* rootSaga() {
  yield all([pingSaga()]);
}

export default rootSaga;
