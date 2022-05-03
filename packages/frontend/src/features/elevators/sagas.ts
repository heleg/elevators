import { all, cancelled, put, takeLatest, take } from "redux-saga/effects";

import apiCall from "../../sagas/apiCall";
import {
  Elevator,
  getElevatorsSuccess,
  updateElevator,
} from "./elevatorsSlice";
import { callElevator, getElevators } from "./actions";
import { subscribeToSSE } from "../../sagas/SSEUtil";

function* watchGetElevators() {
  yield takeLatest(getElevators, function* () {
    const response = yield* apiCall<Elevator[]>("/elevators");
    yield put(getElevatorsSuccess(response.data));
  });
}

function* watchCallElevator() {
  yield takeLatest(callElevator, function* (action) {
    yield* apiCall("/floor/:number", {
      method: "put",
      params: {
        number: action.payload.floor,
      },
    });
  });
}

function* subscribeToElevatorEvents() {
  const eventSrc = new EventSource("http://localhost:8080/stream");
  const channel = subscribeToSSE(eventSrc);
  try {
    while (true) {
      const elevator: Elevator = yield take(channel);
      yield put(updateElevator({ elevator }));
    }
  } finally {
    yield cancelled();
    channel.close();
  }
}

export default function* () {
  yield all([
    watchCallElevator(),
    watchGetElevators(),
    subscribeToElevatorEvents(),
  ]);
}
