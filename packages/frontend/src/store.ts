import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import ping from "./features/ping/pingSlice";
import elevators from "./features/elevators/elevatorsSlice";
import ui from "./features/ui/uiSlice";

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ui,
    ping,
    elevators,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
