import { all, put, takeLatest } from "redux-saga/effects";

import { getBuilding } from "./actions";
import apiCall from "../../sagas/apiCall";
import { BuildingState, getBuildingSuccess } from "./buildingSlice";

function* watchGetBuilding() {
  yield takeLatest(getBuilding, function* () {
    const response = yield* apiCall<BuildingState>("/building");
    yield put(getBuildingSuccess(response.data));
  });
}

export default function* () {
  yield all([watchGetBuilding()]);
}
