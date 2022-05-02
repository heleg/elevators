import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import elevators from "./features/elevators/elevatorsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { elevators },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
