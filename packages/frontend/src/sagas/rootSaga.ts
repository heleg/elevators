import { all } from "redux-saga/effects";
import { pingSaga } from "../features/ping/pingSaga";
import building from "../features/building/sagas";
import elevators from "../features/elevators/sagas";

function* rootSaga() {
  yield all([pingSaga(), building(), elevators()]);
}

export default rootSaga;
