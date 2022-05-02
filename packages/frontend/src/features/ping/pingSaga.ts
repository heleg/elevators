import { put, takeLatest } from "redux-saga/effects";

import apiCall from "../../sagas/apiCall";
import { setPong } from "./pingSlice";
import { RequestNames } from "../ui/uiSlice";
import { sendPing } from "./actions";

export function* pingSaga() {
  yield takeLatest(sendPing, function* () {
    const { data } = yield apiCall("/ping", {
      name: RequestNames.PING,
    });

    if (data === "pong") {
      yield put(setPong());
    }
  });
}
